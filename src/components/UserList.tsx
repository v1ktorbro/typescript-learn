import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchUsers } from "../store/action-creater/users";

const UserList: React.FC = () => {
  const {users, loading, error} = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  
  React.useEffect(() => {
    dispatch(fetchUsers());
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