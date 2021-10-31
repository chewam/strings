import * as fs from "fs/promises";
import Mailjet from "node-mailjet";
import type { File } from "formidable";

const SendMail = async ({
  cv,
  name,
  email,
  portfolio,
}: {
  cv: File;
  name: string;
  email: string;
  portfolio?: File;
}) => {
  const mailjet = Mailjet.connect(
    process.env.MAILJET_APIKEY_PUBLIC || "",
    process.env.MAILJET_APIKEY_PRIVATE || ""
  ).post("send", { version: "v3.1" });

  const Subject = "CV submission";

  const TextPart = `
    New application from ${name}
    Candidate email: ${email}
  `;

  const HTMLPart = `
    <p>New application from ${name}.</p>
    <p>
      Candidate email: <a href=mailto:${email}>${email}</a>
    </p>
    <p>
      CV and portfolio have eventually been attached to this email,
      don't forget to check them out!
    </p>
  `;

  const From = {
    Email: "goldledoigt@chewam.com",
    Name: "Pull The Strings",
  };

  const To = [
    {
      Email: "goldledoigt@chewam.com",
      Name: "Strings Team",
    },
  ];

  const Attachments = [
    {
      ContentType: cv.type,
      Filename: cv.name,
      Base64Content: await fs.readFile(cv.path, { encoding: "base64" }),
    },
  ];

  if (portfolio) {
    Attachments.push({
      ContentType: portfolio.type,
      Filename: portfolio.name,
      Base64Content: await fs.readFile(portfolio.path, { encoding: "base64" }),
    });
  }

  const request = mailjet.request({
    Messages: [
      {
        From,
        To,
        Subject,
        TextPart,
        HTMLPart,
        Attachments,
      },
    ],
  });

  request
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err.statusCode);
    });
};

export default SendMail;
