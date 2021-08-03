import { useState } from 'react'

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um e-mail válido',
  },
}

const useForm = (type) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const validate = (inputValue) => {
    if (type === false) return true
    if (inputValue.length === 0) {
      setError('Preencha o campo')
      return false
    }
    if (types[type] && !types[type].regex.test(inputValue)) {
      setError(types[type].message)
      return false
    }
    setError('')
    return true
  }

  const onChange = ({ target }) => {
    if (error) validate(value)
    setValue(target.value)
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  }
}

export default useForm
