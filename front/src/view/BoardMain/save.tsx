import { BoardAPI } from "../../apis/BoardAPI";
import Button from "../../components/Button";

export default function BoardForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    BoardAPI.write(data).then((res) => {
      if (res) console.log("글 작성 성공");
      else console.log("글 작성 실패");
    });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <p>
              작성자: <input type="text" name="boardWriter" />
            </p>
          </div>
          <div>
            <p>
              제목: <input type="text" name="boardTitle" />
            </p>
          </div>
          <div>
            <p>
              내용: <textarea name="boardContents"></textarea>
            </p>
          </div>
          <div>
            <p>
              파일: <input type="file" name="boardFile" />
            </p>
          </div>

          <Button size="Medium" type="submit">
            글작성
          </Button>
        </form>
      </div>
    </>
  );
}
