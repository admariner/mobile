import { HeaderStyleInterpolators } from '@react-navigation/stack'

export const Fade = {
    cardOverlayEnabled: false,
    cardShadowEnabled: false,
    cardStyleInterpolator: ({ current: { progress } }) => ({
        cardStyle: {
            opacity: progress,
        }
    }),
    headerStyleInterpolator: HeaderStyleInterpolators.forFade
}