type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;

  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          We are hiring {props.name}! You have {messageCount} unread messages
        </h2>
      ) : (
        "Welcome Guest"
      )}
    </div>
  );
};