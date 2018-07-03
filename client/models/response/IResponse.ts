/**
 * Base response structure from Azure APIs.
 */
export default interface IResponse<R> {
    error: string;
    statusCode: string;
    result: R;
}
