import React, { useState } from 'react'

const PhotoGet = () => {
  const [id, setId] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch(
      `https://dogsapi.origamid.dev/json/api/photo/${id}`
    )
    await response.json()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={id}
        onChange={({ target }) => setId(target.value)}
      />
      <button type='button'>Enviar</button>
    </form>
  )
}

export default PhotoGet
