import { useCallback } from 'react';
import axios from 'axios';

export const useStudents = () => {

  const getGroups = useCallback( async () => {
    try {
      const result = await axios.get('/groups');
      return result.data.groups;
    } catch (e) {
      console.log(e);
    }
  } ,[])

  const getStudentById = useCallback(async (studentId) => {
    try {
      const result = await axios.get(`/students/${studentId}`);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  },[]);

  const getStudentsByGroup = useCallback( async (groupId) => {
      try {
        const result = await axios.get(`/groups/${groupId}`);
        return result.data.students;
      } catch (e) {
        console.log(e);
      }
    }, []);

    
    const findStudents = async (searchPhrase) => {
    try {
      const { data } = await axios.post(`/students/search`, { searchPhrase } );
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  
  return {
    getGroups,
    getStudentById,
    getStudentsByGroup,
    findStudents,
  };
};

// useEffect(() => {
//   if (!groupId) return;
//   axios
//     .get(`/students/${groupId}`)
//     .then(({ data }) => setStudents(data.students))
//     .catch((err) => console.log(err));
// }, [groupId]);