type HeadingProps = {
  children: string;
};

export const Heads = (props: HeadingProps) => {
  return (
    <div>
      <h2>{props.children}</h2>
    </div>
  );
};
