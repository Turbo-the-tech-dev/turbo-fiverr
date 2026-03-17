export interface ServiceState {
  status: 'ok' | 'warn' | 'down';
  message?: string;
  updatedAt: string;
}
