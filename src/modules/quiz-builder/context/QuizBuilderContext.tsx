import {
  Context as ReactContext,
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

import { QuizService } from '../services/quiz-service';
import { IQuestion, IQuiz, IQuizBuilderContext, IQuizBuilderContextProps } from './models';

const Context = createContext<IQuizBuilderContext | null>(null);

const quizService = new QuizService('localhost:8000');

export const QuizBuilderContextProvider: FC<IQuizBuilderContextProps> = ({ children }) => {
  const [quizzes, setQuizzes] = useState<IQuiz[] | []>([]);
  const [activeQuiz, setActiveQuiz] = useState<IQuiz | undefined>(undefined);
  const [allQuestions, setAllQuestions] = useState<{ id: number; answer: string; question: string }[]>([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const { response } = await quizService.getAll({ path: 'quizzes' });
        setQuizzes(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuizzes();
  }, []);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { response } = await quizService.getQuestions({ path: 'questions' });
        setAllQuestions(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, []);

  const updateAllQuestions = useCallback(
    (questions: IQuestion[]) => {
      const newAllQuestions = [...allQuestions, ...questions];
      setAllQuestions(newAllQuestions);
    },
    [allQuestions]
  );

  const updateAllQuestionsOnEdit = useCallback(
    (questions: IQuestion[]) => {
      let newQuestions = [] as IQuestion[];
      questions.forEach((question) => {
        const questionDoseNotExist = allQuestions.some((el) => el.question !== question.question);
        const answerDoseNotExist = allQuestions.some((el) => el.answer !== question.answer);
        if (questionDoseNotExist || answerDoseNotExist) {
          newQuestions.push(question);
        }
      });

      const updatedQUestions = [...allQuestions, ...newQuestions];
      setAllQuestions(updatedQUestions);
      newQuestions = [];
    },
    [allQuestions, updateAllQuestions]
  );

  const updateQuizzes = useCallback(
    (quiz: IQuiz) => {
      const newQuizzesState = [...quizzes, quiz];
      setQuizzes(newQuizzesState);
      updateAllQuestions(quiz.questions);
    },
    [quizzes, setQuizzes, updateAllQuestions]
  );

  const deleteQuiz = useCallback(
    (id: number) => {
      setQuizzes(quizzes.filter((quiz) => quiz.id !== id));
    },
    [quizzes]
  );

  const getActiveQuiz = useCallback(
    (id: number): void => {
      const selectedQuiz = quizzes.find((quiz) => quiz.id === id);
      setActiveQuiz(selectedQuiz);
    },
    [quizzes]
  );

  const clearActiveQuiz = useCallback(() => {
    setActiveQuiz(undefined);
  }, []);

  const editQuiz = useCallback(
    (quiz: IQuiz) => {
      const allQuizzes = quizzes;
      const quizzIndex = allQuizzes.findIndex((quizId) => quizId.id === quiz.id);
      allQuizzes[quizzIndex].name = quiz.name;
      allQuizzes[quizzIndex].questions = quiz.questions;
      updateAllQuestionsOnEdit(quiz.questions);
      setQuizzes(allQuizzes);
    },
    [quizzes, updateAllQuestionsOnEdit]
  );

  const contextValue = useMemo(
    () => ({
      quizzes: quizzes,
      updateQuizzes: updateQuizzes,
      deleteQuiz: deleteQuiz,
      activeQuiz: activeQuiz,
      getActiveQuiz: getActiveQuiz,
      clearActiveQuiz: clearActiveQuiz,
      editQuiz: editQuiz,
      allQuestions: allQuestions
    }),
    [activeQuiz, deleteQuiz, getActiveQuiz, quizzes, updateQuizzes, clearActiveQuiz, editQuiz]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useQuizBuilderContext = () => {
  return useContext(Context as ReactContext<IQuizBuilderContext>);
};
