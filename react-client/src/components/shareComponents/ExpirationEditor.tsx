import { useState } from "react";
import { Button } from "@/styles/ui/button";

type ExpirationEditorProps = {
    currentDate: string;
    onSave: (newDate: Date) => void;
    onCancel: () => void;
};

const ExpirationEditor = ({
    currentDate,
    onSave,
    onCancel,
}: ExpirationEditorProps) => {
    const [date, setDate] = useState<Date>(new Date(currentDate));

    return (
        <div className="flex items-center gap-2">
            <input
                type="date"
                className="border rounded px-2 py-1 text-sm"
                value={date.toISOString().split("T")[0]}
                onChange={(e) => setDate(new Date(e.target.value))}
            />

            <Button className="bg-emerald-600 hover:bg-emerald-700" size="sm" onClick={() => onSave(date)} >Save</Button>
            <Button size="sm" variant="ghost" onClick={onCancel}> Cancel</Button>
        </div>
    );
}
export default ExpirationEditor;