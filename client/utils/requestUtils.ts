import IResponse from "../models/response/IResponse";

type MakeGetRequest = <R>(url: string) => Promise<R>;

export default class RequestUtils {

    private static serverRequestOK: number = 200;

    /**
     * Wrapper function for making a Get request to the specified URL. The caller must specify the result type R.
     * @param url The Get request URL.
     * @returns A Promise for the result type R.
     */
    public static makeGetRequest: MakeGetRequest = async <R>(url: string): Promise<R> => {
        const response: Response = await fetch(url);
        if (response.status === RequestUtils.serverRequestOK) {
            const jsonReponse: IResponse<R> = await response.json();

            return jsonReponse.result;
        } else {
            // We are returning null if the response's status is not an OK.
            // In the future, if we decide that we want result = null to be an acceptable
            // response, then we should instead throw an exception for the caller to catch
            // react accordingly.
            return null;
        }
    }
}
