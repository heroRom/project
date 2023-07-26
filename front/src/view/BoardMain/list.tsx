// export {};
// import React from 'react';
// // import { boardListApi } from '../../apis';

import { useEffect, useState } from "react";
import { Board, BoardAPI } from "../../apis/BoardAPI";

export default function BoardList() {
  const [boards, setBoards] = useState<Board[]>([]);

  useEffect(() => {
    BoardAPI.getAll().then((res) => {
      setBoards(res);
    });
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>날짜</th>
          <th>조회수</th>
        </tr>
        {boards.map((board) => (
          <tr key={board.id}>
            <td>{board.id}</td>
            <td>
              <a href={`/board/${board.id}`}>{board.boardTitle}</a>
            </td>
            <td>{board.boardWriter}</td>
            <td>{board.writeDate}</td>
            <td>{board.boardClickCount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
