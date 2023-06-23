import styled from 'styled-components';

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 24px #00000035;
  padding: 1em;
  border-radius: 1em;
  width: 10em;
  transition: 300ms;

  &:hover {
    cursor: pointer;
    transform: scale(95%);
    box-shadow: 0 0 12px #00000035;
  }
`;

const CardJobTitle = styled.span`
  min-height: 4em;
`;

const CardImage = styled.img`
  margin-bottom: 1em;
`;

interface TCard {
  jobTitle: string;
  name: string;
  picture: string;
}

const Card = ({ jobTitle, name, picture }: TCard) => {
  return (
    <CardContent>
      <CardJobTitle>{jobTitle}</CardJobTitle>
      <CardImage src={picture} alt="freelance" height={80} width={80} />
      <span>{name}</span>
    </CardContent>
  );
};

export default Card;
