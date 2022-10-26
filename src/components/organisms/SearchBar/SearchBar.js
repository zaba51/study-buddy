import { Input } from 'components/atoms/Input/Input';
import React, { useState} from 'react';
import { SearchBarWrapper, SearchResults, SearchWrapper,  SearchResultsItem, StatusInfo } from 'components/organisms/SearchBar/SearchBar.styles';
import { useStudents } from 'hooks/useStudents';
import debounce from 'lodash.debounce';
import { useCombobox } from 'downshift';
import {useAuth } from 'hooks/useAuth';

const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();
  const { user } = useAuth();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    if (!inputValue) return;
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 400);

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

  // useEffect(() => {
  //   if (!searchPhrase) return;
  //   getMatchingStudents(searchPhrase);
  // }, [searchPhrase]); 
  // //}, [searchPhrase, getMatchingStudents]);

  console.log("SearchBar", user)
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>{ user?.name }</strong>
        </p>
      </StatusInfo>
      <SearchWrapper {...getComboboxProps()}>
        <Input {...getInputProps() } name="Search" id="Search" placeholder="Search" />
        <SearchResults isVisible={isOpen && matchingStudents.length > 0} {...getMenuProps()} aria-label="results">
          {isOpen &&
            matchingStudents.map((item, index) => (
              <SearchResultsItem isHighlighted={highlightedIndex === index} {...getItemProps({ item, index })} key={item.id}>
                {item.name}
              </SearchResultsItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;