import { termCheckerHttpClient } from "@data/client";

export type CheckTermsResponse = {
  text: string;
};

export type CheckTermsDataSourceParams = {
  email: string;
  termos: string[];
};

export const checkTermsDataSource = async (
  params: CheckTermsDataSourceParams
): Promise<CheckTermsResponse> => {
  const url = "/check-term";

  return await termCheckerHttpClient<
    CheckTermsDataSourceParams,
    CheckTermsResponse
  >({
    url: url,
    method: "POST",
    data: params,
  });
};
