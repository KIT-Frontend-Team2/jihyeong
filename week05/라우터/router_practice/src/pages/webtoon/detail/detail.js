import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import data from '../../../db/webtoon.json';
import uuid from 'react-uuid';

const DetailWebtoon = () => {
  const navigate = useNavigate();
  // const result = useParams();
  const [searchParams, setSearchParmas] = useSearchParams();

  const result = parseInt(searchParams.get('comicId'));

  const selectData = data.filter((data) => data.id === parseInt(result));

  const prevHandling = () => {
    if (parseInt(result) !== 1) {
      setSearchParmas({ comicId: result - 1 });
    } else {
      setSearchParmas({ comicId: data.length });
    }
  };

  const nextHandling = () => {
    if (parseInt(result) !== data.length) {
      setSearchParmas({ comicId: result + 1 });
    } else {
      setSearchParmas({ comicId: 1 });
    }
  };

  const mainMove = () => {
    const url = `/webtoon`;
    navigate(url);
  };

  const styled = {
    button: {
      color: 'white',
      fontSize: '13px',
      backgroundColor: 'black',
      width: '80px',
      padding: '10px',
    },
  };

  return (
    <div>
      <div className="flex justify-center p-3">
        {selectData.map((data) => {
          data.imgUrl = '../' + data.imgUrl;
          return (
            <div key={uuid()}>
              <div className="w-96">
                <img src={data.imgUrl} alt={data.name} />
                <span>{data.introduction}</span>
              </div>
              <div className="flex justify-between pt-2">
                <button style={styled.button} className="p-3 border-gray-500">
                  <span onClick={prevHandling}>이전 작품</span>
                </button>
                <button style={styled.button} onClick={mainMove}>
                  메인
                </button>
                <button style={styled.button} onClick={nextHandling}>
                  다음 작품
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailWebtoon;
