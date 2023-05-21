// reusable component for skills row
import { PropTypes, string } from "prop-types";
const SkillRow = ({ category, list }) => {
  return (
    <article className="mb-4 flex flex-wrap items-center justify-start gap-3 md:justify-stretch">
      <h4 className="font-bold text-gray">{category && category}</h4>
      {list?.map((item, index) => (
        <span
          className=" rounded-4 cursor-default rounded-lg border border-solid border-primary px-2 py-1.5 transition-all duration-300 ease-linear hover:bg-primary"
          key={index}
        >
          {item}
        </span>
      ))}
    </article>
  );
};

SkillRow.propTypes = {
  category: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(string).isRequired,
};

export default SkillRow;
