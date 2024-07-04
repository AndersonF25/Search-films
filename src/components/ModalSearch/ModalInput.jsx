import { BiSearch } from "react-icons/bi";
import "./modalInput.scss";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";

const ModalInput = ({ setOpenModalSearch, openModalSearch }) => {
  useEffect(() => {
    if (openModalSearch === true) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);


  return (
    <div className="container-modal" onClick={() => setOpenModalSearch(!true)}>
      <div className="content-modal" >
        <IoClose
          className="btn-close"
          onClick={() => setOpenModalSearch(!true)}
        />
        <form className="container-input">
          <input type="text" className="input" placeholder="Busque seu filme" />
          <button className="btn-search">
            <BiSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalInput;
