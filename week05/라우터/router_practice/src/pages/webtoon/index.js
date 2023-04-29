import data from '../../db/webtoon.json';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import Webtoon from './webtoonList/Webtoon';
const ComicList = () => {
  let comicList = data;
  return (
    <>
      <h1 className="text-center">금일 웹툰 목록입니다</h1>
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
    </>
  );
};

export default ComicList;
