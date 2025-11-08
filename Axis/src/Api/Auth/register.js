import axios from "axios";

export const sendVerifyMessage = async (gmail) => {
  try {
    const res = await axios.post(
      "https://sepehracademy.liara.run/Sign/SendVerifyMessage",
      { gmail },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50cyI6W3sicGhvbmUiOiIwOTExNDE3MTMwNiIsImlkIjoxMzAsImlzVXNlIjp0cnVlfV0sImlhdCI6MTc2MjU0MzA0NywiZXhwIjoxNzYyNTc5MDQ3fQ.MsjPGiBK4t0EcawuAqs3r2GUoalejOTil9coB5ggKE4",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("خطا در ارسال کد:", error.response?.data || error.message);
    throw error;
  }
};
