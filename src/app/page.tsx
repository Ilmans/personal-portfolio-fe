import Wrapper from "../components/Wrapper";
import Button from "../components/Button";
import ProfileCard from "../components/ProfileCard";

const experiences = [
  "PHP",
  "Laravel",
  "CodeIgniter",
  "TypeScript",
  "JavaScript",
  "React JS",
  "Next Js",
  "Tailwind ",
  "Node Js",
  "Java",
  "Amazon AWS",
  "Mysql",
  "PostGree SQL",
  "Photography",
  "Photoshop",
  "Adobe Premiere",
  "VPS Management (Linux)",
];
export default function Home() {
  return (
    <main className="flex justify-center gap-4 mt-4">
      <ProfileCard className="hidden lg:w-2/7 lg:block" />
      <div className="lg:w-5/7">
        <Wrapper>
          <div className="flex flex-col justify-center gap-2 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <img src="/img/about.png" alt="" />
            </div>

            <div className="w-full px-4 py-4 lg:py-12 lg:w-1/2 font-poppins">
              <div className="relative flex items-center gap-2 text-xl font-normal z-1 ">
                <p className="text-teal-300 ">{`> ~ %`}</p>
                <p className="text-zinc-400">
                  About Me<span className="animate-blink">_</span>
                </p>
                <span className="absolute flex items-center transform -bottom-4 -rotate-3">
                  <span className="w-32 h-0.5 bg-teal-400"></span>
                  <span className="w-4 h-4 -ml-4 transform rotate-45 border-t-4 border-r-2 border-teal-400"></span>
                </span>
              </div>
              <div className="space-y-4">
                <h1 className="mt-6 text-xl font-semibold ">
                  Proficient Full Stack Developer with Strong Backend Expertise
                  and Frontend Experience...
                </h1>
                <p className="text-sm dark:text-zinc-400">
                  As a Freelance Full Stack Developer with a medium focus on
                  backend development and experience in frontend, I have the
                  skills necessary to create scalable and secure web solutions.
                  With meticulous attention to detail, I prioritize efficient
                  backend development to ensure seamless functionality.
                  Additionally, I have expertise in API integration and hands-on
                  experience in frontend development, which enriches my ability
                  to deliver holistic solutions.
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
        <div className="flex justify-center gap-2 -mt-4">
          <Wrapper className=" font-poppins">
            <h1 className="text-lg font-bold">My Experience</h1>
            <div className="grid grid-cols-3 gap-4 mt-4 lg:grid-cols-4">
              {experiences.map((experience) => (
                <Button
                  disabled={true}
                  onClick={() => {}}
                  className="text-xs"
                  text={experience}
                />
              ))}
            </div>
          </Wrapper>
          {/* <Wrapper className="w-1/3"></Wrapper> */}
        </div>
      </div>
    </main>
  );
}
