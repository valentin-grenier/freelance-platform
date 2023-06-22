import './Card.scss';

interface TCard {
  jobTitle: string;
  name: string;
  picture: string;
}

const Card = ({ jobTitle, name, picture }: TCard) => {
  return (
    <div className="card">
      <span>{jobTitle}</span>
      <img src={picture} alt="freelance" height={80} width={80} />
      <span>{name}</span>
    </div>
  );
};

export default Card;
