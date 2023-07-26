export {};
// import React from 'react'

// export default function BoardUpdateForm() {
//     const handleBoardUpdate = () => {
//         // document.updateForm.submit();
//     };
//   return (
//         <>
//         <div>
//             <form action="/board/update" method="post" name="updateForm">
//                 <input type="hidden" name="id" value={boardUpdate.id} />
//                 작성자: <input type="text" name="boardWriter" value={boardUpdate.boardWriter} readOnly /> <br />
//                 {/* 비밀번호: <input type="text" name="boardPassword" id="boardPassword" /> <br /> */}
//                 제목: <input type="text" name="boardTitle" value={boardUpdate.boardTitle} /> <br />
//                 내용: <textarea name="boardContents" cols={30} rows={10} value={boardUpdate.boardContents} /> <br />
//                 {/* 파일: <input type="file" name="boardFile" value={boardUpdate.fileStoredName} /> <br /> */}
//                 <input type="hidden" name="boardClickCount" value={boardUpdate.boardClickCount} />
//                 <input type="button" value="글수정" onClick={handleBoardUpdate} />
//             </form>
//         </div>
//         </>
//     ) 
// }