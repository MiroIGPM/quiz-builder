import { Field, Form, Formik, FormikProps } from 'formik';
import { FC, useRef, useState } from 'react';
import { QBButton, QBInput } from 'src/modules/common/commponents';
import { QBModal } from 'src/modules/common/commponents/modal/QBModal';
import { getUniqueIdentifier } from 'src/modules/common/helpers/identifier-helper';
import { Locations, useNavigationHook } from 'src/modules/common/hooks';
import { AllQuestionList } from 'src/modules/quiz-builder/common/commponents/all-question-list/AllQuestionList';
import { IQuiz } from 'src/modules/quiz-builder/context/models';

import { formatQuizFormValues } from '../../../../common/helpers/fomrat-quiz-form-values';
import { useQuizBuilderContext } from '../../../../context';
import { useNewQuizFormHook } from './hooks/new-quiz-form-hook';
import { IFormValues } from './models/new-quiz-hook';

export const NewQuizForm: FC = () => {
  const { updateQuizzes, allQuestions } = useQuizBuilderContext();

  const { navigateTo } = useNavigationHook();

  const { questionsIds, updateQuestionIds } = useNewQuizFormHook();

  const [isModalOpened, setIsModalOpened] = useState(false);

  const form = useRef<FormikProps<IFormValues>>(null);

  const addExistingQuestion = (id: number, question: string, answer: string): void => {
    updateQuestionIds();
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
    const formatedQuiz = formatQuizFormValues(values, questionsIds);
    updateQuizzes(formatedQuiz as IQuiz);
    navigateTo(Locations.LIBRARY);
  };

  return (
    <div className="create-form">
      <div className="create-form-title">Create new quiz</div>

      <Formik
        initialValues={{
          id: getUniqueIdentifier(),
          name: '',
          questions: [{ question: '', answer: '' }]
        }}
        onSubmit={(values) => {
          submitQuizAndRedirectToLibrary(values);
        }}
        innerRef={form}
      >
        {(props) => (
          <Form>
            <div className="create-form-card">
              <div className="create-form-field">
                <div className="create-form-field-label">Quiz name: </div>
                <Field name="name" as={QBInput} className="create-form-field-input" required type="text" />
              </div>
            </div>
            {questionsIds.map((id, index) => {
              return (
                <>
                  <div className="create-form-card" key={id}>
                    <div className="create-form-card-title">{`Question ${index + 1}:`}</div>
                    <div className="create-form-field">
                      <div className="create-form-field-label">Question: </div>
                      <Field
                        name={`questions[${index}].question`}
                        as={QBInput}
                        className="create-form-field-input"
                        required
                        type="text"
                      />
                    </div>

                    <div className="create-form-field">
                      <div className="create-form-field-label">Answer: </div>
                      <Field
                        name={`questions[${index}].answer`}
                        as={QBInput}
                        className="create-form-field-input"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                </>
              );
            })}
            <div className="create-form-buttons">
              <QBButton onClick={openModal} type="default">
                Add existing question
              </QBButton>
              <QBButton onClick={updateQuestionIds} type="default">
                Add question
              </QBButton>
              <QBButton type="primary">
                <button className="create-form-buttons-submit" type="submit">
                  Submit
                </button>
              </QBButton>
            </div>
          </Form>
        )}
      </Formik>

      <QBModal isModalOpen={isModalOpened} title="moreQUestions" onCancel={closeModal} footer={null}>
        <AllQuestionList questions={allQuestions} addExistingQuestion={addExistingQuestion} />
      </QBModal>
    </div>
  );
};
