"use client";

import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  type?: string;
  name: string;
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  className?: string;
  id: string;
}
const FormInput = ({
  name,
  type,
  value,
  placeholder,
  label,
  className,
  id,
}: IInput) => {
  const { control, reset, formState: errors } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);
  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label ? label : null}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            type={type}
            placeholder={placeholder}
            className={className}
            id={id}
            {...field}
            value={value ? value : field.value}
            required
          />
        )}
      />
      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
};

export default FormInput;
