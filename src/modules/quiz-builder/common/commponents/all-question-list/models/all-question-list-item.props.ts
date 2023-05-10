export interface IAllQuestionListItem {
  item: {
    id: number;
    question: string;
    answer: string;
  };
  addExistingQuestion: (id: number, question: string, answer: string) => void;
}
