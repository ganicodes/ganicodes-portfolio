import SkillRow from "./SkillRow";

const skills = [
  {
    category: "Programming Languages",
    list: ["JavaScript", "TypeScript", "C++", "Java"],
  },
  {
    category: "Frontend Technologies",
    list: [
      "HTML",
      "CSS",
      "ReactJS",
      "NextJS",
      "TailwindCSS",
      "Bootstrap",
      "MUI",
    ],
  },
  {
    category: "Backend Technologies",
    list: ["NodeJS", "ExpressJS"],
  },
  {
    category: "Databases",
    list: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools",
    list: ["JIRA", "Git", "Visual Studio"],
  },
  {
    category: "IDEs",
    list: ["VS Code", "Eclipse"],
  },
];

const AboutSkills = () => {
  return (
    <div className=" mt-4 rounded-[20px] bg-bgVariant px-10 py-6 md:mt-8 md:w-full">
      {skills.map((skill, index) => (
        <SkillRow key={index} category={skill.category} list={skill.list} />
      ))}
    </div>
  );
};
export default AboutSkills;
