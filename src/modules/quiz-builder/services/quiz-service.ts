import axios, { AxiosError, AxiosResponse } from 'axios';

import {
  IDeleteRequest,
  IGetAllRequest,
  IGetQuestionsRequest,
  IGetSingleRequest,
  IPostRequest,
  IPutRequst
} from './models/request/quiz-service-request';
import { IGetAllResponse, IGetQuestionsResponse, IGetSingleResponse } from './models/response/quiz-service-response';

export class QuizService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async getAll(request: IGetAllRequest): Promise<IGetAllResponse> {
    try {
      const response: AxiosResponse<IGetAllResponse> = await axios.get(`${this.baseUrl}/${request.path}`);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  public async getSingle(request: IGetSingleRequest): Promise<IGetSingleResponse> {
    try {
      const response: AxiosResponse<IGetSingleResponse> = await axios.get(
        `${this.baseUrl}/${request.path}/${request.id}`
      );
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  public async getQuestions(request: IGetQuestionsRequest): Promise<IGetQuestionsResponse> {
    try {
      const response: AxiosResponse<IGetQuestionsResponse> = await axios.get(`${this.baseUrl}/${request.path}`);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  public async post(request: IPostRequest): Promise<void> {
    try {
      await axios.post(`${this.baseUrl}/${request.path}`, request.data);
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  public async put(request: IPutRequst): Promise<void> {
    try {
      await axios.put(`${this.baseUrl}/${request.path}/${request.id}`, request.data);
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  public async delete(request: IDeleteRequest): Promise<void> {
    try {
      await axios.delete(`${this.baseUrl}/${request.id}`);
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  private handleError(error: AxiosError) {
    console.error('Request failed:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    }
  }
}
