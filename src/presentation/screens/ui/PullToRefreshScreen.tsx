import React, { useContext, useState } from 'react'
import { RefreshControl } from 'react-native'
import { Title } from '../../components/ui/Title'
import { CustomView } from '../../components/ui/CustomView'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { globalStyles } from '../../../config/theme/theme'
import { ThemeContext } from '../../context/ThemeContext'

export const PullToRefreshScreen = () => {
    const { colors } = useContext(ThemeContext)
    const [isRefreshing, setIsRefreshing] = useState(false)

    const { top } = useSafeAreaInsets();

    const onRefresh = () => {
        setIsRefreshing(true)
        setTimeout(() => {
            setIsRefreshing(false)
        }, 5000);
    }

    return (
        <CustomView>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        progressViewOffset={top}
                        colors={[colors.primary, 'red', 'orange', 'green']}
                        progressBackgroundColor={colors.cardBackground}
                        tintColor={colors.primary}
                        onRefresh={onRefresh}
                    />
                }
                style={[globalStyles.mainContainer, globalStyles.globalMargin]}
            >

                <Title
                    safe
                    text='Pull To RefreshScreen'
                />
            </ScrollView>
        </CustomView>
    )
}
