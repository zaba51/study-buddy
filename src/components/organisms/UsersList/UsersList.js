import React, {useState, useEffect} from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title';
import { useParams} from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';


const UsersList = ({handleOpenStudentDetails}) => {
  const [ students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudentsByGroup } = useStudents();
  
  useEffect(() => {
    (async () => {
      const students = await getStudentsByGroup(id);
      setStudents(students);
    })()
  }, [getStudentsByGroup, id])

  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => (
          <UsersListItem onClick={() => handleOpenStudentDetails(userData.id)} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;