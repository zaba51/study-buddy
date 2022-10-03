import React, {useContext} from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title';
import { useParams} from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';


const UsersList = () => {
  const { id } = useParams();
  const { students } = useStudents({ groupId: id });
  
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;