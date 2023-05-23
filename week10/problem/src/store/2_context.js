import { createContext, useContext, useEffect, useState } from 'react';

const ModalContext = createContext();

export const useModalContext = () => useContext(ModalContext);

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPushed, setIsPushed] = useState([false, false]);

  useEffect(() => {
    console.log(isPushed);
    if (!isPushed[0] || !isPushed[1]) {
      return setIsModalOpen(false);
    }
    setIsModalOpen(true);
  }, [isPushed]);

  return (
    <ModalContext.Provider value={[isModalOpen, setIsPushed]}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
