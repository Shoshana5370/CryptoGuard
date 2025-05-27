import * as React from "react";
export type CalendarProps = {
    selected: Date | null;
    onChange: (date: Date | null) => void;
    className?: string;
    minDate?: Date;
    maxDate?: Date;
    startAdornment?: React.ReactNode;
};
export declare function Calendar({ selected, onChange, className, minDate, maxDate, startAdornment, }: CalendarProps): React.JSX.Element;
export default Calendar;
