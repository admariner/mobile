import React from 'react'
import t from 't'
import Share from 'react-native-share'

import Goto from 'co/goto'

export default function BookmarkEditActionShare({ item: { link: url, title }, navigation }) {
    const onPress = React.useCallback(()=>{
        navigation.goBack()

        setTimeout(() => {
            Share.open({
                title,
                url,
                failOnCancel: false
            })  
        }, 100)
    }, [title, url])

    return (
        <Goto 
            label={t.s('share')}
            icon='upload-2'
            action=''
            onPress={onPress} />
    )
}