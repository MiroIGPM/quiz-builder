export interface IGetAllRequest {
  path: string;
}

export interface IGetSingleRequest extends IGetAllRequest {
  id: number;
}

export interface IGetQuestionsRequest {
  path: string;
}

export interface IPostRequest {
  path: string;
  data: quizData;
}

export interface IPutRequst {
  path: string;
  id: number;
  data: quizData;
}

export interface IDeleteRequest {
  path: string;
  id: number;
}

interface quizData {
  name: string;
  questions: {
    id: number;
    questions: string;
    answer: string;
  }[];
}
