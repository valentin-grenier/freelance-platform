import { styled } from 'styled-components';
import profileImage from '../../assets/profile.png';
import Card from '../../components/Card/Card';

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: profileImage,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: profileImage,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: profileImage,
  },
];

const CardsContainer = styled.div`
  display: grid;
  gap: 1.5em;
  grid-template-columns: repeat(3, 1fr);
`;

const Freelances = () => {
  return (
    <>
      <h1>Freelances</h1>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
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
