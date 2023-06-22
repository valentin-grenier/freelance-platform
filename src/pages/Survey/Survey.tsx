import { Link, Params, useParams } from 'react-router-dom';

type SurveyParams = {
  questionNumber: string;
};

const Survey = () => {
  const { questionNumber } = useParams<SurveyParams>();

  // Convert questionNumber into int
  const questionNumberInt = questionNumber ? parseInt(questionNumber) : 0;

  return (
    <div>
      <h1>Questionnaire 📃</h1>
      <h2>Question {questionNumber}</h2>
      <div>
        {questionNumberInt === 1 ? (
          <Link to={`/survey/1`}>Précédent</Link>
        ) : (
          <Link to={`/survey/${questionNumberInt - 1}`}>Précédent</Link>
        )}

        {questionNumberInt < 10 ? (
          <Link to={`/survey/${questionNumberInt + 1}`}>Suivant</Link>
        ) : (
          <Link to={`/results`}>Résultats</Link>
        )}
      </div>
    </div>
  );
};

export default Survey;
