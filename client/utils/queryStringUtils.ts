import * as History from "history";

type IsOfflineMode = (location: History.Location) => boolean;

export default class QueryStringUtils {
    /**
     * Simple utility function to check whether or not the queryString is equal
     * to "?offline".
     * N.B.: We are not checking for anything else as there are no other uses of
     * the QueryString at the moment.
     * @param location The react-router's History.Location object.
     * @returns True if the offline flag was present in the URL.
     */
    public static isOffineMode: IsOfflineMode = (location: History.Location): boolean => {
        const offlineFlag: string = "?offline";

        return (location.search === offlineFlag) ? true : false;
    }
}
