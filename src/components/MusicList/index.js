import React from 'react'
import { FlatList } from 'react-native'
import MusicItem from '../MusicItem'

const MusicList = ({ musicData }) => {
    const renderItem = ({item}) => {
        return (
            <MusicItem data={item}/>
        )
    }

    return (
        <FlatList 
            data={musicData || []}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default MusicList