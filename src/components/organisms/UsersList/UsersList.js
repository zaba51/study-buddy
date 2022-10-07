import React, {useState, useEffect} from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title';
import { useParams} from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';


const UsersList = () => {
  const [ students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudents } = useStudents();
  
  useEffect(() => {
    (async () => {
      const students = await getStudents(id);
      setStudents(students);
    })()
  }, [getStudents, id])

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