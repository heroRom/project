export {};
// import { useEffect, useState } from "react";
// import { Board, BoardAPI } from "../../apis/BoardAPI";

// interface Comment {
//     id: number;
//     commentWriter: string;
//     commentContents: string;
//     commentWriteDate: string;
// }

// interface Board {
//     id: number;
//     boardTitle: string;
//     boardWriter: string;
//     writeDate: string;
//     boardClickCount: number;
//     boardContents: string;
//     fileAttached: number;
//     fileStoredName?: string;
// }

// interface BoardDetailProps {
//     board: Board;
// }

// const BoardDetail: React.FC<BoardDetailProps> = ({ board }) => {
//     const commentWrite = () => {
//         const writer = document.getElementById("commentWriter")?.value;
//         const contents = document.getElementById("commentContents")?.value;
//         console.log("작성자: ", writer);
//         console.log("내용: ", contents);
//         const id = board?.id;
//         if (writer && contents && id) {
//         const requestData = {
//             commentWriter: writer,
//             commentContents: contents,
//             boardId: id,
//         };

//         axios.post('/api/comment/save', requestData)
//             .then((res) => {
//             console.log("요청성공", res);
//             // ... 기타 댓글 처리 로직 ...
//             })
//             .catch((err) => {
//             console.log("요청실패", err);
//             });
//         }
//     };

//     return (
//         <div>
//         <table>
//             <tr>
//             <th>번호</th>
//             <td>{board.id}</td>
//             </tr>
//             <tr>
//             <th>제목</th>
//             <td>{board.boardTitle}</td>
//             </tr>
//             <tr>
//             <th>작성자</th>
//             <td>{board.boardWriter}</td>
//             </tr>
//             <tr>
//             <th>날짜</th>
//             <td>{board.writeDate}</td>
//             </tr>
//             <tr>
//             <th>조회수</th>
//             <td>{board.boardClickCount}</td>
//             </tr>
//             <tr>
//             <th>내용</th>
//             <td>{board.boardContents}</td>
//             </tr>
//             {board.fileAttached === 1 && (
//             <tr>
//                 <th>이미지</th>
//                 <td><img src={`/upload/${board.fileStoredName}`} alt="" /></td>
//             </tr>
//             )}
//         </table>
//         <button onClick={listReq}>목록</button>
//         <button onClick={updateReq}>수정</button>
//         <button onClick={deleteReq}>삭제</button>

//         {/* 댓글 작성 부분 */}
//         <div id="comment-write">
//             <input
//             type="text"
//             value={commentWriter}
//             onChange={(e) => setCommentWriter(e.target.value)}
//             placeholder="작성자"
//             />
//             <input
//             type="text"
//             value={commentContents}
//             onChange={(e) => setCommentContents(e.target.value)}
//             placeholder="내용"
//             />
//             <button onClick={handleCommentWrite}>댓글작성</button>
//         </div>

//         {/* 댓글 출력 부분 */}
//         <div id="comment-list">
//             <table>
//             <tr>
//                 <th>댓글번호</th>
//                 <th>작성자</th>
//                 <th>내용</th>
//                 <th>작성시간</th>
//             </tr>
//             {commentList.map(comment => (
//                 <tr key={comment.id}>
//                 <td>{comment.id}</td>
//                 <td>{comment.commentWriter}</td>
//                 <td>{comment.commentContents}</td>
//                 <td>{comment.commentWriteDate}</td>
//                 </tr>
//             ))}
//             </table>
//         </div>
//         </div>
//     );
// };

// export default BoardDetail;
