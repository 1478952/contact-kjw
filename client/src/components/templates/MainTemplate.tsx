import Link from "next/link";
import HeroSection from "../organisms/heroSection/HeroSection";
import GithubIcon from "../atoms/icons/GithubIcon";

// 5138BE
const MainTemplate = () => {
  return (
    <main>
      <Link
        href={"https://github.com/1478952"}
        className="absolute right-0 translate-x-8 top-20 z-10"
      >
        <GithubIcon width="4rem" height="4rem" />
      </Link>
      <HeroSection />
    </main>
  );
};

export default MainTemplate;
