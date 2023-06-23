import { styled } from 'styled-components';
import colors from '../../utils/style/colors';
import image404 from '../../assets/404.svg';

const ErrorContainer = styled.main``;

const ErrorTitle = styled.h1`
  & span {
    color: ${colors.secondary};
  }
`;

const ErrorImage = styled.img`
  width: 30em;
`;

const Error = () => {
  return (
    <>
      <ErrorImage src={image404} />
      <ErrorTitle>
        Erreur <span>404</span>
      </ErrorTitle>

      <p>Désolé, cette page n'existe pas !</p>
    </>
  );
};

export default Error;
