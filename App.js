import {SafeAreaProvider} from 'react-native-safe-area-context';
import Presentacion from './components/presentacion';
import {View} from 'react-native'

export default function App() {
  return(
    <SafeAreaProvider>
        <View>
        <Presentacion/>
        </View>
    </SafeAreaProvider>

  
      )
}
