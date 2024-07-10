import "./btn.scss";

const Btn = ({ name, onClick }) => {
  return (
    <button className="btn-back" onClick={onClick}>
      {name}
    </button>
  );
};

export default Btn;
