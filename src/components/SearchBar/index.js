import React, { useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const SearchBar = ({ onSearch }) => {
    const [searchKey, setSearch] = useState('')

    const onSearchChange = (value) => {
        setSearch(value)
    }

    const onEndEdit = () => {
        onSearch(searchKey)
    }

    return (
        <View style={styles.container}>
            <TextInput value={searchKey} style={styles.input} onChangeText={onSearchChange} placeholder='Search Song' onEndEditing={onEndEdit}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})

export default SearchBar

