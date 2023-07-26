package com.codingrecipe.board.controller;

import com.codingrecipe.board.dto.BoardDTO;
import com.codingrecipe.board.dto.SaveBoardDTO;
import com.codingrecipe.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/board")
public class BoardApiController {
    private final BoardService boardService;

    @GetMapping
    public List<BoardDTO> get() {
        return boardService.findAll();
    }

    @PostMapping
    public Boolean save(
            @ModelAttribute SaveBoardDTO dto
    ) {
        try {
            boardService.save(dto);
        } catch (Exception e) {
            return false;
        }

        return true;
    }
}