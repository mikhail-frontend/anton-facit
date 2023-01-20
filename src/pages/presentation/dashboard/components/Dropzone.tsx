import React, {useEffect, useState, useRef} from 'react';
import {useDropzone} from 'react-dropzone';
import styles from './Dropzone.module.scss';
import axios from "axios";
// src/components/icon/material-icons/ClearAll.tsx
import SvgClearAll from '../../../../components/icon/material-icons/Close'

export default function Dropzone(props: any) {
    const {photo, savePhoto, deletePhoto} = props;
    const inputRef = useRef<HTMLInputElement>(null)
    const [files, setFiles] = useState<any>(photo ? [photo] : []);
    const [isActive, setIsActive] = useState(false);
    const {getRootProps, getInputProps, acceptedFiles, open} = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: async (acceptedFiles: any[]) => {
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
                // Revoke data uri after image is loaded
            />
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach((file:any) => URL.revokeObjectURL(file.preview));
    }, []);


    return (
        <div style={{position: 'relative', width: 'max-content'}} onClick={open}>
            <SvgClearAll onClick={removeAll} className={styles.close}/>

            <section className={`${styles.dropzone} ${isActive ? styles.active : ''}`}>

                <div {...getRootProps({className: 'dropzone'})} className={thumbs.length && styles.invisible}>
                    <input {...getInputProps()} ref={inputRef}/>
                    <p>Drag 'n' drop your photo here, or click to select it</p>
                </div>

                <aside className={`${styles.thumbs} ${!thumbs.length && styles.invisible}`}>
                    {thumbs}
                </aside>

            </section>


        </div>
    );
}
