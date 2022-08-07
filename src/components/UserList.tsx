import React from "react";
import { useAppSelector } from "../hooks/hooks";
import { userActions } from "../hooks/userActions";

const UserList: React.FC = () => {
  const {users, loading, error} = useAppSelector((state) => state.users);
  const {fetchUsers} = userActions();
  
  React.useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Идёт загрузка...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.map((user) => 
        <div key={user.id}>{user.name}</div>
      )}
    </div>
  );
};

export default UserList;