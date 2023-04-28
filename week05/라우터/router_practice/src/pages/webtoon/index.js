import Header from "../main/header";
import Webtoon from "../../components/button/Webtoon";
import data from "../../db/webtoon.json";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
const ComicList = () => {
  let comicList = data;
  return (
    <>
      <Header></Header>
      <div className="text-center ">
        <span>금일 웹툰 목록입니다</span>
        <div className="flex justify-center">
          <ul className=" flex justify-between flex-wrap max-w-7xl">
            {comicList.map((comic) => {
              const url = `/webtoon/detail/?comicId=${comic.id}`;
              return (
                <Link key={uuid()} to={url}>
                  <Webtoon props={comic} />
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ComicList;
