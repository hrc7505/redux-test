enum ButtonType {
    /**
     * Add button which will have a circle and plus as an icon.
     * This button type should always inlcude the content for the right panel because the
     * onClick will open the right panel.
     */
    Add,

    /**
     * Info button which will have a circle with an i as an icon.The button name will be ignored for this button type.
     * This button type should always include the content for the right pane because the
     * onClick will open the right pane.
     */
    Info,

    /**
     * Permissions button specifically used to navigate to the permissions page.
     * This button type should contain the path to the permissions page of the entity because
     * the onClick will cause a page navigation.
     */
    Permissions,
}

export default ButtonType;
