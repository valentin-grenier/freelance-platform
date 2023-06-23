import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.backgroundLight};
  box-shadow: 0 0 24px #00000035;
  padding: 1em;
  border-radius: 1em;
  width: 25%;
  transition: 300ms;

  &:hover {
    cursor: pointer;
    transform: scale(95%);
    box-shadow: 0 0 12px #00000035;
  }
`;

const CardImage = styled.img`
  margin-bottom: 0.5em;
`;

const CardJobTitle = styled.span``;

const CardName = styled.h3`
  margin: 0 auto 0.5em auto;
`;

interface TCard {
  picture: string;
  jobTitle: string;
  name: string;
}

const Card = ({ jobTitle, name, picture }: TCard) => {
  return (
    <CardContent>
      <CardImage src={picture} alt="freelance" height={80} width={80} />
      <CardName>{name}</CardName>
      <CardJobTitle>{jobTitle}</CardJobTitle>
    </CardContent>
  );
};

export default Card;
