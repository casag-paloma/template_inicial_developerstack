import { question } from "@prisma/client";

export type TypeQuestionData = Omit<question, 'id'>