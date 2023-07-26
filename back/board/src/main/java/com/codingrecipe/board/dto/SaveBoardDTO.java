package com.codingrecipe.board.dto;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class SaveBoardDTO {
    private String boardWriter; // 작성자
    private String boardTitle; // 게시판 제목
    private String boardContents; // 게시판 내용
    private MultipartFile boardFile; // save.html -> Controller 파일 담는 용도
}
