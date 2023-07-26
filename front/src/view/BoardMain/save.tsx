import React, { useState } from 'react'
import { boardListApi } from '../../apis';
import Button from '../../components/Button';


export default function BoardForm() {
    const [boardTitle, setBoardTitle] = useState<String>('');
    const [boardContents, setBoardContents] = useState<String>('');
    const [boardWriter, setBoardWriter] = useState<String>('');
    // const [writeDate, setWriteDate] = useState<Date>('');
    // const [updateDate, setUpdateDate] = useState<Date>('');
    // const [boardClickCount, setBoardClickCount] = useState<String>('');
    const [fileAttached, setFileAttached] = useState<String>('');
    

    const LogInHandler = async () => {
        const data = {
            boardTitle,
            boardContents, 
            boardWriter,
            // writeDate,
            // updateDate,
            // boardClickCount,
            fileAttached,
        };
    
        const boardResponse = await boardListApi(data);
    
        if (!boardResponse) {
            alert("게시판 업로드 실패했습니다"); 
            return;
        }
        if (!boardResponse.result) {
            alert("게시판 업로드 실패했습니다"); 
            return;
        }
        alert("게시판 업로드 성공했습니다."); 
    }
    
    return (
        <>
            <div>
                <form action="/board/save" method="post" >
                    <div>
                        <p>작성자: <input type="text" onChange={(e) => setBoardWriter(e.target.value)} name="boardWriter" /></p>
                    </div>
                    <div>
                        <p>제목: <input type="text" onChange={(e) => setBoardTitle(e.target.value)} name="boardTitle" /></p>
                    </div>
                    <div>
                        <p>내용: <textarea onChange={(e) => setBoardContents(e.target.value)} name="boardContents"></textarea></p>
                    </div>
                    <div>
                        <p>파일: <input type="file" onChange={(e) => setFileAttached(e.target.value)} name="boardFile" /></p>
                    </div>
                    
                    <Button size='Medium'><input type="submit" value="글작성" /> 글작성</Button> {/* 나중에 Botton 컴포넌트로 변경 */}
                </form>
            </div>
        </>
    )
}

