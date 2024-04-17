import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const CreateThread = () => {
    return (
        <Layout>
            <Container>
                <h1>Create Thread Page</h1>
                {/* Add your create thread form component here */}
            </Container>
        </Layout>
    );
};

// Styled-components for styling
const Container = styled.div`
    padding: 20px;
`;

export default CreateThread;
