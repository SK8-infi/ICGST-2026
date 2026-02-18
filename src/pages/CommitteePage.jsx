import {
    honoraryGeneralChairs,
    generalChairs,
    conferenceChairs,
    conferenceCoChairs,
    organizingChairs,
} from '../data/committeeData';

import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import HeroSection from '../components/home/HeroSection';

export default function CommitteePage() {
    return (
        <>
            {/* Page Header */}
            <HeroSection
                title="Organizing Committee"
                subtitle="Meet the distinguished organizing committee of ICGST-2026."
            />

            {/* Honorary General Chairs */}
            <SectionContainer background="white">
                <SectionHeader
                    title="Honorary General Chairs"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {honoraryGeneralChairs.map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>
            </SectionContainer>

            {/* General Chairs */}
            <SectionContainer background="light">
                <SectionHeader
                    title="General Chairs"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {generalChairs.map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>
            </SectionContainer>

            {/* Conference Chairs */}
            <SectionContainer background="white">
                <SectionHeader
                    title="Conference Chairs"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {conferenceChairs.map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>
            </SectionContainer>

            {/* Conference Co-Chair */}
            <SectionContainer background="light">
                <SectionHeader
                    title="Conference Co-Chair"
                />
                <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
                    {conferenceCoChairs.map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>
            </SectionContainer>

            {/* Organizing Chairs */}
            <SectionContainer background="white">
                <SectionHeader
                    title="Organizing Chairs"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {organizingChairs.map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>
            </SectionContainer>
        </>
    );
}

function MemberCard({ member }) {
    const initials = member.name === 'TBD'
        ? '?'
        : member.name
            .split(' ')
            .filter(n => !['Dr.', 'Prof.', 'Mr.', 'Ms.', 'Mrs.'].includes(n))
            .map(n => n.charAt(0))
            .join('')
            .slice(0, 2);

    return (
        <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-8 text-center hover:shadow-md transition-shadow h-full flex flex-col items-center justify-center">
            {/* Avatar */}
            <div
                className="w-52 h-52 rounded-2xl mb-6 mx-auto flex items-center justify-center text-4xl font-bold text-white shadow-lg overflow-hidden"
                style={{ backgroundColor: '#003366' }}
            >
                {member.image ? (
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-110"
                    />
                ) : (
                    initials
                )}
            </div>

            {/* Name */}
            <h3 className="text-xl font-bold text-neutral-900 mb-2">{member.name}</h3>

            {/* Designation */}
            <p className="text-sm font-bold text-primary-700 uppercase tracking-wider mb-3">{member.designation}</p>

            {/* Affiliation */}
            <p className="text-base text-neutral-600">{member.affiliation}</p>

            {/* Email */}
            {member.email && (
                <a href={`mailto:${member.email}`} className="text-sm text-primary-600 hover:text-primary-800 mt-3 inline-block font-medium">
                    {member.email}
                </a>
            )}
        </div>
    );
}
