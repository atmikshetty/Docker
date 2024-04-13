const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000

app.get('/', (req,res) => {
    return res.json({message: "Hey I am Atmik Shetty in a Container, I mean Node js in a Container avaialble on Docker..."});
})

app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`);
})