import './Card.scss';
import PropTypes from 'prop-types';

const Card = ({ jobTitle, name, picture }) => {
  return (
    <div className="card">
      <span>{jobTitle}</span>
      <img src={picture} alt="freelance" height={80} width={80} />
      <span>{name}</span>
    </div>
  );
};

Card.propTypes = {
  jobTitle: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
};

export default Card;
