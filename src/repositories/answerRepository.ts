import { prisma } from "../config/database"
import {TypeAnswerData} from "../types/answerTypes"

export async function createAnswer(answer: TypeAnswerData) {
    
    await prisma.answer.create({data:answer})
}

