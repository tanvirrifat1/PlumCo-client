import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

type DatePickerProps = {
  selectedDate: Date;
  onChange: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  className?: string | undefined;
};

const DatePickerField = ({
  selectedDate,
  onChange,
  minDate,
  maxDate,
  className,
}: DatePickerProps) => {
  return (
    <div>
      <ReactDatePicker
        className={className}
        selected={selectedDate}
        onChange={onChange}
        dateFormat="PP"
        minDate={minDate || new Date()}
        maxDate={maxDate || addDays(new Date(), 30)}
      />
    </div>
  );
};

export default DatePickerField;
