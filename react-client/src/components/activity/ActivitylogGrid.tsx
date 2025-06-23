import { Log } from "@/types/Log";
import ActivityLogItem from "./ActivtyLogItem";


interface ActivityLogGridProps {
  logs: Log[];
}

const ActivityLogGrid = ({ logs }: ActivityLogGridProps) => {
  return (
    <div className="space-y-4">
      {logs.map((log, index) => (
        <ActivityLogItem key={log.id} log={log} index={index} />
      ))}
    </div>
  );
};

export default ActivityLogGrid;
