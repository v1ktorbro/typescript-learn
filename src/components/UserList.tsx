import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { fetchUsers } from "../store/action-creater/user";

const UserList: React.FC = () => {
  const {users, loading, error} = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();
  
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