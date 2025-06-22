import { asyncHadler } from "../utils/aysncHandler.js";

const registerUser = asyncHadler(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Ok",
  });
});
