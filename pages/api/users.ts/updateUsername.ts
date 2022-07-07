import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase";

let create_user = async (
  _req: NextApiRequest,
  _res: NextApiResponse
): Promise<void> => {
  if (_req.method == "PATCH") {
    let { data, error } = await supabase
      .from("Users")
      .update({
        username: _req?.body?.id!,
      })
      .match({
        id: _req.body?.id!,
      });
    _res.status(200).send("Created");
  } else {
    _res.status(405).send("Forbidden!");
  }
};

export default create_user;
