import { useNavigate } from "react-router-dom";
import AuthLayout from "../../Components/AuthLayout";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // جلوگیری از رفرش شدن صفحه

    // اینجا بعداً می‌تونی API واقعی ارسال کد رو اضافه کنی
    console.log("کد بازیابی ارسال شد ✅");

    // انتقال به صفحه تایید کد
    navigate("/verify-code");
  };

  return (
    <AuthLayout
      title="بازیابی رمز عبور"
      subtitle="ایمیل یا شماره خود را وارد کنید تا لینک بازیابی برای شما ارسال شود"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="ایمیل "
          className="border rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-[#f5ca0cff] text-black rounded-full py-2 hover:bg-[#f3b226ff] transition"
        >
          ارسال کد بازیابی
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
