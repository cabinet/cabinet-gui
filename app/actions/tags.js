export const TAGS_READ_SUCCESS = 'TAGS_READ_SUCCESS';

export function getTagList() {
  return (dispatch, getState) => {

    // @TODO: get this list from the RPC server.
    const tagList = ['Home', 'Work', 'Social'];

    dispatch(saveTagList(tagList));
  };
}

export function saveTagList(tagList) {
  return {
    type: TAGS_READ_SUCCESS,
    tagList,
  };
}
