export const Validate = (values) => {
  let errors = {};
  let patten = /\S+@\S+\.\S+/;

  if (!values.name) {
    errors.name = "Kindly Enter your FullName";
  } else if (values.name.length < 4) {
    errors.name = "FullName should be longer than 4 characters";
  }

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
