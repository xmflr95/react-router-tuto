import React from 'react';
import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams] = useSearchParams();
  const detail = searchParams.get('detail') === 'true';
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 ㅍㄹㅈㅌ입니다.</p>
      {detail && <p>추가적인 정보가 어쩌고 저쩌고...</p>}
    </div>
  );
};


export default About;