import { jsx as _jsx } from "react/jsx-runtime";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import InputAdornment from "@mui/material/InputAdornment";
export function Calendar({ selected, onChange, className, minDate, maxDate, startAdornment, }) {
    return (_jsx("div", { className: className, children: _jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: _jsx(DatePicker, { value: selected, onChange: onChange, minDate: minDate, maxDate: maxDate, slotProps: {
                    textField: {
                        fullWidth: true,
                        size: "small",
                        variant: "outlined",
                        InputProps: {
                            startAdornment: startAdornment ? (_jsx(InputAdornment, { position: "start", children: startAdornment })) : undefined,
                        },
                    },
                } }) }) }));
}
