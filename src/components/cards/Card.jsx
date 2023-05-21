// reusable card component to be used in about section
import { PropTypes } from "prop-types";

const Card = ({ logo, title, desc }) => {
  return (
    <article
      title={title}
      className=" w-[200px] cursor-default rounded-lg border-2 border-solid border-transparent bg-bgVariant p-4 text-center text-primary transition-all duration-300 ease-linear  hover:border-primary hover:bg-bg"
    >
      <ion-icon style={{ fontSize: "40px" }} name={logo}></ion-icon>
      <h2 className=" text-xl font-medium text-white">{title}</h2>
      <small className=" text-gray">{desc}</small>
    </article>
  );
};

Card.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Card;
