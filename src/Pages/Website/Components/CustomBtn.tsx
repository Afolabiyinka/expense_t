import { motion } from "framer-motion";
import * as LucideIcon from "lucide-react";
import { Link } from "react-router-dom";

interface ButtonProps {
  text?: string;
  startIcon?: keyof typeof LucideIcon;
  endIcon?: keyof typeof LucideIcon;
  isSolid?: boolean;
  linkpath?: any;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  disabled?: boolean;
}

const CustomBtn = ({
  text,
  startIcon,
  endIcon,
  isSolid,
  linkpath,
  type,
  disabled,
  onClick,
}: ButtonProps) => {
  const Icon = (
    startIcon ? LucideIcon[startIcon] : endIcon ? LucideIcon[endIcon] : null
  ) as React.ComponentType<any> | null;

  const baseClasses = `
    relative overflow-hidden
    w-full rounded-full
    px-8 py-2.5 cursor-pointer
    text-base sm:text-lg font-medium
    flex items-center justify-center gap-2.5
    transition-all duration-300 ease-out
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-m-accent/50
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantClasses = isSolid
    ? "bg-m-accent text-white shadow-lg hover:shadow-2xl"
    : "border-2 border-m-accent text-m-accent bg-white hover:bg-m-accent/5";

  const content = (
    <>
      {startIcon && Icon && (
        <Icon
          className={`
             h-8 w-8 rounded-full p-1 border transition-transform duration-300
            group-hover:-translate-x-0.5
            ${isSolid ? "text-white" : "text-m-accent"}
          `}
        />
      )}
      {text && <span className="relative z-10">{text}</span>}
      {endIcon && Icon && (
        <Icon
          className={`
            h-8 w-8 rounded-full p-1 border transition-transform duration-300
            group-hover:translate-x-0.5
            ${isSolid ? "text-white" : "text-m-accent"}
          `}
        />
      )}
      {/* Shine effect for solid variant */}
      {isSolid && (
        <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-700" />
        </span>
      )}
    </>
  );

  const button = (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`group ${baseClasses} ${variantClasses}`}
    >
      {content}
    </motion.button>
  );

  return linkpath ? (
    <Link to={linkpath} className="block w-full">
      {button}
    </Link>
  ) : (
    button
  );
};

export default CustomBtn;
