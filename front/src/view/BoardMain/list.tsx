export {};
// import React from 'react';
// // import { boardListApi } from '../../apis';


// export default function BoardList() {
  
//   const [userEmail, setUserEmail] = useState<String>('');
//   const [userPassword, setUserPassword] = useState<String>('');
//   const [userPasswordCheck, setUserPasswordCheck] = useState<String>('');
//   const [userNickname, setUserNickname] = useState<String>('');
//   const [userPhoneNumber, setUserPhoneNumber] = useState<String>('');

//   const signUpHandler = async () => {
//     const data = {
//       userEmail,
//       userPassword,
//       userPasswordCheck,
//       userNickname,
//       userPhoneNumber,
//     };
    
//     const signInResponse = await boardListApi(data);

//     if (!signInResponse) {
//       alert("게시판 불러오기에 실패했습니다."); 
//       return;
//     }
//     if (!signInResponse.result) {
//       alert("게시판 불러오기에 실패했습니다."); 
//       return;
//     }
//     alert("게시판 불러오기에 성공했습니다."); 
//   }

//   return (
//     <div>
//       <table>
//         <tr>
//           <th>번호</th>
//           <th>제목</th>
//           <th>작성자</th>
//           <th>날짜</th>
//           <th>조회수</th>
//         </tr>
//         {boardList.content.map((board: any) => ( // 여기서 any 대신 적절한 타입으로 대체하는 것이 좋습니다.
//           <tr key={board.id}>
//             <td>{board.id}</td>
//             <td><a href={`/board/${board.id}`}>{board.boardTitle}</a></td>
//             <td>{board.boardWriter}</td>
//             <td>{board.writeDate}</td>
//             <td>{board.boardClickCount}</td>
//           </tr>
//         ))}
//       </table>
//       {/* ... 이하 생략 ... */}
//     </div>
//   );
// };