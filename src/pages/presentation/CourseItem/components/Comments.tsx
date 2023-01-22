import React, { useState } from 'react';
import Card, { CardHeader, CardBody, CardTitle } from '../../../../components/bootstrap/Card';
import CommentsIcon from './CommentsIcon';
import commentsList from '../entities/commentsList';
import type { CommentType } from '../entities/commentsList';
import Textarea from '../../../../components/bootstrap/forms/Textarea';
import Button from '../../../../components/bootstrap/Button';
import CommentItem from './CommentItem';
import { useSelector } from 'react-redux';
const Comments = () => {
	const [comments, setComments] = useState<CommentType[]>(commentsList);
	const [newComment, setNewComment] = useState('');
	const userData = useSelector((state: any) => state.user.userData);

	const sendComment = () => {
		const sendingComment = {
			id: Math.random() * 100 * Date.now(),
			text: newComment.replaceAll('\n', '<br/>'),
			created_at: new Date().toISOString(),
			author: userData,
		};
		setComments((prev) => [...prev, sendingComment]);
		setNewComment('');
	};

	const deleteComment = (id) => {
		setComments((prev) => prev.filter((comment) => comment.id !== id));
	};

	const changeComment = (text, id) => {
		setComments((prev) => {
			const index = prev.findIndex((el) => el.id === id);
			const current = prev.find((el) => el.id === id);
			prev.splice(index, 1, { ...current, text: text.replaceAll('\n', '<br/>') });
			return prev;
		});
		console.log(comments);
	};

	return (
		<Card stretch='full'>
			<CardHeader>
				<div className='d-flex align-items-center'>
					<CommentsIcon />
					<CardTitle>
						<div className='card-title'>Comments</div>
						<div className='card-subtitle'>Course Reviews</div>
					</CardTitle>
				</div>
			</CardHeader>
			<CardBody>
				{comments.map((comment) => (
					<CommentItem
						comment={comment}
						deleteComment={deleteComment}
						changeComment={changeComment}
						key={comment.id}
					/>
				))}
				<div className='card-title mt-8	mb-4'>Write new comment</div>

				<Textarea
					placeholder='Write your text here'
					value={newComment}
					rows={10}
					onInput={(ev: any) =>
						setNewComment(ev.target && ev.target?.value ? ev.target?.value : '')
					}
				/>
				<Button
					color='primary'
					className='mt-5'
					icon='Message'
					size='lg'
					onClick={sendComment}
					isDisable={newComment.trim().length < 3}>
					Send comment
				</Button>
			</CardBody>
		</Card>
	);
};

export default Comments;
