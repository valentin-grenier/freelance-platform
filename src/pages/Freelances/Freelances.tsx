import { styled } from 'styled-components';
import Card from '../../components/Card/Card';
import data from '../../data/data';

export interface TData {
  name: string;
  jobTitle: string;
  picture: string;
}

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: center;
`;

const Freelances = () => {
  return (
    <>
      <p>
        Chez Shiny, nous trouvons les profils les plus adaptés à vos besoins
      </p>
      <h1>Trouvez votre freelance</h1>
      <CardsContainer>
        {data.map((profile: TData, index: number) => (
          <Card
            key={`${profile.name}-${index}`}
            jobTitle={profile.jobTitle}
            picture={profile.picture}
            name={profile.name}
          />
        ))}
      </CardsContainer>
    </>
  );
};

export default Freelances;
