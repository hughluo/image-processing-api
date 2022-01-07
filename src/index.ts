import express, { Response } from 'express'
import apiRouter from './routers/api'

const app = express()
const port = 3000

app.get('/', (_, res: Response): void => {
  res.send('Hello world!')
})

app.use('/api', apiRouter)

app.listen(port, (): void => {
  console.log(`server started at http://localhost:${port}`)
})

export default app
