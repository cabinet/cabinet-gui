const defaultState = {
  0: 'Zero',
  10: 'blah blah',
  13: { u: 'ivan', p: 'secret' },
  42: 'meaning of life',
}

export default function itemDetails(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

