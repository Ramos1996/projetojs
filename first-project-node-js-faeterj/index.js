const express = require('express');

const server = express(); // A variável server recebe express(),
                          // os parenteses indicam que o express exporta uma função,
                          // Ou seja, estamos chamando a função do express. 

// Consultar - Listar todos os usuario
server.get('/teste', (req, res) => {
  //return res.send('Hello World'); // Lista todos os usuários 
  return res.json({ message: 'Hello World' }); // Lista todos os usuários 
})

/*
server.get('/teste2', (req, res) => {
  //return res.send('Hello World'); // Lista todos os usuários 
  return res.json({ message: 'Hello FAETERJ' }); // Lista todos os usuários 
})
*/

// Porta utilizada pelo servidor
server.listen(3000)