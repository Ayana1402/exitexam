import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';

const Viewall = () => {
  const card = [
    {
      id:1,
      title:"image1",
      post:"Nature's post",
      imageURL:"https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:2,
      title:"image2",
      post:"Nature's post",
      imageURL:"https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:3,
      title:"image3",
      post:"Nature's post",
      imageURL:"https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]
  return (
    <div className='EmpForm'>
    <Box
    component="form"
    sx={{
        '& .MuiTextField-root': { m: 2, width: '50ch' },padding:'3%'
    }}
    noValidate
    autoComplete="off"
    >
      <Grid container spacing={2} xs={12}>
        {card.map((val,i)=>(
      <Grid item  key={i} xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.imageURL}
        title={val.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {val.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {val.post}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Update</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
    </Grid>
    ))}
    </Grid>
    </Box>
    </div>
  )
}

export default Viewall