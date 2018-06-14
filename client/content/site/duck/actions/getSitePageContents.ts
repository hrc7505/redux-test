import GET_SITES_PAGE_CONTENTS from "../action-types/GET_SITES_PAGE_CONTENTS";
import IGetSitesPageContentsAction from "./interfaces/IGetSitesPageContentsAction";

export default function getSitePageContents(): IGetSitesPageContentsAction {
    return {
        type: GET_SITES_PAGE_CONTENTS
    };
}
