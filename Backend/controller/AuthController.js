import db from "../config/dbConnect.js";
import errorhandler from "../utils/errorhandler.js";

export async function getAllCards(req, res, next) {
    db.query('SELECT * FROM flashcards', (err, data) => {
        if (err) {
            console.log(err)
            next(err)
            return;
        }
        return res.status(200).json({
            success: true,
            message: "All Cards Fetched !",
            cards: data
        })
    })
}
export async function EditCard(req, res, next) {
    const { id } = req.params;
    const { question, answer } = req.body;

    const q = `UPDATE flashcards 
    SET question = (?), answer = (?) 
    WHERE id = (?)`;
    const values = [question, answer, id];

    db.query(q, [values], (err, data) => {
        if (err) {
            console.log(err)
            next(err)
            return;
        }
        return res.status(200).json({
            success: true,
            message: "Card Edited !",
        })
    })
}
export async function DeleteCard(req, res, next) {
    const { id } = req.params;
    const q = `DELETE FROM flashcards WHERE id = (?)`
    const values = [id];

    db.query(q, [values], (err, data) => {
        if (err) {
            console.log(err)
            next(err)
            return;
        }
        return res.status(200).json({
            success: true,
            message: "Card Deleted !",
            data
        })
    })
}

export async function addCard(req, res, next) {
    const { question, answer } = req.body;
    console.log(question, answer);
    const q = "INSERT INTO flashcards (`question`,`answer`) VALUES (?)"
    const values = [question, answer];
    db.query(q, [values], (err, data) => {
        if (err) {
            console.log(err)
            next(err)
            return;
        }
        return res.status(200).json({
            success: true,
            message: "Card Added !",
            card: data,
        })
    })
}

export async function login(req, res, next) {
    const { email, password } = req.body;
    console.log(email, password)
    const q = "SELECT * FROM users WHERE email = (?) AND password = (?);";
    const values = [email, password];
    db.query(q, values, (err, data) => {
        if (err || Object.keys(data).length == 0) {
            return next(errorhandler(404, "Only Admin Is Allowed!"));
        }
        return res.status(200).json({
            success: true,
            message: "Admin Login !",
        })
    })
}