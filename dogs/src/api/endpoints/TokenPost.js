import React, { useState } from 'react'

const TokenPost = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch(
      'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    )
    const json = await response.json()
    setToken(json.token)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type='text'
        placeholder='Password'
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button type='button'>Enviar</button>
      <p style={{ wordBreak: 'break-all' }}>{token}</p>
    </form>
  )
}

export default TokenPost
