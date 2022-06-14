import axios from "axios"

export const getAPI2 = async (url) => {
  const response = await axios.get(url).catch((err) => console.error(err))
  if (response && response.status === 200) {
    return response.data
  }
  return undefined
}

export const getAPI = async (url, payload = {}) => {
  /**
   * create query string
   */
  const qs = Object.keys(payload)
    .map((key) => `${key}=${payload[key]}`)
    .join("&")
   try {
    const response = await axios.get(`${url}?${qs}`)
    return response.data
   } catch (error) {
    console.log(error)
   }
  
  // if (response && response.status === 200) {
  //   console.log("Response.datta :", response.data)
  //   return response.data
  // }


  
}

export const deleteAPI = async (url ) => {
  const response = await axios.delete(url).catch((err) => console.error(err))
  return response
}

export const postAPI = async (url, payload ) => {
  const response = await axios.post(url, payload).catch((err) => console.error(err))
  return response
}

export const postAPIProduct = async (url, payload = {}) => {
  const response = await axios.post(url, payload).then((req , res) => res.status(200).json(payload)).catch((err) => console.error(err))
  return response
}

export const putAPI = async (url, payload) => {
  const response = await axios.put(url, payload).catch((err) => console.error(err))
  return response
}
