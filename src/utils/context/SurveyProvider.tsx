import { ReactNode, useState, createContext, SetStateAction } from 'react';

interface Props {
  children?: ReactNode;
}

type Answer = {
  [key: string]: boolean;
};

type SurveyContextType = {
  answers: Record<string, Answer>;
  saveAnswers: (newAnswers: Record<string, Answer>) => void;
};

export const SurveyContext = createContext<SurveyContextType | null>(null);

export const SurveyProvider = ({ children }: Props) => {
  const [answers, setAnswers] = useState({});
  const saveAnswers = (newAnswers: SetStateAction<{}>) => {
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
