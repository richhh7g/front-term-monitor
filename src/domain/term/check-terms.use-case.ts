import { checkTermsDataSource, CheckTermsResponse } from "@data/term";
import { useLazyRequest, UseLazyRequestParams } from "@infra/http";

export const useCheckTerms = (
  params: UseLazyRequestParams<CheckTermsResponse>
) => {
  return useLazyRequest(checkTermsDataSource, {
    requestKey: "term:check-terms",
    ...params,
  });
};
