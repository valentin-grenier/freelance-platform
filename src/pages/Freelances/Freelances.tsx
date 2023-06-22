import profileImage from '../../assets/profile.png';
import Card from '../../components/Card/Card';
import './Freelances.scss';

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

const Freelances = () => {
  return (
    <>
      <h1>Freelances</h1>
      <div className="freelances">
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            jobTitle={profile.jobTitle}
            picture={profile.picture}
            name={profile.name}
          />
        ))}
      </div>
    </>
  );
};

export default Freelances;
