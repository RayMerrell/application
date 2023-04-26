import { useEffect, useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login.js";
import Register from "./components/Register";
import Delete from "./components/Delete";
import { getCookie } from "./common";
import { verifyUser } from "./utils";

function App() {
  const [user, setUser] = useState();

  useEffect(()=>{
    let jwt = getCookie("JWT_Token");
    console.log("jwt", jwt);
    if (jwt !== false){
      loginWithToken(jwt);
    }

  }, [])

  const loginWithToken = async (jwt) =>{
    const userName = await verifyUser(jwt)
    setUser(userName);
  }

  return (
    <div className="App">
      <Login newUser={setUser}/>
      {
        user?
        <h2>Hello welcome {user} you have logged in</h2>
        :
        <h2>Please log in</h2>
      }
      <br />
      <Register newUser={setUser} />
      <br />
      <Delete />
      <br />
    </div>
  );
}

export default App;
