import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import homeIllustration from '../../assets/home-illustration.svg';

const HomeWrapper = styled.main`
  display: flex;
  align-items: center;
  gap: 4em;
  background: ${colors.backgroundLight};
  padding: 4em;
  text-align: left;
  border-radius: 2em;
  height: 50vh;
`;

const ButtonWrapper = styled.main``;

const HomeImage = styled.img`
  max-width: 20em;
  height: auto;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <div>
        <h1>
          Repérez vos besoins, on s'occupe du reste en vous fournissant les
          meilleurs talents.
        </h1>
        <ButtonWrapper>
          <Link to="/survey/1">
            <Button label="Faire le test" />
          </Link>
        </ButtonWrapper>
      </div>
      <div>
        <HomeImage src={homeIllustration} />
      </div>
    </HomeWrapper>
  );
};

export default Home;
