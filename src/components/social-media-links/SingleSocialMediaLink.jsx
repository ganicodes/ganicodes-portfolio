import { PropTypes } from "prop-types";
const SingleSocialMediaLink = ({ title, link, logo }) => {
  return (
    <div id={title}>
      <a
        className=" md:6xl text-4xl hover:text-primary"
        title={title}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <ion-icon name={logo}></ion-icon>
      </a>
    </div>
  );
};

SingleSocialMediaLink.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default SingleSocialMediaLink;
