import express from "express"
const router = express.Router();
import { getAllCards, EditCard, DeleteCard, addCard, getCardByID } from "../controller/FlashCardController.js";

router.get('/allCards', getAllCards);
router.get('/getCard/:id', getCardByID);
router.post('/addCard', addCard);
router.patch('/editCard/:id', EditCard);
router.delete('/deleteCard/:id', DeleteCard);




export default router;