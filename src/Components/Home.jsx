import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import '../App.css';

const Home = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, description: 'Buy groceries', completed: false },
    { id: 2, description: 'Read a book', completed: true },
    { id: 3, description: 'Exercise', completed: false },
    { id: 4, description: 'Call Suma', completed: false },
    { id: 5, description: 'Order Cake', completed: true },
    { id: 6, description: 'Clean Office', completed: false },
    
  ]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async () => {
    try {
      await axios.post('/api/todos', { description: newTodo, completed: false });
      setNewTodo('');
      fetchTodos();
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const toggleTodo = async (id, completed) => {
    try {
      await axios.put(`/api/todos/${id}`, { completed: !completed });
      fetchTodos();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // Center vertically
        minHeight: '100vh',
        padding :'3%',
        // backgroundImage: 'url("https://as1.ftcdn.net/v2/jpg/02/95/16/34/1000_F_295163487_v4cd1FbRY2qhtBEV5dM5D0pcy0qrrupc.jpg")',
        // backgroundSize: 'cover',
      }}
      autoComplete="off"
      noValidate
    >
      <Grid container spacing={2} >
        {/* Left side: Todo List */}
        <Grid item xs={6} sx={{ padding: '100px' }}>
          <div>
            <h1>Todo List</h1>
            
              <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
              <button onClick={addTodo}  style={{ marginLeft: '10px' }}>Add</button>
            
            <ul style={{ fontSize: '1.2rem' }}>
              {todos.map((todo) => (
                <li key={todo._id} style={{ marginBottom: '30px' }}>
                  {todo.completed ? <del>{todo.description}</del> : todo.description}
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo._id, todo.completed)}  style={{ marginLeft: '10px' }}
                  />
                  <button onClick={() => deleteTodo(todo._id)}  style={{ marginLeft: '10px' }}>Delete</button>
                </li>
               
              ))}
            </ul>
          </div>
        </Grid>

        {/* Right side: Image */}
        <Grid item xs={6}>
          <div className="bg-img"></div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
