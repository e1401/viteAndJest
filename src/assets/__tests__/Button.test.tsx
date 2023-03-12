import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../../Button';

describe('Button component', () => {
    test('calls onClick prop when button is clicked', () => {
        const onClickMock = jest.fn();
        const { getByText } = render(
            <Button text='Click me' onClick={onClickMock} />
        );
        const button = getByText('Click me');
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalled();
    });
});
