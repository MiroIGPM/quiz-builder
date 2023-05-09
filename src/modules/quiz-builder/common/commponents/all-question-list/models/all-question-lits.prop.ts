import { IQuestion } from 'src/modules/quiz-builder/context/models';

export interface IAllQuestionList {
  questions: IQuestion[];
  addExistingQuestion: (id: string, question: string, answer: string) => void;
}
