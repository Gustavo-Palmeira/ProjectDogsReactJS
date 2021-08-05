import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://dogsapi.origamid.dev/json',
})

// export const TOKEN_POST = (body) => {
//   return {
//     url: `${API_URL}/jwt-auth/v1/token`,
//     options: {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     },
//   }
// }
