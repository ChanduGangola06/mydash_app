export default function validateInfo(values) {
  let errors = {};

  // Email
  if (!values.email.trim()) {
    errors.email = "Email Required!";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid!";
  }

  //Password
  if (!values.password) {
    errors.password = "Password is required!";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more!";
  }

  //Confirm Password
  if (!values.password2) {
    errors.password2 = "Password is required!";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match!";
  }

  if (!values.name) {
    errors.name = "Full Name required!";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Enter Your Phone Number!";
  } else if (values.phoneNumber.length < 10) {
    errors.phoneNumber = "Phone Number is not valid!";
  }

  return errors;
}
