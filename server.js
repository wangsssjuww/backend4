const express = require('express');
const app = express();
const port = 5000

const routerSwa = require('./routers/siswa')
const routerMP = require('./routers/matapelajaran')
const routerNilai = require('./routers/nilai')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routerSwa)
app.use(routerMP)
app.use(routerNilai)


app.listen(port,() => {
    console.log(`server berjalan pada port ${port}`);
})

