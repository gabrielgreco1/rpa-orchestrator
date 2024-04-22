import express from 'express'
import router from './routes.js'

const app = express()

app.use((req, res, next) => {
    next()
})


app.use('/automation/', router)

export default app
