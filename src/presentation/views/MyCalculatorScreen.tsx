

import { Text, View } from 'react-native'
import { colors, styles } from '../../config/appTheme'
import { CalculatorButton } from '../components/CalculatorButton'

export const MyCalculatorScreen = () => {
  return (
    <View style={ styles.container}>
        <View style={styles.containerResult}>
          <Text style={styles.result}
          adjustsFontSizeToFit
          numberOfLines={1}
          >5000</Text>
        </View>

        <View style= {styles.row}>
          <CalculatorButton actionButton={ () => console.log("C")} label="C" blackText color = {colors.ligthGray } />
          <CalculatorButton actionButton={ () => console.log("+/-")} label="+/-" blackText color = {colors.ligthGray } />
          <CalculatorButton actionButton={ () => console.log("del")} label="del"  blackText color = {colors.ligthGray } />
          <CalculatorButton actionButton={ () => console.log("÷")} label="÷" color = {colors.orange}/>
        </View>
        <View style= {styles.row}>
          <CalculatorButton actionButton={ () => console.log("7")} label="7" />
          <CalculatorButton actionButton={ () => console.log("8")} label="8" />
          <CalculatorButton actionButton={ () => console.log("9")} label="9" />
          <CalculatorButton actionButton={ () => console.log("x")} label="x" color = {colors.orange}/>
        </View>
        <View style= {styles.row}>
          <CalculatorButton actionButton={ () => console.log("4")} label="4" />
          <CalculatorButton actionButton={ () => console.log("5")} label="5" />
          <CalculatorButton actionButton={ () => console.log("6")} label="6" />
          <CalculatorButton actionButton={ () => console.log("-")} label="-" color = {colors.orange}/>
        </View>
        <View style= {styles.row}>
          <CalculatorButton actionButton={ () => console.log("1")} label="1" />
          <CalculatorButton actionButton={ () => console.log("2")} label="2" />
          <CalculatorButton actionButton={ () => console.log("3")} label="3" />
          <CalculatorButton actionButton={ () => console.log("+")} label="+" color = {colors.orange}/>
        </View>
        <View style= {styles.row}>
          <CalculatorButton actionButton={ () => console.log("0")} label="0" doubleSize />
          <CalculatorButton actionButton={ () => console.log(".")} label="." />
          <CalculatorButton actionButton={ () => console.log("=")} label="=" color = {colors.orange} />
        </View>
    </View>
  )
}
