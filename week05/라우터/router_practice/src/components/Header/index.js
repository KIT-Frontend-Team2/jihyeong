import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

const Header = () => {
  return (
    <div className="fixed h-10 top-0 w-full">
      <div className="flex justify-center ">
        <div className="flex justify-between">
          <div className="flex ml-4">
            <Link to="/">
              <Button props={'홈'} />
            </Link>
            <Link to="/webtoon">
              <Button props={'웹툰'} />
            </Link>
            <Link to="/bestChallenge">
              <Button props={'베스트도전'} />
            </Link>
            <Link to="/challenge">
              <Button props={'도전만화'} />
            </Link>
            <Link to="/myPage">
              <Button props={'마이페이지'} />
            </Link>
          </div>
          <div className="mr-4">
            <Link to="/creators">
              <Button props={"CREATOR'S"}></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
