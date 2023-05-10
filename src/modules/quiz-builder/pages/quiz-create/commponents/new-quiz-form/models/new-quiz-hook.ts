export interface INewQuizHook {
  questionsIds: number[];
  updateQuestionIds: () => void;
}

export interface IFormValues {
  id: number;
  name: string;
  questions: IFormQuestion[];
}

export interface IFormQuestion {
  id?: number;
  question: string;
  answer: string;
}
