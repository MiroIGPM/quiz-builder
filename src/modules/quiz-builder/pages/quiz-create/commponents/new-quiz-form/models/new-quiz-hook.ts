export interface INewQuizHook {
  questionsIds: string[];
  updateQuestionIds: () => void;
}

export interface IFormValues {
  id: string;
  name: string;
  questions: IFormQuestion[];
}

export interface IFormQuestion {
  id?: string;
  question: string;
  answer: string;
}
