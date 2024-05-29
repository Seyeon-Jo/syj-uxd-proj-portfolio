import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { CTA } from "../components";

import "react-vertical-timeline-component/style.min.css";

const Home = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="font-semibold purple-gradient_text drop-shadow">
          {" "}
          Seyeon
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
        <span className="font-semibold">UX UI Designer</span> and <span className="font-semibold">Software Developer</span> based in Toronto, specializing in Software Engineering and
          Digital Experience Design.
        </p>
      </div>

      {/* Photo, Introduction, and Resume Section */}
      <div className="flex flex-col sm:flex-row mt-10 items-center text-center sm:text-left">
        {/* Photo */}
        <div className="sm:flex-1 flex justify-center items-start">
          <img
            src="/profile.jpeg"
            alt="Seyeon"
            className="rounded-full max-w-[300px] mx-auto"
          />
        </div>

        {/* Introduction and Resume */}
        <div className="text-left sm:flex-1 sm:ml-5 mt-4 sm:mt-0">
          <p className="text-slate-500">
            UX UI Designer and Software Developer from Toronto with a background in Software Engineering
            and a passion for creating intuitive digital experiences.
          </p>
          <p className="mt-2 text-slate-500">
            My journey has been driven by a love for design and coding that solves real
            problems, enhances usability, and delights users. I thrive on
            collaboration, bringing innovative solutions to complex challenges.
            Let's connect and create something impactful together.
          </p>
          <a
            href="https://www.linkedin.com/in/seyeonjo/"
            target="_blank"
            className="bg-purple-600 text-white hover:bg-purple-700 font-medium py-2 px-4 rounded mt-4 sm:mt-6 inline-block mx-auto sm:mx-0"
          >
            Connect with Me
          </a>
          {/* <a
            href="/resume.pdf"
            target="_blank"
            className="bg-purple-600 text-white hover:bg-purple-700 font-medium py-2 px-4 rounded mt-4 sm:mt-6 inline-block mx-auto sm:mx-0"
          >
            Download My Resume
          </a> */}
        </div>
      </div>

      <div className="py-10 flex flex-col mt-10">
        <h3 className="subhead-text">My Project</h3>

        <div className="flex flex-wrap my-16 gap-16">
          {projects.map((project) => (
            <div className="lg:w-[400px] w-full" key={project.name}>
              {/* This section is the icon before project cover img */}
              {/* <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div> */}

              <div className="flex flex-col">
                <div className="flex justify-center items-center mb-4">
                  <img
                    src={project.preview}
                    alt={project.name}
                    className="object-contain"
                    style={{ width: "100%" }} // Image will fill the width of its container
                  />
                </div>

                <h4 className="text-2xl font-poppins font-semibold">
                  {project.name}
                </h4>
                <p className="mt-2 text-slate-500">{project.description}</p>
                <div className="mt-5 text-purple-600 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" font-semibold text-black-600"
                  >
                    Learn More
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                  {/* Github link will be on case study page like figma link
                <Link
                  to={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn font-semibold text-black-600"
                >
                  Github
                </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Home;
