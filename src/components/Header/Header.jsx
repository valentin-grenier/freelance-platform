import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/survey">Questionnaire</Link>
        <Link to="/freelances">Freelances</Link>
      </nav>
    </header>
  );
};

export default Header;
