import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Validate } from "./Validate";

const Useform = (setShowModal) => {
  const navigate = useNavigate();
  const [values, setValue] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [correctData, setCorrectdata] = useState(false);

  const handleChange = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validate(values));
    const data = JSON.stringify(values);
    console.log(data);
    setCorrectdata(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && correctData) {
      setShowModal(true);
      navigate("/dashboard");
    }
  }, [errors]);

  return { handleChange, handleSubmit, errors, values };
};

export default Useform;