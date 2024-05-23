import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  css?: string;
};

const MyInput = ({
  name,
  type = "text",
  placeholder,
  label = "",
  required,
  css,
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-control my-2">
          {label && (
            <label className="label">
              <p className="label-text">{label}</p>
            </label>
          )}
          <input
            {...field}
            type={type}
            className={`input input-bordered ${css ? css : ""}`}
            placeholder={placeholder}
            required={required}
          />
        </div>
      )}
    />
  );
};

export default MyInput;
