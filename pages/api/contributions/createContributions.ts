import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase";

let create_contrib = async (
  _req: NextApiRequest,
  _res: NextApiResponse
): Promise<void> => {
  if (_req.method == "POST") {
    await supabase.from("Contributions").insert({
      title: _req?.body?.title!,
      description: _req?.body?.description,
      date_of_contribution: _req?.body?.date_of_contribution!,
      links: _req?.body?.links,
      User: _req?.body?.userid,
      last_updated: new Date(),
    });
    _res.status(200).send("Created");
  } else {
    _res.status(405).send("Forbidden!");
  }
};

export default create_contrib;
