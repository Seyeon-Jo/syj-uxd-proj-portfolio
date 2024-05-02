import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiences, skills } from "../constants";

import { CTA } from "../components";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        About{" "}
        <span className="font-semibold purple-gradient_text drop-shadow">
          {" "}
          Me
        </span>{" "}
        🐰
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          UX Designer based in Toronto, specializing in Software Engineering and
          Digital Experience Design.
        </p>
      </div>

      {/* Photo, Fun fact Section */}
      <div className="flex flex-col sm:flex-row mt-10 items-center text-center sm:text-left">
        {/* Photo */}
        <div className="sm:flex-1 flex justify-center items-start">
          <img
            src="/profile-pic.jpeg" // Replace with the correct path to your photo
            alt="Seyeon"
            className="rounded-full max-w-[300px] mx-auto" // mx-auto to center the image on mobile
          />
        </div>

        {/* Fun fact */}
        <div className="text-left sm:flex-1 sm:ml-5 mt-4 sm:mt-0">
          <p className="text-black-500 text-lg font-semibold">
            A Peek into My World 🐰
          </p>
          <p className="mt-4 text-slate-500">
            <span className="font-semibold text-black-500">
              1. Passionate about Learning and Reflecting
            </span>{" "}
            <br /> I enjoy tracking my studies, thoughts, and interests. I
            regularly document these in Notion and GitHub blog.
          </p>
          <p className="mt-4 text-slate-500">
            <span className="font-semibold text-black-500">
              2. Digital Drawing Enthusiast
            </span>{" "}
            <br /> I've recently started exploring digital art. During my free
            time, I love creating drawings on my iPad.
          </p>
          <p className="mt-4 text-slate-500">
            <span className="font-semibold text-black-500">
              3. Blending Design with Coding
            </span>{" "}
            <br /> While my main focus is on UX design, I also love bringing my
            designs to life through coding.
          </p>
        </div>
      </div>

      {/* <div className="mt-8 flex flex-col gap-3 text-slate-500">
        <p className="text-black-500 text-lg font-semibold">My Journey</p>
        <p className="mt-2 text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          vulputate est sit amet dapibus pulvinar. Curabitur quis arcu auctor,
          volutpat nunc et, mattis orci. Donec sagittis laoreet sapien, quis
          fermentum mauris condimentum eu.
        </p>
        <p className="mt-4 text-black-500 text-lg font-semibold">My Approach</p>
        <p className="mt-2 text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          vulputate est sit amet dapibus pulvinar. Curabitur quis arcu auctor,
          volutpat nunc et, mattis orci. Donec sagittis laoreet sapien, quis
          fermentum mauris condimentum eu.
        </p>
      </div> */}

      <div className="py-10 flex flex-col mt-10">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked as a UX Designer, leveling up my skills and teaming up
            with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base mt-100"
                    // style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
