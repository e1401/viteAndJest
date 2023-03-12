import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import About from '../../About';

describe('About component', () => {
    test('renders "About" text', () => {
        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );
        const aboutText = screen.getByText(/About/i);
        expect(aboutText).toBeInTheDocument();
    });

    test('renders a "Go home" link that navigates to /', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<div>Home page</div>} />
                </Routes>
                <About />
            </MemoryRouter>
        );
        const goHomeLink = screen.getByRole('link', { name: /Go home/i });
        expect(goHomeLink).toBeInTheDocument();
        fireEvent.click(goHomeLink);
        const homePageText = screen.getByText(/Home page/i);
        expect(homePageText).toBeInTheDocument();
    });
});
