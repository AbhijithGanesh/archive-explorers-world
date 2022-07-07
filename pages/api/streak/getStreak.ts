import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase";

let get_streak = async (
  _req: NextApiRequest,
  _res: NextApiResponse
): Promise<void> => {
  if (_req.method == "POST") {
    let data = await supabase.from("Users").select("streak").match({
      username: _req?.body.username,
    });
    _res.status(200).send(data.data);
  } else {
    _res.status(405).send("Forbidden!");
  }
};

export default get_streak;
