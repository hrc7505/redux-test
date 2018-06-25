import Entity from "../../../breadcrumbHost/entity";

export default interface IBreadcrumbPayload {
    link: string;
    displayTitle: string;
    entity: Entity;
}
