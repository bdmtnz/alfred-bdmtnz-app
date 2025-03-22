import Clean from "./components/Clean";

interface InputProps {
    htmlForLabel: string;
    placeholder?: string;
    label: string;
    defaultErrorLabel: string;
    isRequired: boolean;
    type: string;
    name: string;
    helpText?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    error?: string;
    touched?: boolean;
    reset?: () => void;
}

const HasErrorStyle = "ml-4 text-xs mt-1 text-[#d44729] text-bold";
const NoErrorStyle = "block text-right mr-4 text-xs text-[#878787] text-bold";

const Input: React.FC<InputProps> = ({
    htmlForLabel,
    placeholder = '',
    label,
    isRequired = false,
    type,
    name,
    helpText = '',
    value,
    onChange,
    disabled,
    error,
    touched,
    reset,
  }) => {
    return (
      <div className="pb-1">
        <label
          htmlFor={htmlForLabel}
          className="ml-4 text-xs mt-2 text-[#878787] text-bold">
          {label} {isRequired ? '*' : null}
        </label>
        <div className="relative">
          <input
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
            className={`border-2 rounded-[24px] py-3 px-4 w-full bg-[var(--foreground)] text-[var(--text-primary)] ${error && touched ? "border-[#d44729]" : "border-[var(--primary)]"}`}
          />
          <div className="absolute right-3 top-1">
            {reset && (
              <Clean onClick={reset} color={error && touched ? "#d44729" : ""} />
            )}
          </div>
        </div>
        <div
          className={error && touched ? HasErrorStyle : NoErrorStyle}>
          {error && touched ? error : `${helpText}`}
        </div>
      </div>
    );
  };

export default Input;