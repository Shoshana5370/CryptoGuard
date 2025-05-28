interface ViewToggleProps {
    view: 'table' | 'grid' | 'compact';
    onViewChange: (view: 'table' | 'grid' | 'compact') => void;
}
declare const ViewToggle: ({ view, onViewChange }: ViewToggleProps) => import("react/jsx-runtime").JSX.Element;
export default ViewToggle;
