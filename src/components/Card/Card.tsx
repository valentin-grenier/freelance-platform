import styled from 'styled-components';

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  box-shadow: 0 4px 24px #00000035;
  border-radius: 1em;
  width: 10em;
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
