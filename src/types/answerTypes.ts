import { answer } from "@prisma/client";

export type TypeAnswerData = Omit<answer, 'id'>  