import type { JSX } from "react";

interface ButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    text?: string;
    icon?: JSX.Element;
}

const Button: React.FC<ButtonProps> = ({ onClick, icon, text }) => {
    return (
        <button
            title={"own-button"}
            type={"button"}
            onClick={onClick}
            className={
                "bg-gradient-to-r from-[#006AFF] to-[#00DBFF] gap-3 flex items-center " +
                "px-8 py-2 text-lg text-white border-2 border-white cursor-pointer rounded-xl shadow-sm " +
                "transition-colors duration-200 hover:border-[#0040AA]"
            }
        >
            {icon}
            {text}
        </button>
    )
}

export default Button;