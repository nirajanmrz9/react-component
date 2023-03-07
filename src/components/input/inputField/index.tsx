import { useState ,ReactElement} from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import style from "../input.module.scss";
interface InputProps {
  label: string;
  type: string;
  name: string;
  error?: string | null;
  placeholder?: string;
  rightIcon?:string | ReactElement;
  onChange?:()=> void;
}

const InputField = (props: InputProps) => {
  const {label,type,name,error,placeholder,rightIcon,onChange}=props;
  const [showPassword, setShowPassword] = useState(false);

  const iconChange = () => {
    setShowPassword((showPassword) => !showPassword);
  };
  return (
    <div className="text-left text-xs  mb-6 w-full relative">
      <label
        htmlFor={name}
        className={`pr-2 text-sm md:text-base ${error && "text-red-500"}`}
      >
        {label}
      </label>
      <input
        name={name}
        // type={
        //   passwordIcon && type === "password"
        //     ? "password"
        //     : type === "email"
        //     ? "email"
        //     :"text" ||  type 
        // }
        onChange={onChange}
        type={type !== "password" ? type : showPassword ? "text" : "password"}

        placeholder={placeholder}
        className={`rounded-lg px-2 mt-2 w-full py-1 h-10 text-sm md:text-base ${
          error && "border-2 border-red-500"
        }`}
      />

      <br />
      {type === "password" ? (
        showPassword ? (
          <FaEyeSlash onClick={iconChange} className={style.iconEye} />
        ) : (
      
          <FaRegEye onClick={iconChange} className={style.iconEye} />
        )
      ) : (
        ""
      )}
      <div>
      { rightIcon && rightIcon
      }
      </div>

      {error ? (
        <span className="text-red-500 text-xs">{error}</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputField;
