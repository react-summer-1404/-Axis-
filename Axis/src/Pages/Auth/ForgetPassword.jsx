import { useNavigate } from "react-router-dom";
import AuthLayout from "../../Components/AuthLayout";
import PasswordInput from "../../Components/PasswordInput";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("رمز جدید ثبت شد");
    navigate("/login");
  };

  return (
    <AuthLayout
      title="تغییر رمز عبور"
      subtitle="رمز جدید خود را وارد کنید"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <PasswordInput placeholder="رمز عبور جدید" />

        
        <PasswordInput placeholder="تکرار رمز عبور" />

        <button
          type="submit"
          className="bg-[#f5ca0cff] text-black rounded-full py-2 hover:bg-[#f3b226ff] transition"
        >
          ثبت رمز جدید
        </button>
      </form>

      <div className="mt-4 text-center text-sm text-gray-600">
        بازگشت به{" "}
        <a href="/login" className="text-blue-600 hover:underline">
          ورود
        </a>
      </div>
    </AuthLayout>
  );
}
