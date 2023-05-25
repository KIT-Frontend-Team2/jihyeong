import { createContext, useContext, useEffect, useState } from 'react';

const ModalContext = createContext();

export const useModalContext = () => useContext(ModalContext);

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPushed, setIsPushed] = useState([false, false]);


  return <ModalContext.Provider value={[isPushed, setIsPushed]}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
