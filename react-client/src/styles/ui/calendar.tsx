
import * as React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export type CalendarProps = {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  className?: string;
  minDate?: Date;
  maxDate?: Date;
};

export function Calendar({
  selected,
  onChange,
  className,
  minDate,
  maxDate,
}: CalendarProps): React.JSX.Element {
  return (
    <div className={className}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
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
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
