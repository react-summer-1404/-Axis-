import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../Components/AuthLayout";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // توکن ثابت
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50cyI6W3sicGhvbmUiOiIwOTExNDE3MTMwNiIsImlkIjoxMzAsImlzVXNlIjp0cnVlfV0sImlhdCI6MTc2MjU0MzA0NywiZXhwIjoxNzYyNTc5MDQ3fQ.MsjPGiBK4t0EcawuAqs3r2GUoalejOTil9coB5ggKE4";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // ذخیره توکن در LocalStorage
      localStorage.setItem("token", token);
      alert("توکن ذخیره شد!");
    } else {
      alert("لطفا ایمیل و رمز را وارد کنید!");
    }
  };

  return (
    <AuthLayout
      title="ورود به حساب"
      subtitle="برای دسترسی به حساب خود وارد شوید"
    >
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ایمیل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-[#f5ca0cff] text-black rounded-full py-2 hover:bg-[#f3b226ff] transition"
        >
          ورود
        </button>
      </form>

      <div className="mt-4 text-center text-sm text-gray-600">
        <Link to="/forgot-password" className="text-blue-600 hover:underline">
          فراموشی رمز عبور
        </Link>
        <br />
        حساب کاربری ندارید؟{" "}
        <Link to="/register" className="text-blue-600 hover:underline">
          ثبت‌نام کنید
        </Link>
      </div>
    </AuthLayout>
  );
}
