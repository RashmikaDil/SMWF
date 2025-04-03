const express = require('express');
const cors = require('cors');
const PORT = 3001;

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req,res)  =>
    res.send('Welcome to the server!')
)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})