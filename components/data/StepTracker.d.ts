import * as React from 'react';
/**
 * Approval-route tracker: 30px state dots joined by 3px bars.
 */
export interface StepTrackerProps {
  steps: Array<{ label: React.ReactNode; state: 'done' | 'active' | 'error' | 'pending' }>;
  vertical?: boolean;
  style?: React.CSSProperties;
}
export declare function StepTracker(props: StepTrackerProps): React.ReactElement | null;
