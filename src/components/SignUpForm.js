import React,{useState} from "react";
import{ Link } from "react-router-dom";
import{ isValidUser } from "../Validators";
import{ SumNumbers } from "./SumNumbers";

const signUpForm = () => {
    const [state, setState] =useState({
        firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const[error, setError] = useState(" ");
  const passwordElement = useRef(null);

  let handleChange = (e) =>
  setState({...state,[e.target.name]: e.target.value});

return(
    <form>
        <input
        name={"firstName"}
        type={"text"}
        onChange={handleChange}
        value={state.firstName}
        placeholder={"First Name"}
      />
      <label>Last Name</label>
      <input
        name={"lastName"}
        type={"text"}
        onChange={handleChange}
        value={state.lastName}
        placeholder={"Last Name"}
      />
      <label>Email</label>
      <input
        name={"email"}
        type={"email"}
        onChange={handleChange}
        value={state.email}
        placeholder={"Email"}
      />
      <label>Password</label>
      <input
        name={"password"}
        type={"password"}
        onChange={handleChange}
        value={state.password}
        placeholder={"Password"}
        ref={passwordElement}
      />

    </form>
)
}

export default signUpForm;