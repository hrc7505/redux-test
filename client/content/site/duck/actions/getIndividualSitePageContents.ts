import GET__INDIVIDUAL_SITE_PAGE_CONTENTS from "../action-types/GET_INDIVIDUAL_SITE_PAGE_CONTENTS";
import IGetIndividualSitePageContentsAction from "./interfaces/IGetIndividualSitePageContentsAction";

export default function getIndividualSitePageContents(): IGetIndividualSitePageContentsAction {
    return {
        type: GET__INDIVIDUAL_SITE_PAGE_CONTENTS
    };
}
