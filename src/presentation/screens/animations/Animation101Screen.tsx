import React, { useContext } from 'react'
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native'

import { UseAnimation } from '../../hooks/UseAnimation'
import { ThemeContext } from '../../context/ThemeContext';
import { CustomView } from '../../components/ui/CustomView';

export const Animation101Screen = () => {
    const { colors } = useContext(ThemeContext);


    const { animatedOpacity, fadeIn, animatedTop, fadeOut, startMovingTopPosition } = UseAnimation();

    return (
        <CustomView style={styles.contaniner}>
            <Animated.View style={[styles.purpleBox,
            {
                backgroundColor: colors.primary
            },
            {
                opacity: animatedOpacity,
                transform: [{
                    translateY: animatedTop
                }]
            }]
            } />

            <Pressable onPress={() => {
                fadeIn({}),
                    startMovingTopPosition({
                        initialPosition: -100,
                        easing: Easing.elastic(2),
                        duration: 750
                    })
            }} style={{ marginTop: 10 }}>
                <Text style={{ color: colors.text }}>Fade in</Text>
            </Pressable>

            <Pressable onPress={() => fadeOut({})} style={{ marginTop: 10 }}>
                <Text style={{ color: colors.text }}>Fade out</Text>
            </Pressable>

        </CustomView>
    )
}

const styles = StyleSheet.create({
    contaniner: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    purpleBox: {

        width: 150,
        height: 150
    }
})