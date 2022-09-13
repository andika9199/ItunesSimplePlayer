import React from 'react'
import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import colors from '../../styles.js/colors'
import { FONTS_BOLD, FONTS_REGULAR } from '../../styles.js/fonts'

const MusicItem = ({ data }) => {
    const { artworkUrl100, artistName, trackName, collectionName } = data
    return (
        <TouchableOpacity style={styles.container} onPress={() => {}}>
            <Image 
                style={styles.images}
                source={{uri: 
                    artworkUrl100
                }}
            />
            <View style={styles.musicContent}>
                <View style={{flex: 2}}>
                    <Text style={styles.songName} numberOfLines={1}>{trackName}</Text>
                    <Text style={styles.artist}>{artistName}</Text>
                    <Text style={styles.album}>{collectionName}</Text>
                </View>
                <Text style={styles.playMarker}>Played</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        marginHorizontal: 16,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: colors.charcoal_grey_50
    },
    images: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        marginRight: 16,
        borderRadius: 10
    },
    songName: {
        ...FONTS_BOLD,
        textAlign: 'left'
    },
    artist: {
        ...FONTS_REGULAR,
        textAlign: 'left'
    },
    album: {
        ...FONTS_REGULAR,
        fontSize: 14
    },
    musicContent: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignContent: 'center', 
        alignItems: 'center'
    }
})

export default MusicItem
