import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

function WithRouterSample() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <h4>Params</h4>
      <textarea value={JSON.stringify(params)} readOnly />
      <h4>location</h4>
      <textarea value={JSON.stringify(location, null, 2)} readOnly />
      <h4>navigate</h4>
      <button onClick={() => navigate(-1)}>Go Home</button>
    </div>
  );
}

export default WithRouterSample;