import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const LayOut = () => {
  return (
    <>
      <Header />
      <div className="relative top-14 bottom-20">
        <div className="flex justify-center">
          <div className=" m-auto">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LayOut;
