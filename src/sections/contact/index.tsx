import { twMerge } from "tailwind-merge";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Container from "../../components/container";
import ContactForm from "./contact-form";
import { Fade, Slide } from "react-awesome-reveal";

const contactLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/davidGasanov",
    label: "GitHub",
    username: "@davidGasanov",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/davit-gasanov-5265b2228/",
    label: "LinkedIn",
    username: "David Gasanov",
  },
  {
    icon: MdEmail,
    href: "mailto:davit.gasanov@protonmail.com",
    label: "Email",
    username: "davit.gasanov@protonmail.com",
  },
];

const Contact = () => {
  return (
    <section
      className="w-full min-h-screen bg-linear-to-b from-dark-secondary/65 to-dark-secondary/25"
      id="contact"
    >
      <Container className="pt-20 md:pt-24 pb-20 mt:pb-24 flex flex-col md:flex-row md:justify-between gap-8">
        <div className={twMerge("flex flex-col gap-10 md:w-[400px]")}>
          <div className="flex flex-col gap-3">
            <Fade triggerOnce>
              <Slide direction="up" triggerOnce>
                <h2 className="text-4xl md:h1-small font-bold font-montserrat text-primary uppercase">
                  Contact
                </h2>
              </Slide>
            </Fade>
            <Fade triggerOnce>
              <Slide direction="up" triggerOnce>
                <h3 className="opacity-60 font-extralight max-w-[500px] xl:max-w-[480px] text-sm">
                  Whether it's a new idea or an exciting challenge, feel free to
                  reach out and start the conversation.
                </h3>
              </Slide>
            </Fade>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col gap-3">
            <p className="text-sm text-light-primary/80 uppercase tracking-wide font-medium">
              Other ways to connect
            </p>
            <Slide
              triggerOnce
              cascade
              damping={0.2}
              fraction={0}
              className="flex flex-col gap-4"
            >
              {contactLinks.map((link) => (
                <Fade triggerOnce>
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-4 p-3 rounded-xl bg-dark-secondary/40 border border-white/10 text-light-primary/70 transition-all duration-200 hover:bg-dark-secondary/60 hover:border-white/20 hover:text-light-primary hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-dark-secondary/60 border border-white/10 transition-all duration-200 group-hover:bg-primary/30 group-hover:border-primary/80">
                      <link.icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-light-primary">
                        {link.label}
                      </span>
                      <span className="text-xs text-light-primary/50">
                        {link.username}
                      </span>
                    </div>
                  </a>
                </Fade>
              ))}
            </Slide>
          </div>
        </div>

        <Fade triggerOnce>
          <Slide triggerOnce direction="up">
            <ContactForm />
          </Slide>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
