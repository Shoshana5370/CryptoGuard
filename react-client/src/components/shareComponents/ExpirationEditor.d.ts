type ExpirationEditorProps = {
    currentDate: string;
    onSave: (newDate: Date) => void;
    onCancel: () => void;
};
declare const ExpirationEditor: ({ currentDate, onSave, onCancel, }: ExpirationEditorProps) => import("react/jsx-runtime").JSX.Element;
export default ExpirationEditor;
