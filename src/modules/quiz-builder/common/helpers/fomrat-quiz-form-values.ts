import { IQuiz } from '../../context/models';
import { IFormQuestion, IFormValues } from '../../pages/quiz-create/commponents/new-quiz-form/models/new-quiz-hook';

export const formatQuizFormValues = (values: IFormValues, ids: string[]): IQuiz => {
  const formatedQuestions = values.questions.map((question: IFormQuestion, index: number) => {
    return {
      id: ids[index],
      question: question.question,
      answer: question.answer
    };
  });
  const formatedValues = {
    id: values.id,
    name: values.name,
    questions: formatedQuestions
  };

  return formatedValues;
};
