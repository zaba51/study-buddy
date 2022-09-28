import React from 'react';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';
import Navigation from 'components/organisms/Navigation/Navigation';
import NewsSection from 'components/templates/NewsSection/NewsSection';
import SearchBar from 'components/organisms/SearchBar/SearchBar';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTemplate;