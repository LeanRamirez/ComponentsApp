import React, { useContext } from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { ThemeContext } from '../../context/ThemeContext';
// import { colors } from '../../../config/theme/theme'

interface Props {
    style?: StyleProp<ViewStyle>
}

export const Separator = ({ style }: Props) => {

    const { colors } = useContext(ThemeContext);
    return (
        <View style={{
            backgroundColor: colors.cardBackground
        }}>
            <View
                style={[
                    {
                        alignSelf: 'center',
                        width: '80%',
                        marginVertical: 10,
                        backgroundColor: colors.text,
                        height: 1,
                        opacity: 0.1
                    },
                    style
                ]}
            />
        </View>


    )
}
