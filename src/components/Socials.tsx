import Link from "next/link";
import Sidebar from "./Sidebar";
import Image from "next/image";

type SocialProps = {
  isHero?: boolean;
};
interface MediaData {
  name: string;
  icon: string;
  url: string;
}

const socialMedia: MediaData[] = [
  {
    name: "github",
    icon: "/github.svg",
    url: "https://github.com/JusticeOpara",
  },
  {
    name: "Instagram",
    icon: "/instagram.svg",
    url: "https://www.instagram.com/",
  },
  {
    name: "X",
    icon: "/twitter.svg",
    url: "https://x.com/JustAtom4",
  },
  {
    name: "Linkedin",
    icon: "linkedin.svg",
    url: "https://www.linkedin.com/in/justice-opara-5b0474234/",
  },
  {
    name: "Phone",
    icon: "/phone.svg",
    url: "tel:07043434530",
  },
];

const Socials: React.FC<SocialProps> = ({ isHero }) => (
  <Sidebar isHero={isHero} orientation="left">
    <ul className="flex flex-col items-center m-0 p-0 list-none">
      {socialMedia &&
        socialMedia.map(({ url, icon, name }, i) => (
          <li key={i} className={i === socialMedia.length - 1 ? "mb-5" : ""}>
            <Link
              href={url}
              aria-label={icon}
              target="_blank"
              rel="noreferrer"
              className="p-2 hover:translate-y-[-3px] focus:translate-y-[-3px] transition-transform"
            >
              <Image src={icon} width={24} height={24} alt={name} className="hover:translate-y-[-5px] focus:translate-y-[-5px] transition-transform" />
            </Link>
          </li>
        ))}
      <li>
        <div className="w-[1px] h-[90px] mt-0 mb-0 mx-auto bg-light-slate"></div>
      </li>
    </ul>
  </Sidebar>
);

export default Socials;
