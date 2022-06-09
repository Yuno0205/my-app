import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';
import ListPost from './composnent/Post/ListPost';
// import ListProducts from './ListProduct';








function NewApp() {

  const [data, setData] = useState([])
  const [isFetchData, setIsFetchData] = useState(false)
  const [isCreate, setIsCreate] = useState(false)
  const [selectedPost, setSelectedPost] = useState(undefined)

  useEffect(() => {
    fetchAPI()
  }, [isFetchData])

  const fetchAPI = async () => {
    const response = await axios.get('https://61e5309b595afe00176e53ab.mockapi.io/api/products');
    // check dữ dữ liệu trước khi lấy
    if (response && response.status === 200) {
      console.log('Reload page')
      setData(response.data)
    }
  }

  const onEdit = async(post) => {
    console.log("my onEdit")
    setSelectedPost(post)
  }

  const onSubmitEdit = async (data) => {
    console.log(data)
    const response = await axios.put(`https://61e5309b595afe00176e53ab.mockapi.io/api/products/${data.id}`, data)
    if(response && response.status === 200) {
      alert('cập nhật thành công')
      setSelectedPost(undefined)
      fetchAPI()
    }
  }

  const onSubmit = async (data) => {
    // POST
    const response = await axios.post('https://61e5309b595afe00176e53ab.mockapi.io/api/products', data)
    if(response && response.status === 201) {
      alert('create thành công')
      fetchAPI()
    }
  }

  const onRemove = async (id) => {
    const response = await axios.delete(`https://61e5309b595afe00176e53ab.mockapi.io/api/products/${id}`)
    console.log("id" , id)
     if(response && response.status === 200) {
       alert('xoá thành công')
       // load lại list
       fetchAPI()
     }
   }

  return (
    <div>
   
      <ListPost onRemove={onRemove} onEdit={onEdit} posts={data} />
      {/* <ListProducts></ListProducts> */}
    </div>
  );
}

export default NewApp;
