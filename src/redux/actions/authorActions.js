import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHOR_SUCESS, authors };
}

export function loadAuthor() {
  return function (dispatch) {
    return authorApi
      .getAuthors()
      .then((courses) => {
        dispatch(loadAuthorsSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
