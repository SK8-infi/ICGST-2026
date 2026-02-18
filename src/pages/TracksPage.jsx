import { tracks } from '../data/tracksData';
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
                title="Call for Papers"
                subtitle="Submit your research across our 9 technical tracks covering green and sustainable technologies."
            />

            {/* Technical Tracks */}
            <SectionContainer background="white" className="border-b border-gray-100">
                <SectionHeader
                    title="Technical Tracks"
                    subtitle="The conference is organized across multiple technical tracks and parallel sessions"
                    centered={true}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto px-4">
                    {tracks.map((track, index) => (
                        <TrackCard key={track.id} track={track} variant="functional" index={index} />
                    ))}
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
                        <Button to={ROUTES.IMPORTANT_DATES} variant="outline" size="lg">
                            View Deadlines
                        </Button>
                    </div>
                </div>
            </SectionContainer>
        </>
    );
}
