import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import ShivamImage from './assets/Shivam.jpg';
import CloudImage from './assets/CloudImage.png';
import styles from './styles';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleOutput = () => {
    if (input.trim() === ''){
      setInput('');
      return;
    }
    try{
      const output = eval(input);
      setInput(output.toString());
    }catch (error) {
      setInput('Error');
    }
  }

  return (
    <ScrollView
    style={styles.wrapper}
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    >
      {/* <View style={styles.headingWrapper}>
        <Text style={styles.heading}>Calculator by Shivam</Text>
      </View> */}
      <TextInput style={styles.input} value={input} />

      <View style={styles.btnWrapper}>
        <TouchableOpacity style={styles.btn} onPress={() => setInput(input+"7")}>
          <Text style={styles.btnText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => setInput(input+"8")}>
          <Text style={styles.btnText}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => setInput(input+"9")}>
          <Text style={styles.btnText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => setInput(input+"+")}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnWrapper}>
        <TouchableOpacity style={styles.btn} onPress={() => setInput(input+"4")}>
          <Text style={styles.btnText}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => setInput(input+"5")}>
          <Text style={styles.btnText}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => setInput(input+"6")}>
          <Text style={styles.btnText}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => setInput(input+"-")}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnWrapper}>
        <TouchableOpacity style={styles.btn} onPress={() => setInput(input+"1")}>
          <Text style={styles.btnText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => setInput(input+"2")}>
          <Text style={styles.btnText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => setInput(input+"3")}>
          <Text style={styles.btnText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => setInput(input+"*")}>
          <Text style={styles.btnText}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnWrapper}>
        <TouchableOpacity style={styles.clearBtn} onPress={() => setInput("")}>
          <Text style={styles.btnText}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => setInput(input+"0")}>
          <Text style={styles.btnText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => setInput(input+".")}>
          <Text style={styles.btnText}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => setInput(input+"/")}>
          <Text style={styles.btnText}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.equalBtnWrapper}>
        <TouchableOpacity onPress={handleOutput} style={styles.equalBtn}>
          <Text style={styles.btnText}>=</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageWrapper}>
        <Image source={ShivamImage} style={styles.image} />
        <View style={styles.cloudImageContainer}>
          <Image source={CloudImage} style={styles.cloudImage} />
          <Text style={styles.overlayText}>
          Calculate{'\n'}
          your way with{'\n'}
          <Text style={styles.company}>MyThing.ai</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Calculator;
