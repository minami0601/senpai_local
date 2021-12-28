import axios from "axios";

const backendURL = process.env.VUE_APP_BACKEND_URL;

// おすすめメンター一覧取得
export const getMentorRecommendAll = () => {
  const response = axios.get(`${backendURL}/api/public/mentor_recommend`);
  return response;
};
