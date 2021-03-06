import axios from "axios";
import { successMessage, errorMessage } from "./messages";

export const registration = (data) => async (dispatch) => {
  try {
    await axios.post("");
    dispatch(successMessage(true));
  } catch (err) {
    console.error(err.message);
    dispatch(errorMessage(true));
  }
};
