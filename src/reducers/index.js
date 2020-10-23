const fetchInstructors = (initialState = [], action) => {
  if (action.type === 'FETCH_INSTRUCTORS') {
    return action.payload
  }
  return initialState
}
export default fetchInstructors
