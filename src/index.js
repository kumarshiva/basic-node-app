import express from 'express'
const app = express()
import router from './router.js'

const PORT = 8000

app.use("/",router)

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`)
})
