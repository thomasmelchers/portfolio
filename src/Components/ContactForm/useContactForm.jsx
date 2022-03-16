import React, {useState, useEffect} from 'react'
import emailjs from "@emailjs/browser";

const useContactForm = () => {

    const [isSended, setIsSended] = useState(false)
    const [values, setValues] = useState ({
        firstname: '',
        name: '',
        company: '',
        email:'',
        object: '',
        message: '',
    })

    const handleChange = e => {
        setValues({
            ...values,
            // targeting the value for each name field in every form inputs
            [e.target.name]: e.target.value
        })
    }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        /* form.current, */
        values,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setIsSended(true)
  };

  
    return {handleChange, values, sendEmail, isSended}
}

export default useContactForm