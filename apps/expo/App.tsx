import 'expo-dev-client'
import React from 'react'
import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { useFonts } from 'expo-font'

export default function App() {
  // [FONT] Add your fonts here
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    DMSans: require('./assets/fonts/DM_Sans/DMSans-Medium.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  )
}
