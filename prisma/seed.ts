import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // Clean existing data
  await prisma.idea.deleteMany();
  await prisma.communityMember.deleteMany();
  await prisma.community.deleteMany();
  await prisma.message.deleteMany();
  await prisma.user.deleteMany();

  console.log("🧹 Cleaned old data");

  // Create User
  const user = await prisma.user.create({
    data: {
      clerkId: "user_test_001",
      name: "Alex Creator",
      email: "alex@creator.com",
      role: "CREATOR",
    },
  });

  console.log(`👤 User created: ${user.id}`);

  // Create Communities
  const communities = await Promise.all([
    prisma.community.create({ data: { name: "Developers", description: "Coders and engineers", icon: "💻", creatorId: user.id } }),
    prisma.community.create({ data: { name: "Designers", description: "UI/UX designers", icon: "🎨", creatorId: user.id } }),
    prisma.community.create({ data: { name: "Investors", description: "VCs and angels", icon: "💰", creatorId: user.id } }),
    prisma.community.create({ data: { name: "Musicians", description: "Music creators", icon: "🎵", creatorId: user.id } }),
    prisma.community.create({ data: { name: "Fitness Enthusiasts", description: "Health lovers", icon: "💪", creatorId: user.id } }),
    prisma.community.create({ data: { name: "Content Creators", description: "YouTubers and streamers", icon: "📹", creatorId: user.id } }),
  ]);

  console.log(`👥 ${communities.length} Communities created`);

  // Create Ideas
  await Promise.all([
    prisma.idea.create({ data: { title: "AI writes a book", content: "Use AI to co-write a book with community members contributing chapters", status: "PROMOTED", aiScore: 92, authorId: user.id, communityId: communities[0].id } }),
    prisma.idea.create({ data: { title: "Art Supply Toolkit", content: "Curated art supply kits for beginners with community discounts", status: "APPROVED", aiScore: 88, authorId: user.id, communityId: communities[1].id } }),
    prisma.idea.create({ data: { title: "30-Day Coding Challenge", content: "Build one project daily for 30 days", status: "APPROVED", aiScore: 85, authorId: user.id, communityId: communities[0].id } }),
    prisma.idea.create({ data: { title: "Cobra Yoga moves", content: "Weekly yoga sessions streamed for the fitness community", status: "PENDING", aiScore: 75, authorId: user.id, communityId: communities[4].id } }),
    prisma.idea.create({ data: { title: "Investor AMA Series", content: "Monthly Ask-Me-Anything sessions with angel investors", status: "PENDING", aiScore: 81, authorId: user.id, communityId: communities[2].id } }),
  ]);

  console.log(`💡 5 Ideas created`);
  console.log("✅ Seed completed successfully!");
}

main()
  .catch((e) => { console.error("❌ Seed failed:", e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });