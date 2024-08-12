import db from "../config/dbConnect.js";
import errorhandler from "../utils/errorhandler.js";

export async function getAllCards(req, res, next) {
    db.query('SELECT * FROM tuf.flashcards', (err, data) => {
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

export async function getCardByID(req, res, next) {
    const { id } = req.params;
    const q = 'SELECT * FROM flashcards WHERE id = (?)'
    const values = [id]
    db.query(q, values, (err, data) => {
        if (err || Object.keys(data).length == 0) {
            console.log(err)
            next(errorhandler(404, 'Card Not Found!'));
            return;
        }
        return res.status(200).json({
            success: true,
            message: "All Cards Fetched !",
            card: data
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

    db.query(q, values, (err, data) => {
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

    db.query(q, values, (err, data) => {
        console.log(data)
        if (err) {
            console.log(err)
            next(err)
            return;
        }
        return res.status(200).json({
            success: true,
            message: "Card Deleted !",
        })
    })
}

export async function addCard(req, res, next) {
    const { question, answer } = req.body;
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
        })
    })
}