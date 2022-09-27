import React from "react";
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import About from "./About";
import HistorySample from "./HistorySample";
import Home from "./Home";
// import Profile from "./Profile";
import Profiles from "./Profiles";
import WithRouterSample from "./WithRouterSample";

function App() {
  const { pathname } = useLocation();
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
        <li>
          <Link to="/wrs">라우팅 정보</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/profiles/:username" element={<Profile />} /> */}
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/history" element={<HistorySample />} />
        <Route path="/*" element={<h1>이 페이지는 존재하지 않습니다. - {pathname}</h1>} />
        <Route path="/wrs" element={<WithRouterSample />} />
      </Routes>
    </div>
  );
}

export default App;
