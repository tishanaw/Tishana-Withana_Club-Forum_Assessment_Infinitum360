// components/Comment.js
import React from 'react';
import styled from 'styled-components';

const CommentCard = ({ comment }) => {
  return (
    <Card>
      <Text>{comment.text}</Text>
      {/* Display comment author, timestamp, etc. */}
    </Card>
  );
};

const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: #333333;
`;

export default CommentCard;
