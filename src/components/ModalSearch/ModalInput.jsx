import { BiSearch } from "react-icons/bi";
import "./modalInput.scss";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ModalInput = ({
  setOpenModalSearch,
  openModalSearch,
  setSearch,
  search,
}) => {
  useEffect(() => {
    if (openModalSearch === true) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
    setOpenModalSearch(false);
  };

  console.log(search);

  return (
    <div className="container-modal" onClick={() => setOpenModalSearch(!true)}>
      <div className="content-modal" onClick={(e) => e.stopPropagation()}>
        <IoClose
          className="btn-close"
          onClick={() => setOpenModalSearch(!true)}
        />
        <form className="container-input" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Busque seu filme"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn-search" type="submit">
            <BiSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalInput;
