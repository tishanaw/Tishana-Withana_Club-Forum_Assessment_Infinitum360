// components/CategoryCard.js

import React from 'react';
import styled from 'styled-components';

const CategoryCard = ({ category, threads }) => {
  if (!category || !category.id) {
    return null;
  } 
  const categoryThreads = threads.filter(thread => thread.category === category.id);
  const handleCategoryClick = () => {
    // Handle category click event if needed
  };

  // Check if category is defined before accessing its properties
  if (!category) {
    return null; // Render nothing if category is undefined
  }

  return (
    <Card>
        <h2>{category.name}</h2>
        <p>{category.description}</p>
        <ThreadList>
            {categoryThreads.map(thread => (
                <ThreadItem key={thread.id}>
                    <h3>{thread.title}</h3>
                    <p>{thread.content}</p>
                </ThreadItem>
            ))}
        </ThreadList>
    </Card>
);
};


const Card = styled.div`
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
`;

const ThreadList = styled.ul`
    list-style: none;
    padding: 0;
`;

const ThreadItem = styled.li`
    margin-bottom: 10px;
`;

export default CategoryCard;
