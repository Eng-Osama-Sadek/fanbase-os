DELETE FROM "CommunityMember";
DELETE FROM "User" WHERE role = 'FAN';

INSERT INTO "User" (id, "clerkId", username, name, email, role, "createdAt")
SELECT gen_random_uuid()::text, 'fan_' || gen_random_uuid()::text, 'fan-' || gs, 'Fan Member ' || gs, 'fan' || gs || '@fanbase.local', 'FAN', NOW() - (random() * INTERVAL '60 days')
FROM generate_series(1, 50) AS gs;

INSERT INTO "CommunityMember" (id, "userId", "communityId", "joinedAt")
SELECT gen_random_uuid()::text, u.id, c.id, NOW() - (random() * INTERVAL '30 days')
FROM "Community" c
CROSS JOIN "User" u
WHERE c."creatorId" = (SELECT id FROM "User" WHERE username = 'alex-creator')
AND u.role = 'FAN';

SELECT c.name AS community, COUNT(cm.id) AS members_count
FROM "Community" c
LEFT JOIN "CommunityMember" cm ON cm."communityId" = c.id
GROUP BY c.name
ORDER BY members_count DESC;