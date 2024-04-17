import React from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';

const ThreadDetails = () => {
  return (
      <Layout>
          <Container>
              <h1>Thread Details Page</h1>
              {/* Add your thread details component here */}
          </Container>
      </Layout>
  );
};

// Styled-components for styling
const Container = styled.div`
    padding: 20px;
`;

export default ThreadDetails;
