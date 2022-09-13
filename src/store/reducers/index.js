import {combineReducers} from '@reduxjs/toolkit'

import musicReducer from './music.reducer'

const rootReducer = combineReducers({
    music: musicReducer
})
  
export default rootReducer
  