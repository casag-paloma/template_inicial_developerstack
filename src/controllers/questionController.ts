import { Request, Response } from 'express';
import * as questionService from "../services/questionService";
import * as answerService from "../services/answerService"

export async function createQuestion(req: Request, res: Response) {
  const data = req.body;

  await questionService.createQuestion(data);

  res.sendStatus(201);

}

export async function createAnswer(req: Request, res: Response) {
  const data = req.body;
  const {id} = req.params;

  const answer = {
    ...data,
    questionId: id
  }

  await answerService.createAnswer(answer);
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {

  const result = await questionService.getQuestion()
  res.status(200).send(result);
}

export async function getById(req: Request, res: Response) {
  const {id} = req.params;

  const result = questionService.getQuestionById(Number(id))

  res.status(200).send(result);
}
