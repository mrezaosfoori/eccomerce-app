import axios from "axios";

//import { handleErrorApi } from "../../utils/utils";

export async function getIranCities() {
  try {
    const session = await axios({
      method: 'get',
      url: `https://iran-locations-api.ir/api/v1/fa/cities`,
      withCredentials: false,
    });
    if (!session) return;

    return session.data;
  } catch (error) {
    console.log(error)
    //handleErrorApi(error);
  }
}
