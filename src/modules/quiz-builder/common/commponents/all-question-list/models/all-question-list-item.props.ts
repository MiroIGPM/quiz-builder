export interface IAllQuestionListItem {
  item: {
    id: string;
    question: string;
    answer: string;
  };
  addExistingQuestion: (id: string, question: string, answer: string) => void;
}
