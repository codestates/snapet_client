export default function Validation(values) {
    let errors = {}

    if (!values.username.trim()) {
        errors.username = "Username required!"
    }

    // ! email
    if (!values.email) {
        errors.email = 'Email required!';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is not valid';
    }

    if (!values.password) {
        errors.password = 'Password required!';
    } else if (values.password.length < 5) {
        errors.password = 'Password needs to be 5 characters or more';
    }

    if (!values.password2) {
        errors.password2 = 'Password required!';
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match';
    }
    return errors;
}