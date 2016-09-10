import { TAGS_READ_SUCCESS } from 'actions/tags';

export default function tagList (state = [], action) {
  switch(action.type) {
    case TAGS_READ_SUCCESS:
      return action.tagList;
    default:
      return state;
  }
}
