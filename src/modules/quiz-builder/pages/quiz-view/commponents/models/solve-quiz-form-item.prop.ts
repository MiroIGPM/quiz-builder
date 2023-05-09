import { IQuestion } from 'src/modules/quiz-builder/context/models';

export interface ISolveQuizFormItem {
    formItem: IQuestion;
    questionNumber: number;
}