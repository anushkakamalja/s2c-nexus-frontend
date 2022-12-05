var initialState = {
    studentId: "",
    companyId: ""
}
if (localStorage.getItem('state')) {
    const state = JSON.parse(localStorage.getItem('state'))
    initialState = state.identity
} 


const identityReducer = (state = initialState, action) => {
    switch (action.type) {
        case "STUDENT_LOG_IN":
            return {
                ...state,
                studentId: action.payload
            }
        default:
            return state
    }
}

export default identityReducer;