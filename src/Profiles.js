import React from "react";
import { Link, Routes, Route } from 'react-router-dom';
import Profile from "./Profile";
import RouterHookSample from "./RouterHookSample";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/velopert">velopert</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong</Link>
        </li>
      </ul>
      
      <Routes>
        <Route
          path="/"
          // render={() => <div>유저를 선택해 주세요.</div>}
          element={<div className="user-select">유저를 선택해주세요.</div>}
        />
        <Route path=":username" element={<Profile />} />        
      </Routes>     

      <WithRouterSample />
      {/* <RouterHookSample /> */}
    </div>
  );
};

export default Profiles;