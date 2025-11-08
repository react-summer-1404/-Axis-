import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../Components/AuthLayout";
import { sendVerifyMessage } from "../../Api/Auth/register.js";
import PasswordInput from "../../Components/PasswordInput";


export default function Register() {
  const [email, setEmail] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const [message, setMessage] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); 
    if (!email) {
      setMessage("لطفاً ایمیل خود را وارد کنید.");
      return;
    }

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("ایمیل وارد شده معتبر نیست.");
      return;
    }

    try {
      setLoading(true);
      const response = await sendVerifyMessage({ gmail: email });
      console.log("پاسخ سرور:", response.data);
      setMessage("کد تأیید به ایمیل شما ارسال شد ");
    } catch (error) {
      console.error("خطا در ارسال کد:", error);
      if (error.response && error.response.data) {
        setMessage(`خطای سرور: ${error.response.data.message || "مشکل داخلی سرور"}`);
      } else {
        setMessage("خطا در اتصال به سرور. دوباره تلاش کنید.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="ثبت نام"
      subtitle="برای شروع یادگیری، حساب جدید بسازید"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="ایمیل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className={`bg-[#f5ca0cff] text-black rounded-full py-2 hover:bg-[#f3b226ff] transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "در حال ارسال..." : "دریافت کد"}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm text-red-600">{message}</p>
      )}

      <div className="mt-4 text-center text-sm text-gray-600">
        حساب دارید؟{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          وارد شوید
        </Link>
      </div>
    </AuthLayout>
  );
}
