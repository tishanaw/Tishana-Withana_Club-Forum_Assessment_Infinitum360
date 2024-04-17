// pages/about.js

import Layout from '../components/Layout';
import styled from 'styled-components';

const About = () => {
    return (
        <Layout>
            <Container>
                <h1>About Us</h1>
                <p>Welcome to our website! We are dedicated to providing quality content and fostering a vibrant community.</p>
                <p>Feel free to explore our site and engage with other members in discussions and sharing valuable insights.</p>
            </Container>
        </Layout>
    );
};

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

export default About;
