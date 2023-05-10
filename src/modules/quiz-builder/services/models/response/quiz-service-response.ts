export interface IGetAllResponse {
  response: IGetResponseData[];
}

export interface IGetSingleResponse {
  response: IGetResponseData;
}

export interface IGetQuestionsResponse {
  response: IGetQuestionsResponseData[];
}

interface IGetResponseData {
  id: number;
  name: string;
  questions: {
    id: number;
    question: string;
    answer: string;
  }[];
}

interface IGetQuestionsResponseData {
  id: number;
  question: string;
  answer: string;
}
