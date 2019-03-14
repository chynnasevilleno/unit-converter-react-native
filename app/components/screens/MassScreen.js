import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import MenuButton from "../components/MenuButton";
import { Dropdown } from 'react-native-material-dropdown';


// Variables
let gramToKilogram = 1000; // gram / 1000 = kg & kg * 1000 = grams
let gramToPound = 453.592; // gram / 453.592 = lbs & lbs * 453.592 = gram
let gramToOunce = 28.35; // gram /  28.35 = ounces & ounces *  28.35 = grams
let ounceToPound = 16; // ounce / 16 = lbs & lbs * 16 = ounce
let ounceToKilogram = 35.274; // ounce / 35.274 = kg & kg * 35.274 = ounces
let kilogramToPound = 2.205; // kg * 2.205 = lbs & lbs / 2.205 = kg

//Dropdown array
let massData = [{
  value: 'Gram',
}, {
  value: 'Kilogram',
}, {
  value: 'Ounce',
}, {
  value: 'Pound',
}];

export default class MassScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        fromMassUnitText: "",
        toMassUnitText: "1",
        fromMassUnitDropdown: "",
        toMassUnitDropdown: "",
    }
}

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Text styles={styles.headerText}>Unit Conversion: Mass </Text>
            <MenuButton navigation={this.props.navigation} />
          </View>

          {/* Conversion View */}
          <View style={styles.fromUnitContainer}>
            <View style={styles.content}>
              <Dropdown
                  label=''
                  data={massData}
                  rippleCentered={true}
                  itemPadding={10}
                  onChangeText={(value) => this.setState({fromMassUnitDropdown:value})}
              />
            </View>
            <View style={styles.content}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                clearTextOnFocus={true}
                placeholder="Enter value to convert from"
                value={this.state.fromMassUnitText}
                onChangeText={(unitValue) => this.setState({fromMassUnitText:unitValue})}
              />
            </View>
          </View>
          <View style={styles.toUnitContainer}>
            <View style={styles.content}>
              <Dropdown
                  label=''
                  data={massData}
                  rippleCentered={true}
                  itemPadding={10}
                  onChangeText={(value) => this.setState({toMassUnitDropdown:value})}
              />
            </View>
            <View style={styles.content}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                placeholder="Conversion output"
                value={this.state.toMassUnitText}
              />
            </View>
          </View>

          {/* Buttons */}
          <View style={styles.buttonsContainer}>
            <View style={styles.convertButton}>
              <TouchableOpacity
                onPress={() => this.onCovertButtonClicked()}
                >
                <View>
                  <Text>Convert</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.resetButton}>
              <TouchableOpacity
                onPress={() => this.clear()}
                >
                <View>
                  <Text>Reset</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    );
  }

  onCovertButtonClicked(){
    alert("Successfully Converted"); // debugging

    fromMassUnit = this.state.fromMassUnitDropdown;
    fromMassUnitValue = this.state.fromMassUnitText;
    toMassUnit = this.state.toMassUnitDropdown;

    if(fromMassUnit=='Gram' && toMassUnit=='Kilogram'){
      //1 - gram / 1000 = kg & kg * 1000 = grams
      convertedValue = parseFloat(fromMassUnitValue) / parseFloat(gramToKilogram);
      convertedValue = convertedValue.toString();
    }
    else if(fromMassUnit=='Kilogram' && toMassUnit=='Gram'){
      //2 - gram / 1000 = kg & kg * 1000 = grams
      convertedValue = parseFloat(fromMassUnitValue) * parseFloat(gramToKilogram);
      convertedValue = convertedValue.toString();
    }
    else if(fromMassUnit=='Gram' && toMassUnit=='Pound'){
      //3 -gram / 453.592 = lbs & lbs * 453.592 = gram
      convertedValue = parseFloat(fromMassUnitValue) / parseFloat(gramToPound);
      convertedValue = convertedValue.toString();
    }
    else if(fromMassUnit=='Pound' && toMassUnit=='Gram'){
      //4 - gram / 453.592 = lbs & lbs * 453.592 = gram
      convertedValue = parseFloat(fromMassUnitValue) * parseFloat(gramToPound);
      convertedValue = convertedValue.toString();
    }
    else if(fromMassUnit=='Gram' && toMassUnit=='Ounce'){
      //5 - gram /  28.35 = ounces & ounces *  28.35 = grams
      convertedValue = parseFloat(fromMassUnitValue) / parseFloat(gramToOunce);
      convertedValue = convertedValue.toString();
    }
    else if(fromMassUnit=='Ounce' && toMassUnit=='Gram'){
      //6 - gram /  28.35 = ounces & ounces *  28.35 = grams
      convertedValue = parseFloat(fromMassUnitValue) * parseFloat(gramToOunce);
      convertedValue = convertedValue.toString();
    }
    else if(fromMassUnit=='Ounce' && toMassUnit=='Pound'){
      //7 - ounce / 16 = lbs & lbs * 16 = ounce
      convertedValue = parseFloat(fromMassUnitValue) / parseFloat(ounceToPound);
      convertedValue = convertedValue.toString();
    }
    else if(fromMassUnit=='Pound' && toMassUnit=='Ounce'){
      //8 - gram /  28.35 = ounces & ounces *  28.35 = grams
      convertedValue = parseFloat(fromMassUnitValue) * parseFloat(ounceToPound);
      convertedValue = convertedValue.toString();
    }
    else if(fromMassUnit=='Ounce' && toMassUnit=='Kilogram'){
      //9 - ounce / 35.274 = kg & kg * 35.274 = ounces
      convertedValue = parseFloat(fromMassUnitValue) / parseFloat(ounceToKilogram);
      convertedValue = convertedValue.toString();
    }
    else if(fromMassUnit=='Kilogram' && toMassUnit=='Ounce'){
      //10 - ounce / 35.274 = kg & kg * 35.274 = ounces
      convertedValue = parseFloat(fromMassUnitValue) * parseFloat(ounceToKilogram);
      convertedValue = convertedValue.toString();
    }
    else if(fromMassUnit=='Pound' && toMassUnit=='Kilogram'){
      //11 - kg * 2.205 = lbs & lbs / 2.205 = kg
      convertedValue = parseFloat(fromMassUnitValue) / parseFloat(kilogramToPound);
      convertedValue = convertedValue.toString();
    }
    else if(fromMassUnit=='Kilogram' && toMassUnit=='Pound'){
      //12 - kg * 2.205 = lbs & lbs / 2.205 = kg
      convertedValue = parseFloat(fromMassUnitValue) * parseFloat(kilogramToPound);
      convertedValue = convertedValue.toString();
    }
    else{
      convertedValue = fromMassUnitValue;
    }

    this.setState({toMassUnitText: convertedValue});
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  zIndex:{
    zIndex: 100,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    textTransform: 'capitalize',
    color: '#2F364D',
    fontWeight: 'bold',
    zIndex: 1,
  },
  headerText:{
    fontSize: 20,
    textTransform: 'capitalize',
    color: '#2F364D',
    fontWeight: 'bold',
    zIndex: 1,
  },
  fromUnitContainer: {
    flex: 3,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 40,
    zIndex: 1,
  },
  textInput:{
    backgroundColor: '#F4F5F7',
    borderRadius: 4,
    height: 50,
    padding: 5,
    zIndex: 1,
  },
  toUnitContainer: {
    flex: 3,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  buttonsContainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  content: {
    alignSelf: 'stretch',
  },
});
