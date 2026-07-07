import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Dashboard | Asia Placements",
  description: "Manage contact forms, job applications, and download resumes.",
  robots: { index: false, follow: false },
}

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24 pb-12 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0F172A]">Admin Dashboard</h1>
          <p className="text-[#6B7280] mt-1">Manage your recruitment operations</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "New Applications", value: "—", color: "from-[#2563EB] to-[#1D4ED8]" },
            { label: "New Enquiries", value: "—", color: "from-[#14B8A6] to-[#0D9488]" },
            { label: "Pending Reviews", value: "—", color: "from-[#F59E0B] to-[#D97706]" },
            { label: "Total Placements", value: "—", color: "from-[#10B981] to-[#059669]" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl border border-[#E5E7EB] p-6 shadow-sm"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                <span className="text-white font-bold text-lg">—</span>
              </div>
              <div className="text-2xl font-bold text-[#0F172A]">{stat.value}</div>
              <div className="text-sm text-[#6B7280]">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">
          <div className="p-6 border-b border-[#E5E7EB]">
            <h2 className="text-lg font-bold text-[#0F172A]">Recent Submissions</h2>
            <p className="text-sm text-[#6B7280]">
              Connect Supabase to see your data here.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F8FAFC]">
                  {["Name", "Type", "Email", "Phone", "Date", "Status"].map((h) => (
                    <th key={h} className="text-left px-6 py-3 font-semibold text-[#6B7280]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-[#6B7280]">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#9CA3AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                      </div>
                      <p className="font-medium">No data yet</p>
                      <p className="text-xs">Submissions will appear here once Supabase is connected.</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
