export interface IQuizLibraryItemProps {
  name: string;
  id: number;
  deleteQuiz: (id: number) => void;
  getActiveQuiz: (id: number) => void;
}
