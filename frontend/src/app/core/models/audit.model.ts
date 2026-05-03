export interface AuditLogEntry {
  id: number;
  userId: number;
  userName: string;
  action: string;
  entityType: string;
  entityId: number;
  entityName: string;
  description: string;
  ipAddress: string;
  performedAt: string;
}
