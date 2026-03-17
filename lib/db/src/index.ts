import { AuditRecord } from './schema/record.js';

const store = new Map<string, AuditRecord>();

export function saveRecord(id: string, data: AuditRecord['data']) {
  const record: AuditRecord = {
    id,
    data,
    createdAt: new Date().toISOString()
  };
  store.set(id, record);
  return record;
}

export function getRecord(id: string) {
  return store.get(id) ?? null;
}

export function listRecords() {
  return Array.from(store.values());
}
