import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { BoxObjectModel } from './src/presentation/views/BoxObjectModel';
import { Position } from './src/presentation/views/Position';
import { FlexBox } from './src/presentation/views/FlexBox';
import { FlexDirection } from './src/presentation/views/FlexDirection';
import { FlexExcercises } from './src/presentation/views/FlexExercises';
import { MyCalculatorScreen } from './src/presentation/views/MyCalculatorScreen';
import { styles } from './src/config/appTheme';


function App(): React.JSX.Element {

  return (
    <View style={ styles.background}>
      {/* <HelloWorld /> */}
      {/* <CounterApp /> */}
      {/* <BoxObjectModel /> */}
      {/* <Position /> */}
      {/* <FlexBox /> */}
      {/* <FlexDirection /> */}
      {/* <FlexExcercises /> */}
      <MyCalculatorScreen />
    </View>
  );
}

export default App;
