import { useEffect, useState } from "react";
import { Board, BoardAPI } from "../../apis/BoardAPI";
import Button from '../../components/Button';
import axios from "axios";


export default function BoardForm() {

    const [boards, setBoards] = useState<Board[]>([]);
    const [boardWriter, setBoardWriter] = useState("");
    const [boardTitle, setBoardTitle] = useState("");
    const [boardContents, setBoardContents] = useState("");
    const [fileAttached, setFileAttached] = useState<File | null>(null);

    useEffect(() => {
    BoardAPI.getAll().then((res) => {
        setBoards(res);
    });
    }, []);
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("boardWriter", boardWriter);
        formData.append("boardTitle", boardTitle);
        formData.append("boardContents", boardContents);
        if (fileAttached) {
            formData.append("boardFile", fileAttached);
        } 
        
    
        // 서버로 데이터 전송
        axios.post("/board/save", formData)
        .then((response) => {
            // 서버 응답 처리
            console.log("글 작성 성공:", response.data);
        })
        .catch((error) => {
            // 에러 처리
            console.error("글 작성 실패:", error);
        });
    };

    
    return (
        <>
            <div>
                <form action="/board/list" method="post" onSubmit={handleSubmit}>
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
                        <p>파일: <input type="file" onChange={(e) => e.target.files && setFileAttached(e.target.files[0])} name="boardFile" /></p>
                    </div>

                    <Button size='Medium' type="submit">글작성</Button>
                </form>
            </div>
        </>
    )
}

