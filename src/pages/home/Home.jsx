import Button from "../../components/shared/button/Button";
import "./home.css";
import { calculateExperience } from "../../helper";
import profilePic from "../../assets/profile.png";

const LeftSection = () => {
  return (
    <div>
      {/* <h2 className=" pb-2 text-xl text-gray">Welcome, my name is</h2> */}
      <h1 className=" text-center text-6xl font-bold text-primary md:text-justify md:text-7xl">
        Gani Shaikh.
      </h1>
      <h2 className=" py-4 text-center text-2xl text-gray md:text-left">{`< Fullstack Developer />`}</h2>
      <p className=" mb-6 text-justify leading-relaxed text-gray md:max-w-[50%] md:leading-relaxed lg:max-w-[500px]">
        Experienced Fullstack Developer with{" "}
        <mark className=" text-bold bg-primaryVariant p-1">
          {calculateExperience()}
        </mark>{" "}
        of experience in front-end web development with knowledge of backend
        technologies such as Node.js, Express.js, and MongoDB. Strong
        understanding of JavaScript and its ecosystem. Proven ability to work
        collaboratively with cross-functional teams and deliver high-quality,
        scalable applications. Excellent communication and problem-solving
        skills. Always eager to learn and improve.
      </p>
      <div className=" flex justify-between md:justify-start">
        <div className="">
          <Button
            title="Say Hello!"
            link="https://api.whatsapp.com/send/?phone=919834588556&text&type=phone_number&app_absent=0"
            isPrimary
          />
        </div>
        <div className="">
          <Button
            title="Download Resume"
            link="https://docs.google.com/document/d/15YSXdjHr6SW9xwEhelK20O9QrUA1MVX86znSnt3VA1o/edit?usp=sharing"
          />
        </div>
      </div>
    </div>
  );
};

const RightSection = () => {
  return (
    <div className="heroright z-10">
      <img id="profilePic" src={profilePic} alt="Profile image" />
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-around">
        <LeftSection />
        <RightSection />
      </div>
      <hr className=" mt-8 h-1 w-[100vw] bg-bgVariant md:mt-12" />
      {/* <hr className=" mt-2 h-1 w-[100vw] bg-primaryVariant md:mt-2" /> */}
    </>
  );
};

export default Home;
