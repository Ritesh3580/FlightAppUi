import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';

const DropDownCmp = ({data,labelField, sendData}) => {
    const [value, setValue] = useState(null);
    console.log("Value ---->>>", value);
    const [isFocus, setIsFocus] = useState(false);
    sendData(value);
  return (
    <View>
     <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={[styles.placeholderStyle,{
            
          }]}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField={labelField}
          valueField={labelField}
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item?.origin);
            setIsFocus(false);
          }}
        //   renderLeftIcon={() => (
        //     <AntDesign
        //       style={styles.icon}
        //       color={isFocus ? 'blue' : 'black'}
        //       name="Safety"
        //       size={20}
        //     />
        //   )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        //backgroundColor:'white',
        marginTop:15
      },
      icon: {
        marginRight: 5,
        color:'black'
    
      },
      label: {
        position: 'absolute',
        backgroundColor: 'black',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        color:'black'
      },
      placeholderStyle: {
        fontSize: 16,
        color:'black'
      },
      selectedTextStyle: {
        fontSize: 16,
        color:'black'
      },
      iconStyle: {
        width: 20,
        color:'black'
    ,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color:'black'
      }
})

export default DropDownCmp