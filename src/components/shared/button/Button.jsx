import PropTypes from "prop-types";
import "./button.css";
const Button = ({ title, link, isPrimary = false }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={` cta transition-all  duration-300 ease-linear md:mr-4 ${
        isPrimary ? "cta-primary" : ""
      }`}
    >
      {title}
      <ion-icon
        style={{ fontSize: "18px", padding: "6px", verticalAlign: "middle" }}
        name={`${
          title === "Say Hello!" ? "send-sharp" : "arrow-down-circle-sharp"
        }`}
      />
    </a>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
};

export default Button;
