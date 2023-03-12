import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            About
            <div>
                <Link to={'/'}>Go home</Link>
            </div>
        </div>
    );
}

export default About;
