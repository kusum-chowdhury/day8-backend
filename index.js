const express = require('express');
const getRoutes = require('./routes/getRoutes');
const app = express();

const PORT = 3001;

//middlewares
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));


app.listen(PORT, () => {
    console.log('server is running');
})

app.use('/api/v1', getRoutes);