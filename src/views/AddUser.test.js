import React from 'react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { screen, fireEvent } from '@testing-library/react';
import { render } from 'test-utils';
import { renderMatches } from 'react-router-dom';

//TOTO handle lack of AddUser view 
xdescribe('Form Field', () => {
  it('Adds new user to the list', () => {
    render(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grażyna' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByTestId('Consent'));
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Grażyna');
  });

  it('Prevents adding new user if the consent is not checked', () => {
    render(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grażyna' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.queryByText('Grażyna'); //Can't use getByText for unrendered objects (err)
    expect(newUser).not.toBeInTheDocument();
  });
});