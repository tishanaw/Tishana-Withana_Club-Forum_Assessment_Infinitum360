// components/ThreadComments.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ThreadComments = ({ comments, onSubmit }) => {
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(newComment);
        setNewComment('');
    };

    return (
        <Container>
            <CommentList>
                {comments.map(comment => (
                    <CommentItem key={comment.id}>{comment.text}</CommentItem>
                ))}
            </CommentList>
            <CommentForm onSubmit={handleSubmit}>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                />
                <SubmitButton type="submit">Add Comment</SubmitButton>
            </CommentForm>
        </Container>
    );
};

const Container = styled.div`
    margin-top: 20px;
`;

const CommentList = styled.ul`
    list-style: none;
    padding: 0;
`;

const CommentItem = styled.li`
    margin-bottom: 10px;
`;

const CommentForm = styled.form`
    margin-top: 20px;
`;

const SubmitButton = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
`;

export default ThreadComments;
