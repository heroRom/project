package com.codingrecipe.board.dto;

import com.codingrecipe.board.entity.BoardEntity;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;

// DTO(Data Transfer Object), VO, Bean,         Entity
@Getter
@Setter
@ToString
@NoArgsConstructor // 기본생성자
@AllArgsConstructor // 모든 필드를 매개변수로 하는 생성자
public class BoardDTO {
    private Long id; // 번호
    private String boardWriter; // 작성자
    private String boardTitle; // 게시판 제목
    private String boardContents; // 게시판 내용
    // private String boardPassword; // 비밀번호
    // private int boardProfile; // 작성자 프로필
    private LocalDateTime writeDate; // 작성일
    private LocalDateTime updateDate; // 수정일
    private int boardClickCount; // 조회수
    private int fileAttached; // 파일 첨부 여부(첨부 1, 미첨부 0)

    private MultipartFile boardFile; // save.html -> Controller 파일 담는 용도
    private String fileOriginalName; // 원본 파일 이름
    private String fileStoredName; // 서버 저장용 파일 이름

    public BoardDTO(Long id, String boardWriter, String boardTitle, int boardClickCount, LocalDateTime writeDate) {
        this.id = id;
        this.boardWriter = boardWriter;
        this.boardTitle = boardTitle;
        this.boardClickCount = boardClickCount;
        this.writeDate = writeDate;
    }

    public static BoardDTO toBoardDTO(BoardEntity boardEntity) {
        BoardDTO boardDTO = new BoardDTO();
        boardDTO.setId(boardEntity.getId());
        boardDTO.setBoardWriter(boardEntity.getBoardWriter());
        // boardDTO.setBoardPassword(boardEntity.getBoardPassword());
        boardDTO.setBoardTitle(boardEntity.getBoardTitle());
        boardDTO.setBoardContents(boardEntity.getBoardContents());
        boardDTO.setBoardClickCount(boardEntity.getBoardClickCount());
        boardDTO.setWriteDate(boardEntity.getWriteDate());
        boardDTO.setUpdateDate(boardEntity.getUpdateDate());
        if (boardEntity.getFileAttached() == 0) {
            boardDTO.setFileAttached(boardEntity.getFileAttached()); // 0
        } else {
            boardDTO.setFileAttached(boardEntity.getFileAttached()); // 1
            // 파일 이름을 가져가야 함.
            // FileorginalName, FileStoredName : board_file_db(BoardFileEntity)
            // join
            // select * from board_db b, board_file_db bf where b.id=bf.board_id
            // and where b.id=?
            boardDTO.setFileOriginalName(boardEntity.getBoardFileEntityList().get(0).getFileOriginalName());
            boardDTO.setFileStoredName(boardEntity.getBoardFileEntityList().get(0).getFileStoredName());
        }

        return boardDTO;
    }
}
