

export default function Validation(values) {
    let errors = {}

    if (!values.firstname.trim()){
      errors.firstname = 'You forgot to write your firstname'
    }
    if (!values.name.trim()){
      errors.name = 'You forgot to write your name'
    }
    if (!values.company.trim()){
      errors.company = 'You forgot to write the name of the company'
    }
    if (!values.email.trim()){
      errors.email = 'You forgot to write your email'
    }
    if (!values.object.trim()){
      errors.object = 'What is the object of your request ?'
    }
    if (!values.message.trim()){
      errors.message = 'What is your message ? '
    }

    return errors
}