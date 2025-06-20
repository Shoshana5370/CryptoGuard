
import * as React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputAdornment from "@mui/material/InputAdornment";

export type CalendarProps = {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  className?: string;
  minDate?: Date;
  maxDate?: Date;
  startAdornment?: React.ReactNode;
};

export function Calendar({
  selected,
  onChange,
  className,
  minDate,
  maxDate,
  startAdornment,
}: CalendarProps): React.JSX.Element {
  return (
    <div className={className}>
      <DatePicker
        value={selected}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        slotProps={{
          textField: {
            fullWidth: true,
            size: "small",
            variant: "outlined",
            InputProps: {
              startAdornment: startAdornment ? (
                <InputAdornment position="start">
                  {startAdornment}
                </InputAdornment>
              ) : undefined,
            },
            inputProps: {
              className: "text-sm py-1", 
            },
          },
        }}
      />
    </div>
  );
}
export default Calendar;