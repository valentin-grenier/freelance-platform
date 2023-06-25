import { useContext } from 'react';
import { SurveyContext } from '../../utils/context/SurveyProvider';

const Results = () => {
  const { answers } = useContext(SurveyContext);

  console.log(answers);

  return (
    <>
      <h1>Résultats du questionnaire</h1>
    </>
  );
};

export default Results;
