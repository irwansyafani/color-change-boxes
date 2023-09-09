const Box = ({ color, text = "X", onClick }) => {
  return (
    <div
      className="box"
      onClick={onClick}
      style={{
        backgroundColor: color,
      }}
    >
      {text}
    </div>
  );
};

export default Box