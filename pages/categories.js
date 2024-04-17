import React from 'react';
import Layout from '../components/Layout';
import CategoryCard from '../components/CategoryCard';
import { categories, threads } from '../utils/data'  // Assuming you have data for categories and threads
import styled from 'styled-components';

const CategoriesPage = () => {
    return (
        <Layout>
            <Container>
                <h1>Categories</h1>
                <CategoryList>
                    {categories.map(category => (
                        <CategoryCard key={category.id} category={category} threads={threads} />
                    ))}
                </CategoryList>
            </Container>
        </Layout>
    );
};

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

const CategoryList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
`;

export default CategoriesPage;
