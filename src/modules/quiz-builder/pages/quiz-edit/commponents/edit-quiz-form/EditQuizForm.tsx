import { Field, Form, Formik, FormikProps } from 'formik';
import { FC, useRef, useState } from 'react';
import { QBButton, QBInput } from 'src/modules/common/commponents';
import { QBModal } from 'src/modules/common/commponents/modal/QBModal';
import { Locations, useNavigationHook } from 'src/modules/common/hooks';
import { AllQuestionList } from 'src/modules/quiz-builder/common/commponents/all-question-list/AllQuestionList';
import { formatQuizFormValues } from 'src/modules/quiz-builder/common/helpers/fomrat-quiz-form-values';
import { useQuizBuilderContext } from 'src/modules/quiz-builder/context';

import { IFormValues } from '../../../quiz-create/commponents/new-quiz-form/models/new-quiz-hook';
import { useEditQuizHook } from './hooks/edit-quiz-hook';
import { IEditQuizFormProps } from './models/edit-quiz-form.props';

export const EditQuizForm: FC<IEditQuizFormProps> = ({ quiz }) => {
  const { editQuiz, allQuestions } = useQuizBuilderContext();

  const { quizIds, updateQuizIds } = useEditQuizHook(quiz?.questions);
  const { navigateTo } = useNavigationHook();

  const [isModalOpened, setIsModalOpened] = useState(false);

  const form = useRef<FormikProps<IFormValues>>(null);

  const addExistingQuestion = (id: string, question: string, answer: string): void => {
    updateQuizIds();
    form.current?.values.questions.push({ question: question, answer: answer });
    closeModal();
  };

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const submitQuizAndRedirectToLibrary = (values: IFormValues) => {
    const formatedQuiz = formatQuizFormValues(values, quizIds);
    editQuiz(formatedQuiz);
    navigateTo(Locations.LIBRARY);
  };

  const addQuestion = (): void => {
    updateQuizIds();
  };

  return (
    <>
      {quiz ? (
        <div className="edit-form">
          <div className="edit-form-title">{`Edit quiz ${quiz?.name}`}</div>
          <Formik
            initialValues={quiz}
            onSubmit={(values) => {
              submitQuizAndRedirectToLibrary(values);
            }}
            innerRef={form}
          >
            <Form>
              <div className="edit-form-card">
                <div className="edit-form-field">
                  <div className="edit-form-field-label">Quiz name: </div>
                  <Field name="name" as={QBInput} className="edit-form-field-input" required />
                </div>
              </div>
              {quizIds?.map((quizId, index) => {
                return (
                  <>
                    <div className="edit-form-card" key={quizId}>
                      <div className="edit-form-card-title">{`Question ${index + 1}:`}</div>
                      <div className="edit-form-field">
                        <div className="edit-form-field-label">Question: </div>
                        <Field
                          name={`questions[${index}].question`}
                          as={QBInput}
                          className="edit-form-field-input"
                          required
                        />
                      </div>

                      <div className="edit-form-field">
                        <div className="edit-form-field-label">Answer: </div>
                        <Field
                          name={`questions[${index}].answer`}
                          as={QBInput}
                          className="edit-form-field-input"
                          required
                        />
                      </div>
                    </div>
                  </>
                );
              })}
              <div className="edit-form-buttons">
                <QBButton onClick={openModal} type="default">
                  Add existing question
                </QBButton>
                <QBButton onClick={addQuestion} type="default">
                  Add question
                </QBButton>
                <QBButton type="primary">
                  <button className="edit-form-buttons-submit" type="submit">
                    Submit
                  </button>
                </QBButton>
              </div>
            </Form>
          </Formik>
        </div>
      ) : (
        <div>No such quiz</div>
      )}

      <QBModal isModalOpen={isModalOpened} title="moreQUestions" onCancel={closeModal} footer={null}>
        <AllQuestionList questions={allQuestions} addExistingQuestion={addExistingQuestion} />
      </QBModal>
    </>
  );
};
