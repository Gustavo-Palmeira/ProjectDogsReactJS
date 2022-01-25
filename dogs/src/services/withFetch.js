import { baseURL } from ".";

export const getPhotosFetch = async (page, total, user) => {
  const response = await fetch(`${baseURL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    {
      method: 'GET',
      cache: 'no-store',
    },
  )
  const json = await response.json();
  return { data: json }
}

export const getPhotoFetch = async (id) => {
  const response = await fetch(`${baseURL}/api/photo/${id}`,
    {
      method: 'GET',
      cache: 'no-store',
    },
  )
  const json = await response.json();
  return { data: json }
}
