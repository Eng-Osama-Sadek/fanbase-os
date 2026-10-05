import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, TrendingUp, Building2 } from "lucide-react";

export const dynamic = "force-dynamic";

const opportunitiesData: Record<string, any> = {
  "brand-partnership-techcorp": {
    title: "Brand Partnership with TechCorp",
    type: "SPONSORSHIP",
    value: "$15,000",
    community: "Content Creators",
    deadline: "Oct 20",
    match: 95,
    description: "TechCorp wants to sponsor a 3-part video series showcasing their new AI tools. They will handle product shipping and provide creative freedom.",
    requirements: [
      "Minimum 50K followers",
      "Experience with tech content",
      "Willingness to sign NDA",
      "Delivery within 4 weeks",
    ],
  },
  "podcast-guest": {
    title: "Podcast Guest Appearance",
    type: "COLLAB",
    value: "Exposure",
    community: "Content Creators",
    deadline: "Oct 25",
    match: 88,
    description: "Popular creator podcast (200K listeners) is looking for a guest to discuss community building and creator economy.",
    requirements: [
      "Available for 1-hour recording",
      "Comfortable with live Q&A",
      "Prepared talking points",
    ],
  },
  "seed-investment": {
    title: "Seed Investment Offer",
    type: "INVESTMENT",
    value: "$250,000",
    community: "Investors",
    deadline: "Nov 1",
    match: 92,
    description: "Early-stage VC fund is interested in investing $250K in your creator platform at a $2.5M valuation.",
    requirements: [
      "Detailed pitch deck",
      "Financial projections (3 years)",
      "Legal due diligence",
    ],
  },
  "book-publishing": {
    title: "Book Publishing Deal",
    type: "PARTNERSHIP",
    value: "$40,000",
    community: "Content Creators",
    deadline: "Nov 15",
    match: 85,
    description: "Major publishing house wants to publish a book based on your community-building framework. Advance payment included.",
    requirements: [
      "Full manuscript outline",
      "Sample chapter",
      "Committed to 6-month timeline",
    ],
  },
  "music-festival": {
    title: "Music Festival Headliner",
    type: "EVENT",
    value: "$8,000",
    community: "Musicians",
    deadline: "Oct 30",
    match: 78,
    description: "Regional music festival wants you to headline the closing night. Full production support included.",
    requirements: ["2-hour set ready", "Own equipment", "Available for rehearsals"],
  },
};

const typeConfig: Record<string, { color: string }> = {
  SPONSORSHIP: { color: "bg-green-900 text-green-300" },
  COLLAB: { color: "bg-blue-900 text-blue-300" },
  INVESTMENT: { color: "bg-purple-900 text-purple-300" },
  PARTNERSHIP: { color: "bg-yellow-900 text-yellow-300" },
  EVENT: { color: "bg-pink-900 text-pink-300" },
};

export default async function OpportunityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const opp = opportunitiesData[id];

  if (!opp) notFound();

  const config = typeConfig[opp.type] || typeConfig.SPONSORSHIP;

  return (
    <div className="space-y-8">
      <Link
        href="/dashboard/opportunities"
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={16} /> Back to Opportunities
      </Link>

      <div>
        <div className="flex items-center gap-3 mb-3">
          <h1 className="text-3xl font-bold text-white">{opp.title}</h1>
          <span className={`px-3 py-1 text-xs rounded-full ${config.color}`}>
            {opp.type}
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="text-purple-400">{opp.community}</span>
          <span className="flex items-center gap-1">
            <Calendar size={14} /> Deadline: {opp.deadline}
          </span>
          <span className="flex items-center gap-1 text-green-400">
            <TrendingUp size={14} /> AI Match: {opp.match}%
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
            <h2 className="text-lg font-semibold text-white mb-3">About this Opportunity</h2>
            <p className="text-gray-400 leading-relaxed">{opp.description}</p>
          </div>

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
            <h2 className="text-lg font-semibold text-white mb-4">Requirements</h2>
            <ul className="space-y-2">
              {opp.requirements.map((req: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-gray-400">
                  <span className="text-purple-400 mt-1">•</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-6 bg-gradient-to-br from-purple-900/30 to-gray-900 border border-purple-500/30 rounded-xl">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Estimated Value</h3>
            <div className="text-3xl font-bold text-green-400">{opp.value}</div>
          </div>

          <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors text-white flex items-center justify-center gap-2">
            <ExternalLink size={16} /> Apply Now
          </button>

          <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors text-gray-300">
            Save for Later
          </button>
        </div>
      </div>
    </div>
  );
}