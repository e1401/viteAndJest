import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import App from './App';
import Button from './Button';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/about' element={<About />} />
                <Route
                    path='/button'
                    element={
                        <Button
                            text='Jest me'
                            onClick={() => {
                                console.log('Jested!');
                            }}
                        />
                    }
                />
            </Routes>
        </Router>
    </React.StrictMode>
);
