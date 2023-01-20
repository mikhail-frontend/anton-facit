import React, {useEffect, useState, useRef} from 'react';
import {useDropzone} from 'react-dropzone';
import styles from './Dropzone.module.scss';
import axios from "axios";
import SvgClearAll from '../../../../components/icon/material-icons/Close'
import Spinner from "../../../../components/bootstrap/Spinner";

export default function Dropzone({photo, savePhoto, deletePhoto}) {
    const inputRef = useRef<HTMLInputElement>(null)
    const [files, setFiles] = useState<any>(photo ? [photo] : []);
    const [isActive, setIsActive] = useState(false);
    const [loading, setLoading] = useState(false)
    const {getRootProps, getInputProps, acceptedFiles, open} = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: async (acceptedFiles: any[]) => {
            setLoading(true)
            const [image] = acceptedFiles;
            if (!image) return;
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setFiles([reader.result])
            }, false);

            const {data} = await axios.post('https://httpbin.org/post', {image});
            const uploaded = JSON.parse(data.data);
            setFiles([uploaded.image])
            savePhoto(typeof uploaded.image === 'string' ? uploaded.image : uploaded.image.path)
            setLoading(false)
        },
        
        onDragEnter: () => {
            setIsActive(true)
        },
        onDragLeave: () => {
            setIsActive(false)
        },
        maxFiles: 1
    });

    const removeAll = (event:React.MouseEvent<any>) => {
        event.preventDefault();
        event.stopPropagation()
        acceptedFiles.length = 0;
        (inputRef as any).current.value = '';
        setFiles([]);
        deletePhoto()
    }



    const thumbs:any = files.map((file:any) => (
        <div key={file} className={styles.thumb}>
            <img
                src={file}
                alt={'photo'}
            />
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach((file:any) => URL.revokeObjectURL(file.preview));
    }, []);

    useEffect(() => {
        setFiles(() => photo ? [photo] : []);
        return () => {}
    }, [photo])


    return (
        <div style={{position: 'relative', width: 'max-content'}} onClick={open}>
            <SvgClearAll onClick={removeAll} className={styles.close}/>

            <section className={`${styles.dropzone} ${isActive ? styles.active : ''}`}>

                <div {...getRootProps({className: 'dropzone'})} className={thumbs.length && styles.invisible}>
                    <input {...getInputProps()} ref={inputRef}/>
                    {loading && (
                        <Spinner   isGrow />
                    )}
                    {!loading &&                     <p>Drag 'n' drop your photo here, or click to select it</p>
                    }
                </div>

                <aside className={`${styles.thumbs} ${!thumbs.length && styles.invisible}`}>
                    {thumbs}
                </aside>

            </section>


        </div>
    );
}
