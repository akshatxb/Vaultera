export interface DashLayout {
    isCollapsed: boolean,
    ToggleCollapse: () => void,
    children: React.ReactNode;
}