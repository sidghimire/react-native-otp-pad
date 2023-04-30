import { View, TextInput, StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";

const OtpPad= ({
  inputStyle,
  length = 4,
  caretShown = false,
  boxWidth = 60,
  boxHeight = 60,
  activeColor = "blue",
  inActiveColor = "gray",
  activeFill = "white",
  inActiveFill = "white",
  fontSize = 24,
  borderRadius = 10,
  borderWidth = 1,
  onComplete=()=>{},
}) => {
  const inputRef = useRef([]);
  const [value, setValue] = useState(Array(length).fill(""));
  const [isMounted, setIsMounted] = useState(false);
  const [place, setPlace] = useState(0);
  const [len, setLen] = useState([]);
  useEffect(() => {
    setIsMounted(!isMounted);
    MakeArray();
  }, [length, boxWidth]);
  const MakeArray = () => {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(i);
    }
    setLen(arr);
  };

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, [isMounted]);
  const styles = StyleSheet.create({
    activeButton: {
      borderWidth: borderWidth,
      borderColor: activeColor,
      borderRadius: borderRadius,
      width: boxWidth,
      height: boxHeight,
      textAlign: "center",
      color: "#5E5E5E",
      alignSelf: "center",
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: fontSize,
      backgroundColor: activeFill,
    },
    inactiveButton: {
      borderWidth: borderWidth,
      borderColor: inActiveColor,
      borderRadius: borderRadius,
      width: boxWidth,
      height: boxHeight,
      textAlign: "center",
      color: "#5E5E5E",
      alignSelf: "center",
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: fontSize,
      backgroundColor: inActiveFill,
    },
  });

  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {len.map((index) => (
        <View style={{ flex: 1 }} key={index}>
          <TextInput
            ref={(ref) => {
              if (ref) {
                inputRef.current[index] = ref ;
              }
            }}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === "Backspace") {
                if (index - 1 >= 0 && inputRef.current[index - 1]) {
                  inputRef.current[index - 1].focus();
                  setPlace(index - 1);
                  const newValueArray = [...value];
                  newValueArray[index] = "";
                  setValue(newValueArray);
                }
              } else if (parseInt(nativeEvent.key, 10)) {
                let txt = nativeEvent.key;
                if (txt != "" && index + 1 <= length) {
                  inputRef.current[index]?.setNativeProps({ text: txt });
                  const newValueArray = [...value];
                  newValueArray[index] = txt;
                  setValue(newValueArray);
                  if (!newValueArray.includes("")) {
                    onComplete()
                  }
                  if (inputRef.current[index + 1]) {
                    inputRef.current[index + 1].focus();
                    setPlace(index + 1);
                  }
                }
              }
            }}
            keyboardType="numeric"
            maxLength={1}
            autoFocus={true}
            caretHidden={caretShown ? false : true}
            onPressIn={(e) => {
              inputRef.current[index].focus();
              setPlace(index);
            }}
            style={
              inputRef.current[index]
                ? inputRef.current[index].isFocused()
                  ? styles.activeButton
                  : styles.inactiveButton
                : styles.inactiveButton
            }
          />
        </View>
      ))}
    </View>
  );
};

export default OtpPad;
