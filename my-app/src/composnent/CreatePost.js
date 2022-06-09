import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CreatePost = () => {
  return (
    <Box sx={{
      marginTop: '50px',
      marginBottom: '20px'
    }}>
      <h3>create post</h3>
      <form style={{display: 'flex', flexDirection: 'column'}}>
      <TextField sx={{
          marginBottom: '5px'
        }} label="name" variant="outlined" />
        <TextField sx={{
          marginBottom: '5px'
        }} label="name" variant="outlined" />
        <TextField sx={{
          marginBottom: '5px'
        }} label="name" variant="outlined" />
        <TextField sx={{
          marginBottom: '5px'
        }} label="name" variant="outlined" />
        </form>
        </Box>
  )

}

export default CreatePost;