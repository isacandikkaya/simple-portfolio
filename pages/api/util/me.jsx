import axios from "axios";

export default async function Repos(req, res) {
  let linkcord = await axios
    .get("https://linkcord.js.org/api/v3/user/803642468025106472")
    .catch(() => {});
  res.json(linkcord && linkcord.data ? linkcord.data.data || {} : {});
}
