import { MergeTag } from '../models/consent.model';

export function groupMergeTagsByCategory(tags: MergeTag[]): Record<string, MergeTag[]> {
  const grouped: Record<string, MergeTag[]> = {};
  for (const t of tags) {
    const cat = t.tagCategory || 'Other';
    if (!grouped[cat]) {
      grouped[cat] = [];
    }
    grouped[cat].push(t);
  }
  return grouped;
}
