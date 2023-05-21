// reusable component for section heading and subheading
import PropTypes from "prop-types";
const SectionHeading = ({ subheading, heading }) => {
  return (
    <>
      <h5 className=" mt-4 text-center  text-gray md:mt-6 md:text-xl ">
        {subheading}
      </h5>
      <h1 className=" text-center text-2xl font-semibold text-primary md:text-4xl">
        {heading}
      </h1>
    </>
  );
};

SectionHeading.propTypes = {
  subheading: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export default SectionHeading;
