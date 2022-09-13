import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data: null,
    currentPage: 1,
    totalPage: 0
}

const musicReducerSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        getMusicList(state) {
            return {
                ...state,
                inProgress: true,
                error: ''
            }
        },
        getMusicListSuccess(state, {payload}) {
            return {
                ...state,
                data: payload,
                error: ''
            }
        },
        getMusicListFailure(state, {payload}) {
            return {
                ...state,
                inProgress: false,
                error: payload
            }
        }
    }
})

export const {
    getMusicList,
    getMusicListSuccess,
    getMusicListFailure,
} = musicReducerSlice.actions

export default musicReducerSlice.reducer