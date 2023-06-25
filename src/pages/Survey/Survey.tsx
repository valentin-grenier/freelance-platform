import { useContext, useEffect, useState } from 'react';
import { Link, Params, useParams } from 'react-router-dom';
import { keyframes, styled } from 'styled-components';
import colors from '../../utils/style/colors';
import {
  SurveyProvider,
  SurveyContext,
} from '../../utils/context/SurveyProvider';

type SurveyParams = {
  questionNumber: string;
  questionNumberInt: any;
};

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
`;

const LinkNav = styled(Link)`
  transition: 400ms;

  ${(props) => props.$isHidden && `opacity: 0.25;`}
`;

const QuestionContainer = styled.h3`
  margin: 2em auto;
  max-width: 30em;
`;

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.secondary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
  margin: 2em auto;
`;

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1em;
  margin-bottom: 2em;
`;

const ReplyBox = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 2em;
  background-color: ${colors.backgroundDarkAlt};
  border-radius: 1em;
  cursor: pointer;
`;

const Survey = () => {
  const { questionNumber } = useParams();

  // Convert questionNumber into int
  const questionNumberInt = parseInt(questionNumber!);

  // Previous and next question
  const nextQuestionNumber = questionNumberInt + 1;
  const prevQuestionNumber =
    questionNumberInt === 1 ? 1 : questionNumberInt - 1;

  // State for the API data
  const [surveyData, setSurveyData] = useState({});

  // State for loader
  const [dataLoading, setDataLoading] = useState(false);

  // State for error
  const [error, setError] = useState(false);

  // State for answers
  const { answers, saveAnswers } = useContext(SurveyContext);

  const saveReply = (answer) => {
    saveAnswers({ [questionNumber]: answer });
  };

  // Get survey data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Display loader
        setDataLoading(true);

        // Fetch data
        const response = await fetch('http://localhost:8000/survey');
        const { surveyData } = await response.json();
        setSurveyData(surveyData);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        // Hide loader
        setDataLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <span>Oups, il y a eu un problème</span>;
  }

  return (
    <div>
      <h1>Questionnaire 📃</h1>
      <h2>Question n°{questionNumber}</h2>
      {dataLoading ? (
        <Loader />
      ) : (
        <QuestionContainer>{surveyData[questionNumber]}</QuestionContainer>
      )}

      <ReplyWrapper>
        <ReplyBox
          onClick={() => saveReply(true)}
          isSelected={answers[questionNumber] === true}
        >
          Oui
        </ReplyBox>
        <ReplyBox
          onClick={() => saveReply(false)}
          isSelected={answers[questionNumber] === false}
        >
          Non
        </ReplyBox>
      </ReplyWrapper>

      <LinksContainer>
        {questionNumberInt === 1 ? (
          <LinkNav $isHidden>Précédent</LinkNav>
        ) : (
          <LinkNav to={`/survey/${prevQuestionNumber}`}>Précédent</LinkNav>
        )}

        {surveyData[questionNumberInt + 1] ? (
          <LinkNav to={`/survey/${nextQuestionNumber}`}>Suivant</LinkNav>
        ) : (
          <LinkNav to={`/results`}>Résultats</LinkNav>
        )}
      </LinksContainer>
    </div>
  );
};

export default Survey;
