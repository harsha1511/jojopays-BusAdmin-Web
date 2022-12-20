import axios from "./axios"
import constants from "./constants"


interface ApiProps {
  state: any;
  method?: string;
  url: string;
}

export const fetchData = async (
  {state, method, url}:ApiProps
) => {
  const response = await axios.get(url);
  state(response.data)
  console.log("seperate API",response);
}