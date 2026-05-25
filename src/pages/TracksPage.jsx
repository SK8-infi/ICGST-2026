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
                subtitle={`Submit your research across our ${tracks.length} technical tracks covering green and sustainable technologies.`}
            />


            {/* Technical Tracks */}
            <SectionContainer background="white" className="border-b border-gray-100">
                <SectionHeader
                    title="Technical Tracks"
                    subtitle="The conference is organized across multiple technical tracks and parallel sessions"
                    centered={true}
                />
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {tracks.map((track, index) => (
                            <TrackCard key={track.id} track={track} variant="functional" index={index} />
                        ))}
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
                        Paper submissions are open. Last date for submission is June 30, 2026.
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
