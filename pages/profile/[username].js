import React from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';

const UserProfile = () => {
    return (
        <Layout>
            <Container>
                <h1>User Profile Page</h1>
                {/* Add your user profile component here */}
            </Container>
        </Layout>
    );
};

// Styled-components for styling
const Container = styled.div`
    padding: 20px;
`;

export default UserProfile;
