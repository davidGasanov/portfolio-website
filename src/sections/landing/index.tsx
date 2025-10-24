import { FaArrowRight } from "react-icons/fa";
import Button from "../../components/button";
import Container from "../../components/container";
import Socials from "./socials";

const LandingSection = () => {
  return (
    <section className="w-full h-auto relative overflow-clip pb-20">
      <div className="absolute top-0 left-0 -z-10 w-full h-full">
        <div className="relative w-full h-full">
          <img
            alt="background image"
            src="/background/wave-bg.svg"
            className="opacity-10 object-cover absolute top-0 left-0"
          />
          <div
            className="w-full h-full absolute top-0 left-0 gradient"
            // style={{
            //   background:
            //     "linear-gradient(140deg,rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 25%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.6) 75%, rgba(0, 0, 0, 0.1) 100%)",
            // }}
          />
        </div>
      </div>
      <Container className="pt-20 md:pt-[100px]">
        <div className="flex flex-col gap-3 items-center text-center">
          <h1 className="text-4xl md:h1-large font-bold font-montserrat text-primary">
            David Gasanov
          </h1>
          <h2 className="text-md md:text-2xl opacity-90">
            Professional Front-end web developer
          </h2>
          <h3 className="opacity-70 font-light max-w-[500px] xl:max-w-[640px] mt-4 xl:mt-6">
            I build performant, scalable and accessible web apps and websites —
            with a strong focus on component architecture, UI & UX design, and
            clean, maintainable code that supports fast development and seamless
            user experiences.
          </h3>

          {/* Contact */}
          <div className="w-full flex flex-col items-center gap-4 mt-[150px] md:w-auto md:flex-row">
            <div className="bg-dark-primary">
              <div className="w-full flex items-center justify-center gap-4 p-4 py-3 bg-dark-secondary/40 rounded-2xl border border-light-primary/30 shadow-2xl shadow-dark-secondary md:w-auto">
                <Socials />
              </div>
            </div>
            <Button className="w-full h-auto md:w-auto shrink-0 flex items-center gap-2 hover:gap-2.5 duration-200">
              Contact me
              <FaArrowRight />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LandingSection;
