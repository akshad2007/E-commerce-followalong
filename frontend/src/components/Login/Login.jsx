import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setEmail } from "../../store/userActions";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/v2/user/login", {
        email,
        password,
      });
      console.log(response.data);

      // Dispatch action to store email in Redux state
      dispatch(setEmail(email));

      navigate("/");
    } catch (error) {
      console.error("There was an error logging in!", error);
    }
  };

  // (Component return/render part would go here)
};

export default Login;
