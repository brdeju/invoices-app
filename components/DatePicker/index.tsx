import React, { useState, CSSProperties } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform, Pressable, TextInput } from "react-native";
import { DatePickerProps } from "../../types";

const DatePicker = ({
  styles,
  handleBlur,
  handleChange,
  value,
  field,
}: DatePickerProps) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState();

  const openDatepicker = () => {
    setShowDatePicker(true);
  };

  const onDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <>
      {Platform.OS === "web" ? (
        <input
          style={styles as CSSProperties}
          type="date"
          onChange={(e) => handleChange(field)(e.target.value)}
          onBlur={handleBlur(field)}
          value={value}
        />
      ) : (
        <Pressable onPress={openDatepicker}>
          <TextInput
            style={styles}
            editable={false}
            onBlur={handleBlur(field)}
            value={value}
          />
        </Pressable>
      )}

      {Platform.OS !== "web" && showDatePicker && (
        <DateTimePicker
          value={date ? new Date(date) : new Date()}
          mode="date"
          is24Hour={true}
          onChange={onDateChange}
        />
      )}
    </>
  );
};

export default DatePicker;
