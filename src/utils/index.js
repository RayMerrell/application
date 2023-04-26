import { writeCookie } from "../common";

export const loginUser = async (userName, email, password, newUser) => {
  try {
    const response = await fetch("http://localhost:5000/users/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    newUser(data.user.userName);
    writeCookie("JWT_Token", data.user.token, 7);
  } catch (error) {
    console.error(error);
  }
};
export const registerUser = async (userName, email, password, newUser) => {
  try {
    console.log("Gonna fetch");
    const response = await fetch("http://localhost:5000/users/adduser", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        email: email,
        password: password,
      }),
    });
    console.log("Did fetch");
    const data = await response.json();
    if (data.user.userName) {
      newUser(data.user.userName);
    }else{
      throw new Error ("User error");
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (userName) => {
  try {
    console.log("Gonna fetch");
    const response = await fetch("http://localhost:5000/users/deleteuser", {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName
      }),
    });
    console.log("Did fetch");
    const data = await response.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const verifyUser = async (jwtToken) =>{

  try {
    const response = await fetch("http://localhost:5000/users/verifyUser", {
    method:"GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization":`Bearer ${jwtToken}`
    },
    });
    const data = await response.json();
    console.log("User data", data);
    return data.user.userName;
  } catch (error) {
    console.log(error);
  }
}