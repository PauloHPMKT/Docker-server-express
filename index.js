const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Subindo Servidor com docker')
})


app.listen(port, () => console.log(`server running at http://localhost:${port}`))

