// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import AuthLayout from "../../Components/AuthLayout";

// export default function VerifyCode() {
//   const [code, setCode] = useState("");
//  const [gmail, setGmail] = useState(localStorage.getItem("gmail") || ""); 
//   const [timer, setTimer] = useState(0);
//   const [isResending, setIsResending] = useState(false);
//  const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("https://sepehracademy.liara.run/Sign/VerifyMessage", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           gmail,
//           verifyCode: code,
//         }),
//       });

//       const data = await res.json();
//       console.log("نتیجه تایید:", data);

//       if (res.ok && data.token) {
      
//         localStorage.setItem("token", data.token);
//         alert("کد تأیید شد ");
//         // navigate("/dashboard");  ←  بعداً   
//       } else {
//         alert(data.message || "کد اشتباه است ");
//       }
//     } catch (error) {
//       console.error("خطا:", error);
//       alert("مشکلی در ارتباط با سرور پیش آمد ");
//     }
//   };


//   const handleResend = async () => {
//     if (!gmail) {
//       alert("ایمیل ذخیره نشده  لطفاً دوباره ثبت‌نام کنید");
//       return;
//     }

//     setIsResending(true);
//     setTimer(30);

//     try {
//       const res = await fetch("https://sepehracademy.liara.run/Sign/SendVerifyMessage", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ gmail }),
//       });

//       if (res.ok) {
//         alert("کد جدید ارسال شد ");
//       } else {
//         alert("ارسال مجدد کد انجام نشد ");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("خطا در ارسال مجدد ");
//     }
//   };

//   // تایمر شمارش معکوس
//   useEffect(() => {
//     let interval;
//     if (timer > 0) {
//       interval = setInterval(() => setTimer((t) => t - 1), 1000);
//     } else {
//       setIsResending(false);
//     }
//     return () => clearInterval(interval);
//   }, [timer]);

//   return (
//     <AuthLayout title="تأیید کد">
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="text"
//           placeholder="کد ارسال‌شده را وارد کنید"
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//           className="border rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center tracking-widest"
//         />

//         <button
//           type="submit"
//           className="bg-[#f5ca0cff] text-black rounded-full py-2 hover:bg-[#f3b226ff] transition"
//         >
//           تأیید کد
//         </button>
//       </form>

//       <div className="mt-4 text-center text-sm text-gray-600">
//         {!isResending ? (
//           <button onClick={handleResend} className="text-blue-600 hover:underline">
//             ارسال مجدد کد
//           </button>
//         ) : (
//           <span className="text-gray-400">ارسال مجدد در {timer} ثانیه</span>
//         )}
//       </div>
//     </AuthLayout>
//   );
// }
