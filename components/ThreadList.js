// components/ThreadList.js
import React from 'react';
import styled from 'styled-components';

const ThreadList = ({ threads }) => {
  return (
      <List>
          {threads.map(thread => (
              <ListItem key={thread.id}>{thread.title}</ListItem>
          ))}
      </List>
  );
};

// Styled-components for styling
const List = styled.ul`
    list-style: none;
    padding: 0;
`;

const ListItem = styled.li`
    padding: 10px;
    margin-bottom: 10px;
    background-color: #f5f5f5;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e0e0e0;
    }
`;

export default ThreadList;
