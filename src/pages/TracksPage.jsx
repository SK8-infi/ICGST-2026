import { tracks } from '../data/tracksData';
import { importantDates } from '../data/conferenceData';
import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import TrackCard from '../components/tracks/TrackCard';
import Button from '../components/ui/Button';
import { ROUTES } from '../constants/routes';

import HeroSection from '../components/home/HeroSection';

export default function TracksPage() {
    return (
        <>
            {/* Page Header */}
            <HeroSection
                title="Call for Papers & Important Dates"
                subtitle={`Submit your research across our ${tracks.length} technical tracks covering green and sustainable technologies.`}
            />

            {/* Technical Tracks */}
            <SectionContainer background="white" className="border-b border-gray-100">
                <SectionHeader
                    title="Technical Tracks"
                    subtitle="The conference is organized across multiple technical tracks and parallel sessions"
                    centered={true}
                />
                <div className="flex flex-col gap-6 max-w-5xl mx-auto px-4">
                    {tracks.map((track, index) => (
                        <TrackCard key={track.id} track={track} variant="functional" index={index} />
                    ))}
                </div>
            </SectionContainer>
            
            {/* Dates Table */}
            <SectionContainer background="light">
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
                                    <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider !text-white">
                                        Link
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
                                        <td className="px-6 py-4 text-sm">
                                            {item.link === 'coming_soon' ? (
                                                <span className="inline-flex items-center px-3 py-1 xl:px-4 xl:py-1.5 text-xs font-semibold rounded-full bg-amber-100 text-amber-800 whitespace-nowrap">
                                                    Coming Soon
                                                </span>
                                            ) : item.link ? (
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-bold rounded shadow-sm !text-white bg-[#002855] hover:bg-[#001a3a] focus:outline-none transition-colors whitespace-nowrap">
                                                    Click Here
                                                </a>
                                            ) : (
                                                <span className="text-gray-400 font-medium px-4">-</span>
                                            )}
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

            {/* Submission CTA */}
            <SectionContainer background="primary">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-primary-900 mb-4">
                        Ready to Submit Your Paper?
                    </h2>
                    <p className="text-base sm:text-lg text-primary-700 mb-8 max-w-2xl mx-auto">
                        Paper submissions are open. Last date for submission is 1st May 2026.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button to={ROUTES.REGISTRATION} variant="primary" size="lg">
                            Register & Submit
                        </Button>
                    </div>
                </div>
            </SectionContainer>
        </>
    );
}
