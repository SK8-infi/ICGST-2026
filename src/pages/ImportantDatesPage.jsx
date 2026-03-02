import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import { importantDates } from '../data/conferenceData';
import HeroSection from '../components/home/HeroSection';

export default function ImportantDatesPage() {
    return (
        <>
            {/* Page Header */}
            <HeroSection
                title="Important Dates"
                subtitle="Mark your calendar with these key deadlines and dates for ICGST-2026."
            />

            {/* Dates Table */}
            <SectionContainer background="white">
                <SectionHeader
                    title="Conference Timeline"
                    subtitle="Plan your submission and participation according to these important milestones"
                />
                <div className="max-w-4xl mx-auto px-4">
                    <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                        <table className="w-full text-left">
                            <thead>
                                <tr style={{ backgroundColor: '#002855' }}>
                                    <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider !text-white">
                                        S.No.
                                    </th>
                                    <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider !text-white">
                                        Activity
                                    </th>
                                    <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider !text-white">
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {importantDates.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={`transition-colors hover:bg-blue-50/50 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                                    >
                                        <td className="px-6 py-4 text-sm font-semibold text-slate-500">
                                            {String(index + 1).padStart(2, '0')}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.isDeadline ? 'bg-red-500' : 'bg-blue-500'}`}></span>
                                                <span className="text-sm font-semibold text-slate-800">
                                                    {item.activity}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-slate-600">
                                            {item.date}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 flex items-center gap-6 justify-center text-xs text-slate-400">
                        <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                            Deadline
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            Notification
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </>
    );
}
