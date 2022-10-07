import { useEffect, useState, useCallback } from 'react';
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

  // useEffect(() => {
  //   axios
  //     .get('/groups')
  //     .then(({ data }) => setGroups(data.groups))
  //     .catch((err) => console.log(err));
  // }, []);

  const getStudents = useCallback( async (groupId) => {
      try {
        const result = await axios.get(`/students/${groupId}`);
        return result.data.students;
      } catch (e) {
        console.log(e);
      }
    }, []);

  // useEffect(() => {
  //   if (!groupId) return;
  //   axios
  //     .get(`/students/${groupId}`)
  //     .then(({ data }) => setStudents(data.students))
  //     .catch((err) => console.log(err));
  // }, [groupId]);
  
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
    getStudents,
    findStudents,
  };
};