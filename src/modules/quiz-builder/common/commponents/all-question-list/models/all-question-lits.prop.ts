import { IQuestion } from 'src/modules/quiz-builder/context/models';

export interface IAllQuestionList {
  questions: IQuestion[];
  addExistingQuestion: (id: number, question: string, answer: string) => void;
}
