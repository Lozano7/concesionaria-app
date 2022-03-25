const emailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

interface FormValuesValidate {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export default function validarForm(formValues: FormValuesValidate): {
  error: string | null;
} {
  const {
    name,
    email,
    password,
    confirmPassword: passwordConfirm,
  } = formValues;
  if (name) {
    if (!name || !email || !password || !passwordConfirm) {
      return {
        error: 'All fields are required',
      };
    }
    if (!emailRegex.test(email)) {
      return {
        error: 'Email or password not valid',
      };
    }
    if (password.length < 6) {
      return {
        error: 'Password have to be at least 6 character',
      };
    }
    if (!passwordRegex.test(password)) {
      return {
        error:
          'The password must have letters, numbers and special characters[!@#$%^&*]',
      };
    }
    if (password !== passwordConfirm) {
      return {
        error: 'Passwords do not match',
      };
    }
  } else {
    if (!email || !password) {
      return {
        error: 'All fields are required',
      };
    } else if (!emailRegex.test(email)) {
      return {
        error: 'Email or password not valid',
      };
    } else if (password.length < 6) {
      return {
        error: 'Password have to be at least 6 character',
      };
    }
  }
  return {
    error: null,
  };
}
