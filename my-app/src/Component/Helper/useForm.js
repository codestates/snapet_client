import React, {useState, useEffect} from 'react'
import Validation from './Validation'

const useForm = (Validation) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(Validation(values));
        setIsSubmitting(true);
    }

    return { handleChange, values, handleSubmit, errors };
}

export default useForm;
