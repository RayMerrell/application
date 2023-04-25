import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <Login newUser={setUser}/>
      {
        user?
        <h2>Hello welcome {user} yuou have logged in</h2>
        :
        <h2>Please log in</h2>
      }
    </div>
  );
}

export default App;
