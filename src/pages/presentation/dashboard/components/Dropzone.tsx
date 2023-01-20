import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';

const thumbsContainer:any = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb:any = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner:any = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img:any = {
    display: 'block',
    width: 'auto',
    height: '100%'
};


export default function Dropzone(props: any) {
    const [files, setFiles] = useState<any>([]);
    const {getRootProps, getInputProps} = useDropzone({
        accept: {
            'image/*': []
        },
        //@ts-ignore
        onDrop: acceptedFiles => {
            //@ts-ignore
            setFiles(acceptedFiles.map((file:any) => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        },
        maxFiles: 1
    });

    const thumbs:any = files.map((file:any) => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach((file:any) => URL.revokeObjectURL(file.preview));
    }, []);


    return (
        <section className="container">
            <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop your photo here, or click to select it</p>
            </div>

            <aside style={thumbsContainer}>
                {thumbs}
            </aside>
        </section>
    );
}
