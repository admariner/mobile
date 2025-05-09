//react + navigation
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { AppRegistry, I18nManager } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { enableFreeze } from 'react-native-screens'

//polyfills
import 'react-native-url-polyfill/auto'

//redux
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { withLocalReducer } from 'data'
import localReducers from 'local/reducers'

//styles
import Appearance from 'modules/appearance'
import Translate from 'modules/translate/component'

enableFreeze()

//disable RTL
I18nManager.allowRTL(false)

//common bootstrap logic
const flexOne = {flex:1}
function Bootstrap(Component) {
    //init redux (do not destructure object, for some reason fails in ios production build)
    const storage = withLocalReducer(localReducers)

    //do not use <StrictMode> here, otherwise whole app re-renders twice O_o
    return ()=>(
        <Provider store={storage.store}>
            <PersistGate persistor={storage.persistor}>
                <Translate>
                    <Appearance>
                        <SafeAreaView style={flexOne}>
                            <GestureHandlerRootView style={flexOne}>
                                <Component />
                            </GestureHandlerRootView>
                        </SafeAreaView>
                    </Appearance>
                </Translate>
            </PersistGate>
        </Provider>
    )
}

//register targets
AppRegistry.registerComponent('app', () => 
    Bootstrap(require('./app').default)
)

AppRegistry.registerComponent('extension', () => 
    Bootstrap(require('./extension').default)
)