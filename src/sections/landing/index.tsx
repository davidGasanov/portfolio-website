import { FaArrowRight } from "react-icons/fa";
import Button from "../../components/button";
import Container from "../../components/container";
import Socials from "./socials";

const LandingSection = () => {
  return (
    <section className="w-full h-auto relative overflow-clip pb-20">
      {/* Animated Blurry Gradient Background - MOVED TO TOP */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Gradient blob 1 */}
        <div
          className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(252, 163, 17, 0.3) 0%, transparent 70%)",
            filter: "blur(120px)",
            animation: "blob 25s ease-in-out infinite",
          }}
        />

        {/* Gradient blob 2 */}
        <div
          className="absolute -top-[5%] right-[0%] w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(252, 163, 17, 0.2) 0%, transparent 70%)",
            filter: "blur(120px)",
            animation: "blob 25s ease-in-out infinite 2s",
          }}
        />

        {/* Gradient blob 3 */}
        <div
          className="absolute bottom-[0%] left-[20%] w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
            filter: "blur(100px)",
            animation: "blob 25s ease-in-out infinite 4s",
          }}
        />
        {/* Gradient blob 4 */}
        <div
          className="absolute -top-[20%] -right-[10%] w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
            filter: "blur(100px)",
            animation: "blob 25s ease-in-out infinite 4s",
          }}
        />
        {/* Gradient blob 5 */}
        <div
          className="absolute -top-[20%] -left-[20%] w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
            filter: "blur(100px)",
            animation: "blob 25s ease-in-out infinite 4s",
          }}
        />
      </div>

      <Container className="pt-20 md:pt-[100px] relative z-10">
        <div className="flex flex-col gap-3 items-center text-center">
          <h1 className="text-4xl md:h1-large font-extrabold font-montserrat text-primary uppercase">
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
          <div className="w-full flex flex-col items-center gap-4 mt-[150px] md:w-auto md:flex-row rounded-2xl">
            <div className="bg-dark-primary w-full rounded-2xl">
              <div className="w-full flex items-center justify-center gap-4 p-4 py-3 bg-dark-secondary/40 rounded-2xl border border-light-primary/30 shadow-2xl shadow-dark-secondary md:w-auto">
                <Socials />
              </div>
            </div>
            <Button className="w-full justify-center h-auto md:w-auto shrink-0 flex items-center gap-2 duration-200">
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
