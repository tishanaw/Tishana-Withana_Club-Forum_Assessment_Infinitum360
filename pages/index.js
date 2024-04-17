// pages/index.js

import Layout from '../components/Layout';
import CategoryCard from '../components/CategoryCard';
import { categories, threads } from '../utils/data' // Assuming you have data for categories and threads
import styled from 'styled-components';

const HomePage = () => {
    return (
        <Layout>
            <Container>
                <h1>Welcome to Club Forum</h1>
                <p>This is the home page content.</p>
                <CategoryList>
                    {categories.map(category => (
                        <CategoryCard key={category.id} categoryId={category.id} categories={categories} threads={threads} />
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

export default HomePage;
