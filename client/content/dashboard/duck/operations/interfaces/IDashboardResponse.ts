import IDashboardResponseResult from "./IDashboardResponseResult";
import IResponse from "../../../../../models/response/IResponse";

export default interface IDashboardResponse extends IResponse {
    result: IDashboardResponseResult;
}
