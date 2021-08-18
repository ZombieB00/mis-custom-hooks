import { useState } from "react"

export const useForm = (initialState = {}) => {

    const [FormValues, setFormValues] = useState(initialState);

    const reset = () => {
        setFormValues(initialState);
    }

    const handleInputChange = ({target}) => {
        setFormValues({
            ...FormValues,
            [target.name]: target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(FormValues);
    }

    return [FormValues, handleInputChange, handleSubmit, reset];
 
}
