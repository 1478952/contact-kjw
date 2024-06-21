interface DescriptionProps {
  text: string;
}

const Description = ({ text }: DescriptionProps) => {
  return <p className="mt-6 text-lg leading-8 text-blue-200">{text}</p>;
};

export default Description;
