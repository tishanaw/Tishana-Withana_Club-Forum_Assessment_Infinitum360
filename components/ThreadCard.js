// components/ThreadCard.js
import React from 'react';
import ThreadComments from './ThreadComments';
import styled from 'styled-components';

const ThreadCard = ({ thread }) => {
  return (
    <ThreadDetailWrapper>
      <h2>{thread.title}</h2>
      <p>{thread.content}</p>
      <ThreadComments comments={thread.comments} />
    </ThreadDetailWrapper>
  );
};

const ThreadDetailWrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export default ThreadCard;
