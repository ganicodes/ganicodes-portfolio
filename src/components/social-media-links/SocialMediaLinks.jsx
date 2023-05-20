import SingleSocialMediaLink from "./SingleSocialMediaLink";

const SocialMediaLinks = () => {
  const socialMediaLinks = [
    {
      link: "https://www.linkedin.com/in/ganicodes/",
      title: "linkedin",
      logo: "logo-linkedin",
    },
    {
      link: "https://github.com/ganicodes",
      title: "github",
      logo: "logo-github",
    },
    {
      link: "mailto:abdulgani.work@gmail.com",
      title: "email",
      logo: "mail",
    },
    {
      link: "http://instagram.com/gani9_",
      title: "instagram",
      logo: "logo-instagram",
    },
  ];
  return (
    <div className="max-w-100 mt-8 flex justify-between gap-8">
      {socialMediaLinks.map((sml, index) => (
        <SingleSocialMediaLink
          key={index}
          title={sml.title}
          link={sml.link}
          logo={sml.logo}
        />
      ))}
    </div>
  );
};

export default SocialMediaLinks;
