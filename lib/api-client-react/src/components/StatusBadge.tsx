import type { FC } from 'react';
import type { ServiceState } from '../types.js';

type Props = {
  state: ServiceState | null;
};

const statusClass = {
  ok: 'status-ok',
  warn: 'status-warn',
  down: 'status-down'
};

export const StatusBadge: FC<Props> = ({ state }) => {
  if (!state) {
    return <span className="status-none">loading …</span>;
  }

  return (
    <span className={statusClass[state.status] ?? 'status-none'}>
      {state.status.toUpperCase()}
    </span>
  );
};
