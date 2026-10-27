UPDATE consents SET status = 'PUBLISHED', published_at = COALESCE(published_at, reviewed_at, NOW()) WHERE status = 'APPROVED';
