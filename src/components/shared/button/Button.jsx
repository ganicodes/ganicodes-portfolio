import PropTypes from "prop-types";
import "./button.css";
const Button = ({ title, link, isPrimary = false }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={` transition-all duration-300 ease-linear mr-8 cta ${
        isPrimary ? "cta-primary" : ""
      }`}
    >
      {title}
    </a>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
};

export default Button;
