// components/CreateThreadForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const CreateThreadForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, content });
        setTitle('');
        setContent('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Thread Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
                placeholder="Thread Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <SubmitButton type="submit">Create Thread</SubmitButton>
        </Form>
    );
};

const Form = styled.form`
    margin-top: 20px;
`;

const Input = styled.input`
    width: 100%;
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Textarea = styled.textarea`
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const SubmitButton = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
`;

export default CreateThreadForm;
