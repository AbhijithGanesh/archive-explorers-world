import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase";

let get_badge = async (
  _req: NextApiRequest,
  _res: NextApiResponse
): Promise<void> => {
  if (_req.method == "PUT") {
    let { data, error } = await supabase
      .from("BadgeLog")
      .select("Badges")
      .match({
        username: _req.body?.username!,
      });
    _res.status(200).send({ message: data, error: error });
  } else {
    _res.status(405).send("Forbidden!");
  }
};

export default get_badge;
