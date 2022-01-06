import express from 'express'
import apiRouter from './routers/api'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.use('/api', apiRouter)

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})

export default app
