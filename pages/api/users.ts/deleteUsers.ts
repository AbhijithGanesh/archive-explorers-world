import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase";

let create_user = async (
  _req: NextApiRequest,
  _res: NextApiResponse
): Promise<void> => {
  if (_req.method == "DELETE") {
    await supabase.from("Users").delete().match({
      username: _req?.body?.username!,
    });
    _res.status(200).send("Deleted");
  } else {
    _res.status(405).send("Forbidden!");
  }
};

export default create_user;
