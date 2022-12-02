import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async (
  ctx: Context,
  req: HttpRequest
): Promise<void> => {
  ctx.res = {
    body: "hello word",
  };
};

export default httpTrigger;
