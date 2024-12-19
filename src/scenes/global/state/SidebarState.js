// sidebarState.js
let isCollapsed = false;

export const getIsCollapsed = () => isCollapsed;

export const setIsCollapsed = (value) => {
    isCollapsed = value;
};
