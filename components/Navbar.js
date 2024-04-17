// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <Nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/categories">Categories</Link></li>
                <li><Link href="/profile">Profile</Link></li>
            </ul>
        </Nav>
    );
};

const Nav = styled.nav`
    ul {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: center;
    }

    li {
        margin: 0 10px;
    }

    a {
        text-decoration: none;
        color: #333;
        transition: color 0.3s ease;
        padding: 10px;
        border-radius: 5px;
        background-color: #f8f9fa;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    a:hover {
        color: #fff;
        background-color: #007bff;
    }
`;

export default Navbar;
