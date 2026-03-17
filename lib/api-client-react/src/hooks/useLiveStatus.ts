import { useEffect, useState } from 'react';
import type { ServiceState } from '../types.js';

export function useLiveStatus(apiBaseUrl: string) {
  const [state, setState] = useState<ServiceState | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let canceled = false;

    async function refresh() {
      try {
        const response = await fetch(`${apiBaseUrl}/status`);
        const payload: ServiceState = await response.json();
        if (!canceled) {
          setState(payload);
          setError(null);
        }
      } catch (err) {
        if (!canceled) {
          setError((err as Error)?.message ?? 'unknown error');
        }
      }
    }

    refresh();
    const timer = window.setInterval(refresh, 15000);

    return () => {
      canceled = true;
      window.clearInterval(timer);
    };
  }, [apiBaseUrl]);

  return { state, error };
}
