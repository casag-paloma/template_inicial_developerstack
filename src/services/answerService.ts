import * as answerRepo from "../repositories/answerRepository"
import { TypeAnswerData } from "../types/answerTypes";

// TODO
export async function createAnswer(answer: TypeAnswerData) {
    console.log(answer)
    
    await answerRepo.createAnswer(answer)

};
