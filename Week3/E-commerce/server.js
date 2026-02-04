import exp from 'express'
import { connect } from "mongoose"
import { userapp } from './Api/userapi.js'
import { productapp } from './Api/productapi.js'

const app = exp()

// middleware
app.use(exp.json())

// routes
app.use('/userapi', userapp)
app.use('/productapi', productapp)

// error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "error",
        reason: err.message
    })
})

// db connection + server start
async function db() {
    try {
        await connect('mongodb://localhost:27017/ecomdb')
        console.log("connected to database")

        app.listen(3000, () =>
            console.log("server is running at port number 3000")
        )
    } catch (err) {
        console.error("DB connection failed:", err.message)
    }
}

db()