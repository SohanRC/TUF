import express from "express"
import { config } from "dotenv";
config();
import FlashCard from "./routes/FlashCard.js"
import Auth from "./routes/Auth.js"
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true,
}))

// Ruutes
app.use('/api/flashcard', FlashCard);
app.use('/api/auth', Auth);

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log(`Server running at PORT : ${PORT}`);
})

// Custom Error
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";

    return res.status(status).json({
        success: false,
        message
    })
}) 