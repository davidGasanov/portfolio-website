import Container from "../../components/container";
import Socials from "./socials";

const LandingSection = () => {
  return (
    <section className="w-full h-auto mt-[80px] md:mt-[100px]">
      <Container>
        <div className="flex flex-col gap-3 items-center text-center">
          <h1 className="h1-small md:h1-large font-montserrat text-primary">
            David Gasanov
          </h1>
          <h2 className="h3-big text-2xl opacity-90">
            Professional Front-end developer
          </h2>
          <h3 className="opacity-70 font-light max-w-[640px] mt-2">
            I build performant, scalable and accessible web apps and websites —
            with a strong focus on component architecture, UI & UX design, and
            clean, maintainable code that supports fast development and seamless
            user experiences.
          </h3>

          {/* Contact */}
          <div className="mt-[150px] flex items-center gap-4">
            <p className="text-sm font-medium opacity-65">Contact me: </p>
            <Socials />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LandingSection;
