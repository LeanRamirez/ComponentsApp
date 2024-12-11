import React, { PropsWithChildren, useContext } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
// import { colors } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';
import { CustomView } from './CustomView';


interface Props extends PropsWithChildren {

    style?: StyleProp<ViewStyle>
}

export const Card = ({ style, children }: Props) => {
    const { colors } = useContext(ThemeContext);
    return (
        <CustomView style={[
            {
                backgroundColor: colors.cardBackground,
                borderRadius: 10,
                padding: 10
            },

            style
        ]}>
            {children}
        </CustomView>
    )
}
