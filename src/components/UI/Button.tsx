import { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="py-2.5 px-6 rounded-md bg-primary-base border border-primary-base text-white text-xl font-semibold shadow-lg">
      {children}
    </button>
  );
};

export default Button;
