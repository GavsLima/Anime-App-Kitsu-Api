import React from "react";
import { CenteredView, InputTextSearch, } from "./styles";
import { IInputProps } from "../../types";

const InputSearch: React.FC<IInputProps> = ({ value, onChange }) => {
  const handleChange = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <CenteredView>
      <InputTextSearch
        value={value}
        onChangeText={onChange}
      />
    </CenteredView>
  );
};

export default InputSearch;
