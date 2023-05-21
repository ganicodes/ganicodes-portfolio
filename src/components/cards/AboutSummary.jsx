import { calculateExperience } from "../../helper";
import Card from "./Card";

const aboutSummary = [
  {
    title: "Education",
    desc: "B.Sc (CS) 9.04",
    logo: "school-sharp",
  },
  {
    title: "Experience",
    desc: calculateExperience(),
    logo: "briefcase-sharp",
  },
  {
    title: "Projects",
    desc: "10+",
    logo: "logo-nodejs",
  },
];
const AboutSummary = () => {
  return (
    <div className=" mt-8 flex flex-col items-center justify-between gap-8 md:w-full md:flex-row md:gap-16">
      {aboutSummary.map((as, index) => (
        <Card key={index} title={as.title} logo={as.logo} desc={as.desc} />
      ))}
    </div>
  );
};

export default AboutSummary;
