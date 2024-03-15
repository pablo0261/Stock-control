import { useState } from "react";

interface User {
  uuid: string;
  name: string;
}


const userExample : User = {
    uuid: '1',
    name: 'John Doe'
};

export const Usuario = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uuid: "asda123",
      name: "Pablo",
    });
  };

  return (
    <div>
      <h3> usuario: useState</h3>
      <button onClick={login}>Login</button>
      {!user ? (
        <pre> No hay usuario </pre>
      ) : (
        <pre> {JSON.stringify(user)} </pre>
      )}
    </div>
  );
};

export default Usuario;
