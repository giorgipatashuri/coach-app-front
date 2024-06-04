import cn from "clsx";
import { forwardRef } from "react";
import { IField } from "./field.interface";

const Field = forwardRef<HTMLInputElement, IField>(
  (
    {
      placeholder,
      text,
      error,
      type = "text",
      className,
      style,
      Icon,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={cn("mb-4", className)} style={style}>
        <label>
          <span className="block text-sm font-medium text-gray-700">
            {Icon && <Icon className="mr-3" />}
            {text}
          </span>
          <input
            ref={ref}
            placeholder={placeholder}
            className={cn(
              "px-4 py-2 w-full outline-none transition-all border border-gray border-solid focus:border-primary placeholder:font-gray rounded-lg",
              {
                "border-red": !!error,
              }
            )}
            type={type}
            {...rest}
          />
        </label>
        {error && (
          <div style={{ color: "red" }} className="m-2 text-sm">
            {error}
          </div>
        )}
      </div>
    );
  }
);

Field.displayName = "Field";

export default Field;
