import Link from "next/link";

interface HeaderLinkProps {
  href: string;
  text: string;
}

const HeaderLink = ({ text, href }: HeaderLinkProps) => {
  return (
    <Link href={href} className="text-sm font-semibold leading-6 text-gray-900">
      {text}
    </Link>
  );
};

export default HeaderLink;
