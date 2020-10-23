import axios from 'axios'

const URL = `https://759f6d87-3637-459b-8c5d-ebe86f20d828.mock.pstmn.io/appier`

export const fetchMyInstructors = () => async (dispatch) => {
  const response = await axios.get(`${URL}`)

  console.log('from heaven!')
  console.log(response.data)
  dispatch({ type: 'FETCH_INSTRUCTORS', payload: response.data })
}
