import * as React from 'react';
/**
 * Timestamped rows for audit trails and recent activity.
 */
export interface ActivityListProps {
  items: Array<{ time: React.ReactNode; text: React.ReactNode; meta?: React.ReactNode }>;
  timeWidth?: number;
  style?: React.CSSProperties;
}
export declare function ActivityList(props: ActivityListProps): React.ReactElement | null;
