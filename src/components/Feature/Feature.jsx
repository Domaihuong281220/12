import "./styles.css";

function Feature(props) {
  const { videoUrl, type } = props
  return (
    <video className="video" autoPlay muted loop>
      <source src={videoUrl} type={type} />
    </video>
  );
}

export default Feature;
  