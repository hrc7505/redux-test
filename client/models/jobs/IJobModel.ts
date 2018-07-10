import IBaseModel from "models/base/IBaseModel";

export default interface IJobModel extends IBaseModel {
    // Basic information for a job.
    number: string;
    siteId: string;
    status: string;

    // Job metrics.
    progress: number;
    numberOfUnitsInProgress: number;
    numberOfUnitsCompleted: number;
    numberOfPipingInProgress: number;
    numberOfPipingCompleted: number;
    numberOfFiles: number;
}
