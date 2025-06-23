export interface Log {
  id: number;
  userId: number;
  action: string;
  targetId?: string;
  targetType?: string;
  timestamp: string;
  description?: string;
}