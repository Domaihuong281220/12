import "./styles.css";

function Button(props) {
  const { btnName, handleClick, icon } = props;

  return (
    <>
      <button className="_button" onClick={() => handleClick()}>
        {icon} {btnName}
      </button>
    </>
  );
}

export default Button;
