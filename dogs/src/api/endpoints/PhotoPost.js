import React, { useState } from "react"

const PhotoPost = () => {
  const [token, setToken] = useState('')
  const [nome, setNome] = useState('')
  const [peso, setPeso] = useState('')
  const [idade, setIdade] = useState('')
  const [img, setImg] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('nome', nome)
    formData.append('peso', peso)
    formData.append('idade', idade)
    formData.append('img', img)

    const response = await fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    })
    console.log(response)
    const json = await response.json()
    console.log(json)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Token"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <input
        type="text"
        placeholder="Peso"
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />
      <input
        type="text"
        placeholder="Idade"
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />
      <input
        type="file"

        onChange={({ target }) => setImg(target.files[0])}
      />
      <button>Enviar</button>
    </form>
  )
}

export default PhotoPost
