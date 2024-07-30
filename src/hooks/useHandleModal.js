import { useState } from "react";

const useHandleModal = ({ setOpenModal, animationDuration = 700 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(true);
    setTimeout(() => {
      setOpenModal(false);
    }, animationDuration);
  };

  return { isOpen, handleClose };
};

export default useHandleModal;
