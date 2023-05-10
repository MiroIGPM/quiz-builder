export interface IQuizBuilderContext {
  quizzes: IQuiz[] | null;
  updateQuizzes: (quiz: IQuiz) => void;
  deleteQuiz: (id: number) => void;
  activeQuiz?: IQuiz;
  getActiveQuiz: (id: number) => void;
  clearActiveQuiz: () => void;
  editQuiz: (quiz: IQuiz) => void;
  allQuestions: IQuestion[];
}

export interface IQuiz {
  id: number;
  name: string;
  questions: IQuestion[];
}

export interface IQuestion {
  id: number;
  question: string;
  answer: string;
}
