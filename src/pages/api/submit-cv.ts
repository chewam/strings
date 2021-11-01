import formidable from "formidable";
import type { File } from "formidable";
import { withSentry } from "@sentry/nextjs";
import type { NextApiRequest, NextApiResponse } from "next";

import sendMail from "../../utils/send-mail";

export const config = {
  api: { bodyParser: false },
};

type UploadedFiles = {
  cv: File;
  portfolio?: File;
};

type FormFields = {
  name: string;
  email: string;
};

// const getValue = (param: any) => (Array.isArray(param) ? param[0] : param);

const SubmitCV = (req: NextApiRequest, res: NextApiResponse) => {
  const form = formidable({ multiples: true });
  form.parse(req, async (err, fields, files) => {
    console.log("files", files);
    console.log("fields", fields);
    const { name, email } = fields as FormFields;
    const { cv, portfolio } = files as UploadedFiles;
    await sendMail({ cv, name, email, portfolio });
    res.json({ sucess: true });
  });
};

export default withSentry(SubmitCV);
