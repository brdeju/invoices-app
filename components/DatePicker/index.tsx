import React, { useState, CSSProperties } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Platform, Pressable, Text, TextInput } from "react-native";
import { DatePickerProps } from "../../types";
import { dateToString } from "../../helpers/invoice";

const DatePicker = ({
  styles,
  handleBlur,
  handleChange,
  value,
  field,
}: DatePickerProps) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState<Date>(value ? new Date(value) : new Date());

  const openDatepicker = () => {
    setShowDatePicker(true);
  };

  const closeDatepicker = () => {
    setShowDatePicker(false);
  };

  const onDateChange = (selectedDate: Date) => {
    setShowDatePicker(false);
    setDate(selectedDate);
    handleChange(field)(dateToString(selectedDate))
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
          <Text style={styles}>{value}</Text>
        </Pressable>
      )}

      {Platform.OS !== "web" && <DateTimePickerModal
        date={date}
        isVisible={showDatePicker}
        mode="date"
        onConfirm={onDateChange}
        onCancel={closeDatepicker}
      />
      }
    </>
  );
};

export default DatePicker;
