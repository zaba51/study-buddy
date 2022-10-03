import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle.js';
import { theme } from 'assets/styles/theme'
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes as Switch, Route, Navigate} from 'react-router-dom'
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from 'views/AddUser';
import Dashboard from 'views/Dashboard';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
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
      </ThemeProvider>
    </Router>
  );
};

export default Root;