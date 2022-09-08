import { prisma } from "../config/database"
import {TypeQuestionData} from "../types/questionTypes"

export async function createQuestion(question: TypeQuestionData) {
    
    await prisma.question.create({data:question})
}

export async function getQuestions() {
    const questions = await prisma.question.findMany()
    return questions;
}


export async function getAnswerByQuestionId(id: number) {

    const getAnswers = await prisma.question.findUnique({
        where: {
          id,
        },
        select: {
            id: true,
	        askedBy:true,
	        question:true,
            answers: {
            select: {
                answeredBy: true,
                answer: true,
            },
          },
        },
      })

      return getAnswers;
}
