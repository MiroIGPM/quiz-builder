export interface IQuizBuilderContext {
  quizzes: IQuiz[] | null;
  updateQuizzes: (quiz: IQuiz) => void;
  deleteQuiz: (id: string) => void;
  activeQuiz?: IQuiz;
  getActiveQuiz: (id: string) => void;
  clearActiveQuiz: () => void;
  editQuiz: (quiz: IQuiz) => void;
  allQuestions: IQuestion[];
}

export interface IQuiz {
  id: string;
  name: string;
  questions: IQuestion[];
}

export interface IQuestion {
  id: string;
  question: string;
  answer: string;
}
