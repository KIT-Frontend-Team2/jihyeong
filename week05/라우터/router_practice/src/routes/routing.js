import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/main";
import BestChallenge from "../pages/bestChallenge";
import Challenge from "../pages/challenge";
import ComicList from "../pages/webtoon";
import MyPage from "../pages/myPage";
import Create from "../pages/creators";
import DetailWebtoon from "../pages/webtoon/detail";
import ErrorPage from "../pages/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/webtoon",
    element: <ComicList />,
  },
  {
    path: "/bestChallenge",
    element: <BestChallenge />,
  },
  {
    path: "/challenge",
    element: <Challenge />,
  },
  {
    path: "/myPage",
    element: <MyPage />,
  },
  { path: "/creators", element: <Create /> },
  { path: "/webtoon/detail/", element: <DetailWebtoon /> },
  { path: "/*", element: <ErrorPage /> },
]);

export default router;
