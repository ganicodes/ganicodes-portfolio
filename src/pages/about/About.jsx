import AboutSummary from "../../components/cards/AboutSummary";
import SectionHeading from "../../components/shared/section-utils/SectionHeading";
import SectionSeparator from "../../components/shared/section-utils/SectionSeparator";
import AboutSkills from "../../components/skills/AboutSkills";

const About = () => {
  return (
    <>
      <section className=" mx-auto  my-4 md:my-8 md:w-4/5">
        <SectionHeading heading="About Me" subheading="Get to know" />
        <div className="flex flex-col items-center justify-around">
          <AboutSummary />
          <AboutSkills />
        </div>
      </section>
      <SectionSeparator />
    </>
  );
};

export default About;
