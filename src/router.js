import {Router} from 'express'
const router = Router();

router.get('/', (req, res) => {
    res.send("Hello")
})

router.get('/health', (req, res) => {
    res.send("Everything is good")
})

export default router
