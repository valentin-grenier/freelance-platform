import { styled } from 'styled-components';
import Card from '../../components/Card/Card';
import { useEffect, useState } from 'react';
import { Loader } from '../Survey/Survey';

export interface TData {
  name: string;
  job: string;
  picture: string;
  available: boolean;
  tjm: number;
}

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: center;
`;

const Freelances = () => {
  // State for API data
  const [freelancersList, setFreelancersList] = useState([]);

  // State for loader
  const [dataLoading, setDataLoading] = useState(false);

  // State for error
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Display loader
        setDataLoading(true);

        // Fetch data
        const response = await fetch('http://localhost:8000/freelances');
        const { freelancersList } = await response.json();

        setFreelancersList(freelancersList);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setDataLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <span>Oups, il y a eu un problème</span>;
  }

  // Debug
  //console.log(freelancersList);

  return (
    <>
      <p>
        Chez Shiny, nous trouvons les profils les plus adaptés à vos besoins
      </p>
      <h1>Trouvez votre freelance</h1>
      {dataLoading ? (
        <Loader />
      ) : (
        <CardsContainer>
          {freelancersList.map((profile: TData, index: number) => (
            <Card
              key={`${profile.name}-${index}`}
              job={profile.job}
              picture={profile.picture}
              name={profile.name}
              available={profile.available}
              tjm={profile.tjm}
            />
          ))}
        </CardsContainer>
      )}
    </>
  );
};

export default Freelances;
