import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../utils/supabase";

let delete_contrib = async (
  _req: NextApiRequest,
  _res: NextApiResponse
): Promise<void> => {
  if (_req.method == "DELETE") {
    await supabase.from("Contributions").delete().match({ id: _req?.body.id });
    _res.status(200).send("Deleted");
  } else {
    _res.status(405).send("Forbidden!");
  }
};

export default delete_contrib;
