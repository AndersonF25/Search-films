import {  BiSearch } from "react-icons/bi";
import "./modalInput.scss";
import { IoClose } from "react-icons/io5";

const ModalInput = () => {
  return (
    <div className="container-modal">
      <IoClose />
      <div className="content-modal">
        <form className="container-input">
          <input type="text" />
            <button>
                
            </button>
            <BiSearch />
   
        </form>
      </div>
    </div>
  );
};

export default ModalInput;
