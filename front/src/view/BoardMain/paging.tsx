export {};

// import { useEffect, useState } from "react";
// import { Board, BoardAPI } from "../../apis/BoardAPI";

// export default function BoardPaging() {
//     const [boards, setBoards] = useState<Board[]>([]);

//     useEffect(() => {
//     BoardAPI.getAll().then((res) => {
//         setBoards(res);
//     });
//     }, []);

//     return (
//         <div>
//         <button>글작성</button>

//         <table>
//             <tr>
//             <th>번호</th>
//             <th>제목</th>
//             <th>작성자</th>
//             <th>날짜</th>
//             <th>조회수</th>
//             </tr>
//             {boardList.totalPages.map((page: number) => ( // 여기서 number 대신 적절한 타입으로 대체하는 것이 좋습니다.
//                 <span key={page}>
//                 {page === boardList.number + 1 ? (
//                     <span>{page}</span>
//                 ) : (
//                     <a href="#" onClick={() => handlePageClick(page)}>{page}</a> // 여기서 href 대신 적절한 링크 주소를 사용하는 것이 좋습니다.
//                 )}
//                 </span>
//             ))}
//         </table>

//         <a href={`/board/paging?page=1`}>First</a>
//         <a href={boardList.number === 0 ? '#' : `/board/paging?page=${boardList.number + 1}`}>
//             prev
//         </a>

//         <span>
//             {boardList.totalPages.map((page) => (
//             <span key={page}>
//                 {page === boardList.number + 1 ? (
//                 <span>{page}</span>
//                 ) : (
//                 <a href={`/board/paging?page=${page}`}>{page}</a>
//                 )}
//             </span>
//             ))}
//         </span>

//         <a href={boardList.number + 2 > boardList.totalPages ? '#' : `/board/paging?page=${boardList.number + 2}`}>
//             next
//         </a>
//         <a href={`/board/paging?page=${boardList.totalPages}`}>Last</a>
//         </div>
//     );
// };
