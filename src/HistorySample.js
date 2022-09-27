import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HistorySample({ history }) {
  // const goBack = () => {
  //   history.goBack();
  // }

  // const goHome = () => {
  //   history.push('/');
  // }

  const navigate = useNavigate();
  const goBack = () => {
    const confirm = window.confirm('정말 떠나시나요?');
    if (confirm) {
      navigate(-1);
    }
  };

  const goHome = () => {
    navigate('/');
  }

  // useEffect(() => {
  //   console.log(history);
  //   const unblock = history.block('정말 떠나실건가요?');
  //   return () => {
  //     unblock();
  //   }
  // }, [history]);

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
}

export default HistorySample;