// pages/profile.js

import Layout from '../components/Layout';
import styled from 'styled-components';
import { useState } from 'react';

const Profile = () => {
    const [profileData, setProfileData] = useState({
        username: '',
        email: '',
        bio: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to submit profile data to backend or handle as needed
        console.log('Submitted Profile Data:', profileData);
    };

    return (
        <Layout>
            <Container>
                <h1>Profile</h1>
                <ProfileForm onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={profileData.username}
                        onChange={handleChange}
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={profileData.email}
                        onChange={handleChange}
                    />
                    <Textarea
                        name="bio"
                        placeholder="Bio"
                        value={profileData.bio}
                        onChange={handleChange}
                    />
                    <SubmitButton type="submit">Save Profile</SubmitButton>
                </ProfileForm>
            </Container>
        </Layout>
    );
};

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

const ProfileForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Textarea = styled.textarea`
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const SubmitButton = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
`;

export default Profile;
