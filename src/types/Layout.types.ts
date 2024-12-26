export interface DashLayout {
    isCollapsed: boolean,
    ToggleCollapse: () => void,
    children: React.ReactNode;
}

export interface MenuLayout {
    isCollapsed: boolean,
    ToggleCollapse: () => void
}