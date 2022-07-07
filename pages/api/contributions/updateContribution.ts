import { PostgrestResponse } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase";

let update_contributions = async (
  _req: NextApiRequest,
  _res: NextApiResponse
): Promise<void> => {
  if (_req.method == "POST") {
    let data: PostgrestResponse<any> = await supabase
      .from("Contributions")
      .update({
        title: _req?.body?.title!,
        description: _req?.body?.description,
        date_of_contribution: _req?.body?.date_of_contribution!,
        links: _req?.body?.links,
        last_updated: new Date(),
      })
      .match({
        id: _req?.body?.id!,
      });
    _res.status(200).send(data.data);
  } else {
    _res.status(405).send("Forbidden!");
  }
};

export default update_contributions;
