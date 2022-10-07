import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const UsersContext = React.createContext({
    users: [],
    handleAddUser: () => {},
    deleteUser: () => {},
});

console.log("UsersProvider");

const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
      axios
        .get('/students')
        .then(({ data }) => setUsers(data.students))
        .catch((err) => console.log(err));
    }, []);

    const deleteUser = (name) => {
      const filteredUsers = users.filter((user) => user.name !== name);
      setUsers(filteredUsers);
    };
  
    const handleAddUser = (formValues) => {
      const newUser = {...formValues};
      setUsers([newUser, ...users]);
    };

    return (
        <UsersContext.Provider 
            value={{
              users,
              handleAddUser,
              deleteUser,
            }}
          >
            {children}
        </UsersContext.Provider>
    )
}

export default UsersProvider;