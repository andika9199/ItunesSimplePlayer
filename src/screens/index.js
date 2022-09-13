import React, { useEffect} from 'react'
import { View } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import { getMusicList } from '../store/reducers/music.reducer'
import MusicList from '../components/MusicList'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
    const dispatch = useDispatch()
    const musicData = useSelector((state) => state.music)

    useEffect(() => {
        // just for first initialization
        dispatch(getMusicList('John'))
    }, [])

    const triggerSearch = (value) => {
        dispatch(getMusicList(value))
    }

    return (
        <View>
            <SearchBar onSearch={triggerSearch}/>
            <MusicList musicData={musicData.data}/>
        </View>
    )
}

export default SearchScreen