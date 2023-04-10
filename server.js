require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const router = require('./src/routes/gameRoutes');

app.use(express.json());
app.use(express.static('./public'))

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
})