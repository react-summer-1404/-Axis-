import { Link } from "react-router-dom";
import AuthLayout from "../../Components/AuthLayout";

export default function ResetPassword() {
  return (
    <AuthLayout title="تغییر رمز عبور">
      <form className="flex flex-col gap-4">
        <input
          type="password"
          placeholder="رمز عبور جدید"
          className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="تکرار رمز عبور جدید"
          className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition"
        >
          ثبت رمز جدید
        </button>
      </form>
      <div className="mt-4 text-center text-sm text-gray-600">
        بازگشت به{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          ورود
        </Link>
      </div>
    </AuthLayout>
  );
}