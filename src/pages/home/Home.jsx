import Button from "../../components/shared/button/Button";
function calculateExperience() {
  let years = 0;
  let months = 0;
  const startDate = new Date("2021-10-30");
  const currentDate = new Date();
  const diff = Math.floor(currentDate.getTime() - startDate.getTime());
  const day = 1000 * 60 * 60 * 24;
  let month = diff / day / 30;
  while (month > 12) {
    years++;
    month = month % 12;
    if (month < 12) {
      months = Math.floor(month);
    }
  }

  return years + " years and " + months + " months";
}
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

const Home = () => {
  return (
    <>
      <LeftSection />
    </>
  );
};

export default Home;
