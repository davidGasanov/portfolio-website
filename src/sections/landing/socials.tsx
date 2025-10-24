import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const socials = [
  {
    href: "https://github.com/davidGasanov",
    Icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/davit-gasanov-5265b2228/",
    Icon: FaLinkedin,
  },
  {
    href: "mailto:davit.gasanov@protonmail.com",
    Icon: MdEmail,
  },
];

const Socials = () => {
  return (
    <ul className="flex gap-6 list-none items-center">
      {socials.map(({ href, Icon }) => (
        <li>
          <a href={href} target="_blank">
            <Icon
              size={26}
              className="text-light-primary opacity-75 hover:opacity-100 hover:text-primary transition-all duration-300 ease-in-out"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
