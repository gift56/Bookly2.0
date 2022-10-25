import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { Validate } from "./Validation";

const Useform = () => {
  const { signUp } = UserAuth();
  const navigate = useNavigate();
  const [values, setValue] = useState({
    email: "",
    password: "",
    name: "",
    tel: "",
    confirmPass: "",
  });

  const [errors, setErrors] = useState({});

  const [correctData, setCorrectdata] = useState(false);

  const handleChange = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(Validate(values));
    const data = JSON.stringify(values);
    console.log(data);
    try {
      await signUp(values.email, values.password);
    } catch (error) {
      console.log(error);
    }
    setCorrectdata(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && correctData) {
      navigate("/dashboard");
    }
  }, [errors]);

  return { handleChange, handleSubmit, errors, values };
};

export default Useform;
