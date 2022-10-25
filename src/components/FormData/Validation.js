export const Validate = (values) => {
    let errors = {};
    let patten = /\S+@\S+\.\S+/;
  
    if (!values.email) {
      errors.email = "Email Field is Required";
    } else if (!patten.test(values.email)) {
      errors.email = "Invalid Email";
    }
    if (!values.password) {
      errors.password = "Password is Required";
    } else if (values.password.length < 5) {
      errors.password = "Password must be more than five characters.";
    }
  
    return errors;
  };
  
  export const SignUpValidate = (values) => {
    let errors = {};
    let patten = /\S+@\S+\.\S+/;
  
    if (!values.email) {
      errors.email = "Email Field is Required";
    } else if (!patten.test(values.email)) {
      errors.email = "Invalid Email";
    }
    if (!values.password) {
      errors.password = "Password is Required";
    } else if (values.password.length < 5) {
      errors.password = "Password must be more than five characters.";
    }
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Password does not match";
    }
    return errors;
  };  