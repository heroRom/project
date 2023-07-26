/**
 * Board API
 */

import axios from "axios";

export type Board = {
  id: number;
  boardWriter: string;
  boardTitle: string;
  boardContents: string;
  writeDate: string;
  updateDate?: string;
  boardClickCount: number;
  fileAttached: number;
  boardFile?: string;
  fileOriginalName?: string;
  fileStoredName?: string;
};

export const BoardAPI = {
  getAll: async function () {
    const response = await axios.get("/api/board");
    return response.data as Board[];
  },

  write: async function (form: FormData) {
    const response = await axios.post("/api/board", form);
    return response.data as Boolean;
  },
};
