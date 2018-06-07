import GET_SITE_PAGE_CONTENTS from "../action-types/GET_SITE_PAGE_CONTENTS";
import IGetSitePageContentsAction from "./interfaces/iGetSitePageContentsAction";

export default function getSitePageContents(): IGetSitePageContentsAction {
    return {
        type: GET_SITE_PAGE_CONTENTS
    };
}
