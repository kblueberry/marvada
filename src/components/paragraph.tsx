export const Paragraph = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return <p {...{ className }}>{text}</p>;
};
