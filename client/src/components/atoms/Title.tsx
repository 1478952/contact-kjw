interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl whitespace-pre-line">
      {text}
    </h1>
  );
};

export default Title;
