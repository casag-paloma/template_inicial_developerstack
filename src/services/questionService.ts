import { number } from "joi";
import * as questionRepo from "../repositories/questionRepository"
import { TypeQuestionData } from "../types/questionTypes";

export async function createQuestion(question:TypeQuestionData) {

    await questionRepo.createQuestion(question);

}

export async function getQuestion() {
    
    const response = await questionRepo.getQuestions();

    if(!response) throw {type: 'not_found'}

    const result = { 
        question : response
    }

    return result;

}


export async function getQuestionById(id:number) {
    
    const result = await questionRepo.getAnswerByQuestionId(id);

    if(!result) throw {type: 'not_found'}

    return result;

}



