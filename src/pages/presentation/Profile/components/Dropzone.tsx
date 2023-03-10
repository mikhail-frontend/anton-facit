import React, { useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './Dropzone.module.scss';
import axios from 'axios';
import SvgClearAll from '../../../../components/icon/material-icons/Close';
import Spinner from '../../../../components/bootstrap/Spinner';
import Modal, { ModalBody, ModalHeader, ModalTitle } from '../../../../components/bootstrap/Modal';
import Button from '../../../../components/bootstrap/Button';

const Dropzone: React.FC<{
	photo: string;
	savePhoto: (photo: string) => void;
	deletePhoto: () => void;
}> = ({ photo, savePhoto, deletePhoto }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [files, setFiles] = useState<any>(photo ? [photo] : []);
	const [isActive, setIsActive] = useState(false);

	const [loading, setLoading] = useState(false);
	const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

	const {
		getRootProps,
		getInputProps,
		acceptedFiles: acceptedFilesList,
		open,
	} = useDropzone({
		accept: {
			'image/*': [],
		},
		onDrop: async (acceptedFiles: any[]) => {
			setLoading(true);
			const [image] = acceptedFiles;
			if (!image) return;
			const reader = new FileReader();
			reader.addEventListener(
				'load',
				() => {
					setFiles([reader.result]);
				},
				false,
			);

			const { data } = await axios.post('https://httpbin.org/post', { image });
			const uploaded = JSON.parse(data.data);
			setFiles([uploaded.image]);
			savePhoto(typeof uploaded.image === 'string' ? uploaded.image : uploaded.image.path);
			setLoading(false);
		},

		onDragEnter: () => {
			setIsActive(true);
		},
		onDragLeave: () => {
			setIsActive(false);
		},
		maxFiles: 1,
	});

	const removeAll = (event: React.MouseEvent<any>) => {
		event.preventDefault();
		event.stopPropagation();
		acceptedFilesList.length = 0;
		inputRef && inputRef.current ? (inputRef.current.value = '') : void null;
		setFiles([]);
		deletePhoto();
		setSelectedImage(undefined);
	};

	// eslint-disable-next-line
	const thumbs: any = files.map((file: any) => (
		<div key={file} className={styles.thumb}>
			<img src={file} alt='Users avatar' />
		</div>
	));

	useEffect(() => {
		// Make sure to revoke the data uris to avoid memory leaks, will run on unmount
		return () => files.forEach((file: any) => URL.revokeObjectURL(file.preview));
	}, [files]);

	useEffect(() => {
		setFiles(() => (photo ? [photo] : []));
		return () => {};
	}, [photo]);

	const setImageUltimately = (
		image: string | undefined,
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		event && event?.preventDefault ? event?.preventDefault() : void null;
		event && event?.stopPropagation ? event?.stopPropagation() : void null;
		setSelectedImage(image);
	};

	const setIsOpen = (value, event) => {
		event && event?.preventDefault ? event?.preventDefault() : void null;
		event && event?.stopPropagation ? event?.stopPropagation() : void null;
		event && event?.stopImmediatePropagation ? event?.stopImmediatePropagation() : void null;
		setImageUltimately(undefined, event);
	};

	return (
		<>
			<div
				style={{ position: 'relative', margin: 'auto' }}
				className='col-md-6'
				onClick={open}>
				<SvgClearAll onClick={removeAll} className={styles.close} />
				<section className={`${styles.dropzone} ${isActive ? styles.active : ''}`}>
					<div
						{...getRootProps({ className: 'dropzone' })}
						className={thumbs.length && styles.invisible}>
						<input {...getInputProps()} ref={inputRef} />
						{loading && <Spinner isGrow />}
						{!loading && <p>Drag 'n' drop your photo here, or click to select it</p>}
					</div>

					<aside className={`${styles.thumbs} ${!thumbs.length && styles.invisible}`}>
						{thumbs}
					</aside>
				</section>

				<Modal setIsOpen={setIsOpen} isOpen={!!selectedImage} isCentered size='xl'>
					<ModalHeader setIsOpen={setIsOpen}>
						<ModalTitle id='preview'>Preview</ModalTitle>
					</ModalHeader>
					<ModalBody>
						<img src={selectedImage} alt='eneme' />
					</ModalBody>
				</Modal>
			</div>
			{files && files.length ? (
				<div className='col-md-6 m-auto'>
					<Button
						type='button'
						className='px-5 py-3 mb-5 mt-2 ml-auto'
						color='primary'
						isLight
						icon='Preview'
						onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
							setImageUltimately(photo, event)
						}>
						Show preview
					</Button>
				</div>
			) : (
				''
			)}
		</>
	);
};

export default Dropzone;
