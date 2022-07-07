import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase";

let create_user = async (
  _req: NextApiRequest,
  _res: NextApiResponse
): Promise<void> => {
  if (_req.method == "POST") {
    await supabase.from("Users").insert({
      userid: _req?.body?.userid!,
      created_at: new Date(),
      username: _req?.body?.username,
      streak: 0,
      points_scored: 0,
      level: 1,
      profile_created: true,
    });
    _res.status(200).send("Created");
  } else {
    _res.status(405).send("Forbidden!");
  }
};

export default create_user;
