import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Markus Stuppnig",
    designation: "Project Manager & Backend Developer",
    image: "/images/team/markus.png",
    email: "mstuppnig@student.tgm.ac.at",
    weblink: "https://www.stuppnig.net",
    instagramLink: "https://instagram.com/markusstuppnig",
    githubLink: "https://github.com/Markus-Stuppnig",
    linkedinLink: "https://www.linkedin.com/in/markus-stuppnig/",
  },
  {
    id: 2,
    name: "Felix Dahmen",
    designation: "Data Scientist & AI Expert",
    image: "/images/team/team-02.png",
    email: "fdahmen@student.tgm.ac.at",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 3,
    name: "Benjamin Princ",
    designation: "Frontend Developer & UI/UX Designer",
    image: "/images/team/benjamin.jpeg",
    email: "bprinc@student.tgm.ac.at",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 4,
    name: "Christof Zlabinger",
    designation: "Data Scientist & AI Expert",
    image: "/images/team/christof.png",
    email: "czlabinger@student.tgm.ac.at",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph="Together we are a team of highly motivated and skilled students who develope DIEMP as part of our diploma project."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((person, i) => (
            <SingleTeam key={i} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
