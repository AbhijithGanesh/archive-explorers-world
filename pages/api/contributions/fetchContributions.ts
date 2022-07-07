import { PostgrestResponse } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase";

let fetch_contributors = async (
  _req: NextApiRequest,
  _res: NextApiResponse
): Promise<void> => {
  if (_req.method == "POST") {
    let data: PostgrestResponse<any> = await supabase
      .from("Contributions")
      .select("Contributions");
    _res.status(200).send(data.data);
  } else {
    _res.status(405).send("Forbidden!");
  }
};

export default fetch_contributors;