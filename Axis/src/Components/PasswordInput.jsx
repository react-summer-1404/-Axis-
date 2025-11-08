import React, { useState } from "react";
import { Eye } from "lucide-react";

export default function PasswordInput({ placeholder = "رمز عبور", ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        {...props}
        className={`border rounded-full px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${props.className || ""}`}
      />

      <div
        onMouseEnter={() => setShowPassword(true)}
        onMouseLeave={() => setShowPassword(false)}
        className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-blue-600 cursor-pointer"
      >
        <Eye size={20} />
      </div>
    </div>
  );
}
