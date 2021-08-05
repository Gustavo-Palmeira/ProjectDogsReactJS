import React, { useState } from 'react'

const UserPost = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    })
    await response.json()
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
      <input
        type='text'
        placeholder='Email'
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <button type='button'>Enviar</button>
    </form>
  )
}

export default UserPost
