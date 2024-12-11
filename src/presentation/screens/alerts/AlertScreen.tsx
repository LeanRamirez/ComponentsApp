import React, { useContext } from 'react'
import { Alert, Text, View } from 'react-native'

import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import { Button } from '../../components/ui/Button'
import { showPrompt } from '../../../config/adapters/prompt.adapter'
import { ThemeContext } from '../../context/ThemeContext'

export const AlertScreen = () => {

    const { isDark } = useContext(ThemeContext)

    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },

        ],
            {
                userInterfaceStyle: isDark ? 'dark' : 'light'
            }
        );

    const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ], {
            cancelable: true,
            onDismiss() {
                console.log('onDismiss')
            },
            userInterfaceStyle: isDark ? 'dark' : 'light'
        });

    const onShowPrompt = () => {

        showPrompt({
            title: 'titulo del boton',
            subtitle: 'subtitulo del boton',
            buttons: [
                { text: 'Ok', onPress: () => console.log('Ok') },
                { text: 'cancel', onPress: () => console.log('Cancel') }
            ],
            placehoder: 'placeholder'
        })


        // ! Codigo nativo que no funciona para android
        // Alert.prompt(
        //     'Correo electronico',
        //     'hola este es mi correo electronico',
        //     (valor: string) => console.log(valor),
        //     'secure-text',
        //     'Valor por defecto',
        //     'number-pad'
        // )
    }

    return (
        <CustomView style={globalStyles.globalMargin}>
            <Title safe text='Alertas' />

            <Button
                text='Alerta - 2 botones'
                onPress={createTwoButtonAlert}
            />
            <View style={{ height: 10 }} />

            <Button
                text='Alerta - 3 botones'
                onPress={createThreeButtonAlert}
            />

            <View style={{ height: 10 }} />

            <Button
                text='Prompt - Input'
                onPress={onShowPrompt}
            />
        </CustomView>
    )
}
