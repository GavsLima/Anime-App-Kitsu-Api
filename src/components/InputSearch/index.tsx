import React from "react";
import { CenteredView, InputTextSearch } from "./styles";
import { IInputProps } from "../../types";
import { Dimensions } from "react-native";

const InputSearch: React.FC<IInputProps> = ({ value, onChange, onSubmmit}) => {
  return (
    <CenteredView style={{ width: Dimensions.get("window").width }}>
      <InputTextSearch
        value={value}
        onChangeText={onChange}
        onSubmitEditing={() => onSubmmit(value)}
      />
    </CenteredView>
  );
};

export default InputSearch;
