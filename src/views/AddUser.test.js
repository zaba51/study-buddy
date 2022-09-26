import React from 'react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe("Form Field", () => {
    it('Renders the component', () => {
        renderWithProviders(
            <>
                <AddUser />
                <Dashboard />
            </>
        );
        fireEvent.change(screen.getByTestId('Name'), {target: {value: 'Alojzy'} }); 
        fireEvent.change(screen.getByTestId('Attendance'), {target: {value: '15%'} }); 
        fireEvent.change(screen.getByTestId('Average'), {target: {value: '3.4'} });
        fireEvent.click(screen.getByText('Add'));
        screen.getByText('Alojzy'); 
    });
})