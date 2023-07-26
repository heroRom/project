import React from 'react';

const BoardMain = () => {
  const saveReq = () => {
    window.location.href = "/board/save";
  };

  const listReq = () => {
    window.location.href = "/board/";
  };

  const pagingReq = () => {
    window.location.href = "/board/paging";
  };

  return (
    <div>
      <button onClick={saveReq}>글작성</button>
      <button onClick={listReq}>글목록</button>
      <button onClick={pagingReq}>페이징목록</button>
    </div>
  );
};

export default BoardMain;
