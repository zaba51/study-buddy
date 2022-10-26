import React from 'react';
import { Wrapper } from './Root.styles';
import {Routes as Switch, Route, Navigate} from 'react-router-dom'
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from 'views/AddUser';
import Dashboard from 'views/Dashboard';

import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import { useError } from 'hooks/useError';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route path="/add-user" element = {<AddUser />} />
          <Route path="/group/" element={<Dashboard />}>
            <Route path=":id" element={<Dashboard />} />
          </Route>
          <Route path="/" element = {<Navigate replace to="/group" />} />
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

const UnauthenticatedApp = () => {
  const { signIn } = useAuth(); 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(signIn)}
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
    >
      <FormField label="login" name="login" id="login" {...register('login', { required: true })} />
      {errors.login && <span>Login is required</span>}
      <FormField label="password" name="password" id="password" type="password" {...register('password', { required: true })} />
      {errors.password && <span>Password is required</span>}
      <Button type="submit">Sign in</Button>
    </form>
  );
};


const Root = () => {
  const { user } = useAuth();
  const { error } = useError();

  console.log("Root render");

  return (
    <>
      {error ? <ErrorMessage message={error}/> : null}
      <Switch>
            <Route path="/login/*" element = {
              user ? <AuthenticatedApp /> : <UnauthenticatedApp />
            } />  
            <Route path="/*" element = {
              user ? <AuthenticatedApp /> : <Navigate replace to="/login" />
            } />
      </Switch>
    </>  
    //user ? <AuthenticatedApp /> : <UnauthenticatedApp />
  )
};

export default Root;