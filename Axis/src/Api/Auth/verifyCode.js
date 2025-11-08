import api from "./axios";

export const verifyCode = async (phone, code) => {
  const res = await api.post("/Sign/VerifyCode", {
   "gmail": "",
    "verifyCode": "0000"
});
  return res.data;
};
