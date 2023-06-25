import { ReactNode, useState, createContext, SetStateAction } from 'react';

interface Props {
  children?: ReactNode;
}

type Answer = {
  [key: string]: boolean;
};

type SurveyContextType = {
  answers: Answer;
  saveAnswers: (newAnswers: Answer) => void;
};

export const SurveyContext = createContext<SurveyContextType | null>(null);

export const SurveyProvider = ({ children }: Props) => {
  const [answers, setAnswers] = useState<Answer>({});
  const saveAnswers = (newAnswers: Answer) => {
    setAnswers({ ...answers, ...newAnswers });
  };

  const contextValue: SurveyContextType = {
    answers,
    saveAnswers,
  };

  return (
    <SurveyContext.Provider value={contextValue}>
      {children}
    </SurveyContext.Provider>
  );
};
