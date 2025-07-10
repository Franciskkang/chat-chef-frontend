import React from "react";

// 미션
// 1. info페이지에서 Title컴포넌트 불러오기
// 2. props활용하여 home, info페이지 텍스트 다르게 표시하기

const Title = ({ mainTitle, subTitle }) => {
  return (
    <div className="px-2 pt-6">
      <h1 className="text-4.5xl font-black text-white">{mainTitle}</h1>
      {subTitle && (
        <span className="block text-sm mt-3 text-white break-keep pr-9">
          {subTitle}
        </span>
      )}
    </div>
  );
};

export default Title;
