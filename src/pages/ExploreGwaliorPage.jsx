import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import HeroSection from '../components/home/HeroSection';

const attractions = [
    {
        name: 'Gwalior Fort',
        tagline: 'The Pearl Amongst Fortresses',
        description: 'One of India\'s most imposing hill forts, Gwalior Fort sits atop a rocky massif rising 100 meters above the city. Its massive walls enclose palaces, temples, and water tanks. The Man Mandir Palace, adorned with vibrant ceramic tiles, and the ancient Chaturbhuj Temple — home to the second oldest recorded use of the number zero — are among its highlights.',
        highlight: 'Must-visit • UNESCO Tentative List',
        image: 'https://www.indiaholidaymall.com/images/blog/Gwalior-Fort.jpg',
    },
    {
        name: 'Jai Vilas Palace & Scindia Museum',
        tagline: 'Royal Grandeur & Living History',
        description: 'This magnificent 19th-century palace, still partially occupied by the Scindia royal family, blends Italian, Tuscan, and Corinthian architecture. The Scindia Museum within houses the world\'s largest pair of chandeliers, a silver toy train that served after-dinner drinks, and an extensive collection of royal artefacts.',
        highlight: 'Entry fee applies • Photography restricted in museum',
        image: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/06/Jai-Vilas-Palace_600.jpg',
    },
    {
        name: 'Teli Ka Mandir',
        tagline: 'Architectural Marvel of the 9th Century',
        description: 'Standing at 30 meters, Teli Ka Mandir is the tallest structure within Gwalior Fort. This unique temple blends Dravidian and Indo-Aryan architectural styles, with a rectangular sanctum and an ornate roof that resembles South Indian temples. Its intricate carvings of flying couples, river goddesses, and serpentine motifs are remarkable.',
        highlight: 'Inside Gwalior Fort • Free entry with fort ticket',
        image: 'https://hblimg.mmtcdn.com/content/hubble/img/gwalior/mmt/activities/t_trp/m_activities_gwalior_teli_ka_mandir_l_391_588.jpg',
    },
    {
        name: 'Tomb of Tansen',
        tagline: 'Tribute to a Musical Legend',
        description: 'The memorial of Miyan Tansen, one of the greatest musicians in Indian history and one of the "Nine Gems" of Emperor Akbar\'s court. The tomb is set in a serene garden surrounded by tamarind trees. The annual Tansen Music Festival, held every November-December, attracts classical musicians from across India.',
        highlight: 'Cultural landmark • Near Ghaus Mohammad\'s Tomb',
        image: 'https://www.trawell.in/admin/images/upload/169220756Gwalior_Mohammed_Ghaus_Tomb_Main.jpg',
    },
    {
        name: 'Sun Temple (Surya Mandir)',
        tagline: 'Modern Marvel Inspired by Konark',
        description: 'Built in the late 20th century, this striking temple is inspired by the iconic Konark Sun Temple of Odisha. Dedicated to the Sun God, it stands on a lotus-shaped base surrounded by smaller chariots. The red sandstone structure and intricate carvings make it a popular spot for both devotees and architecture enthusiasts.',
        highlight: 'Open daily • Sunrise visits recommended',
        image: 'https://www.trawell.in/admin/images/upload/169220550Gwalior_Sun_Temple_Main.jpg',
    },
    {
        name: 'Gujari Mahal — Archaeological Museum',
        tagline: 'Treasures from the Heart of India',
        description: 'Originally built by Raja Man Singh Tomar for his Gujar queen Mrignayani, this 15th-century palace now serves as the State Archaeological Museum. Its collection includes rare sculptures, inscriptions, and the famous Shalabhanjika — a graceful tree nymph sculpture that is one of the finest examples of Indian sculptural art.',
        highlight: 'At the base of Gwalior Fort • Entry fee applies',
        image: 'https://www.madhyapradeshdmc.com/images/gujari-mahal-01.webp',
    },
];

export default function ExploreGwaliorPage() {
    return (
        <>
            <HeroSection
                title="Explore Gwalior"
                subtitle="Discover the rich heritage and culture of the City of Music"
            />

            <SectionContainer background="white">
                <div className="max-w-5xl mx-auto space-y-12">
                    {/* Intro */}
                    <div className="prose prose-lg max-w-none text-slate-600 text-center">
                        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                            Gwalior, known as the <strong className="text-blue-700">City of Music</strong> and one of the most historic cities in central India, offers conference attendees a chance to explore centuries of royal heritage, stunning architecture, and vibrant culture — all within easy reach of the ABV-IIITM campus.
                        </p>
                    </div>

                    {/* Attractions Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {attractions.map((attraction, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                            >
                                {/* Attraction Image */}
                                <div className="h-52 overflow-hidden">
                                    <img
                                        src={attraction.image}
                                        alt={attraction.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-3">
                                    <div>
                                        <h3 className="text-xl font-black text-slate-900 mb-1">{attraction.name}</h3>
                                        <p className="text-blue-600 text-sm font-semibold italic">{attraction.tagline}</p>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed">{attraction.description}</p>
                                    <div className="pt-2">
                                        <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-blue-700">
                                            {attraction.highlight}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Travel Tip */}
                    <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 text-center">
                        <h3 className="text-xl font-bold text-blue-900 mb-2">🗺️ Plan Your Visit</h3>
                        <p className="text-slate-700 max-w-2xl mx-auto leading-relaxed">
                            Most of Gwalior's major attractions are within <strong>5–10 km</strong> of ABV-IIITM campus and can be conveniently
                            visited in a <strong>half-day excursion</strong>. Auto-rickshaws, cabs, and guided tour packages are easily available
                            from the city centre.
                        </p>
                    </div>
                </div>
            </SectionContainer>
        </>
    );
}
