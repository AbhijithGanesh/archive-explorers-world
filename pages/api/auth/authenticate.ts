import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase";

let authenticate = async (
  _req: NextApiRequest,
  _res: NextApiResponse
): Promise<void> => {
  if (_req.method == "POST") {
    await supabase.auth.signIn({
      email: _req?.body?.email!,
      password: _req?.body?.password!,
    });
    _res.status(200).send("Created");
  } else {
    _res.status(405).send("Forbidden!");
  }
};

export default authenticate;
