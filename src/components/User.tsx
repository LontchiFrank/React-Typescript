import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {};
  const handleLogout = () => {
    setUser({
      name: "Fodjo Frank ",
      email: "fodjof6@gmail.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      <div>User name is {user.name} </div>
      <div>User email is {user.email}</div>
    </div>
  );
};
