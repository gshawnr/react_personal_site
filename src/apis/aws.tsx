import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { Credentials } from "aws-sdk";

const credentials = new Credentials({
  accessKeyId: process.env.REACT_APP_AWS_ID as string,
  secretAccessKey: process.env.REACT_APP_AWS_ACCESS_KEY as string,
});

const client = new SESClient({
  credentials,
  region: process.env.REACT_APP_REGION,
});

const emailTo = process.env.REACT_APP_EMAILTO as string;
const emailFrom = process.env.REACT_APP_EMAILFROM as string;

export const sendMessage = async (message: string, name: string) => {
  try {
    const params = {
      Destination: {
        ToAddresses: [emailTo],
      },
      Message: {
        Body: {
          Text: {
            Data: `\nNew Contact: ${name} \nMessage: ${message}`,
          },
        },
        Subject: {
          Data: "GSRDEV Contact",
        },
      },
      Source: emailFrom,
    };

    const command = new SendEmailCommand(params);

    return await client.send(command);
  } catch (err) {
    console.log("error sending email message", err);
  }
};
