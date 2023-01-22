import React, { useState } from 'react';
import type { CommentType } from '../entities/commentsList';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../../components/bootstrap/Dropdown';
import Button, { ButtonGroup } from '../../../../components/bootstrap/Button';
import styles from './CommentItem.module.scss';
import Icon from '../../../../components/icon/Icon';
import Textarea from '../../../../components/bootstrap/forms/Textarea';
import stripTags from '../helpers/stripTags';
import { useSelector } from 'react-redux';
type CommentItemType = {
	comment: CommentType;
	deleteComment: (id: number) => void;
	changeComment: (text: string, id: number) => void;
};
const CommentItem: React.FC<CommentItemType> = ({ comment, deleteComment, changeComment }) => {
	const [editingMode, setEditingMode] = useState(false);
	const [updatedComment, setUpdatedComment] = useState(stripTags(comment.text).result);
	const saveComment = () => {
		setEditingMode(false);
		changeComment(updatedComment, comment.id);
		comment.text = updatedComment;
	};
	const cancelEdition = () => {
		setEditingMode(false);
		setUpdatedComment(stripTags(comment.text).result);
	};

	const userId = useSelector((state: any) => state.user.userId);

	return (
		<div className={`row g-4 mb-4 ${styles.comment}`}>
			<div className='col-12 d-flex align-items-center'>
				{userId === comment.author.id && (
					<Dropdown className={styles.commentActions}>
						<DropdownToggle>
							<Button color='primary' isLight icon='CallToAction' />
						</DropdownToggle>
						<DropdownMenu isAlignmentEnd>
							<DropdownItem>
								<div onClick={() => deleteComment(comment.id)}>
									<Icon icon='Delete' />
									Delete comment
								</div>
							</DropdownItem>
							<DropdownItem>
								<div onClick={() => setEditingMode(true)}>
									<Icon icon='Edit' />
									Edit comment
								</div>
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				)}
				{!editingMode && (
					<>
						<div className='flex-shrink-0'>
							<img
								className='avatar rounded-circle bg-l25-warning'
								src={
									comment.author && comment.author.image
										? comment.author.image
										: 'https://facit-modern.omtanke.studio/static/media/wanna2.35c7aa82595ff8db5ef4.png'
								}
								alt='Avatar'
								width='64'
								height='64'
							/>
						</div>
						<div className='flex-grow-1 ms-3 d-flex justify-content-between align-items-center'>
							<figure className='mb-0'>
								<blockquote
									className='blockquote'
									dangerouslySetInnerHTML={{ __html: comment.text }}
								/>
								<figcaption className='blockquote-footer mb-0'>
									{comment.author.name} {comment.author.second_name}
									{comment.author.city && (
										<>
											{' '}
											from <cite>{comment.author.city}</cite>
										</>
									)}
								</figcaption>
							</figure>
						</div>
					</>
				)}

				{editingMode && (
					<div className='col-12'>
						<Textarea
							placeholder='Write your text here'
							className='d-block'
							size='lg'
							rows={10}
							value={updatedComment}
							onInput={(ev: any) =>
								setUpdatedComment(
									ev.target && ev.target?.value ? ev.target?.value : '',
								)
							}
						/>
						<ButtonGroup className='mt-5'>
							<Button
								color='primary'
								icon='Message'
								size='lg'
								onClick={saveComment}
								isDisable={updatedComment.trim().length < 3}>
								Save comment
							</Button>
							<Button color='danger' icon='Cancel' size='lg' onClick={cancelEdition}>
								Cancel
							</Button>
						</ButtonGroup>
					</div>
				)}
			</div>
		</div>
	);
};

export default CommentItem;
