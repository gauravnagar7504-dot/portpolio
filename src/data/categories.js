import frame3Img from '../assets/images/Frame 3.webp';
import frame1Img from '../assets/images/frame 1.webp';
import aureliaImg from '../assets/images/aurelia_beauty.webp';
import elaraImg from '../assets/images/elara_beauty.webp';
import novaCareImg from '../assets/images/nova_care.webp';
import drAaravImg from '../assets/images/dr_aarav_mehta.webp';
import movehouseImg from '../assets/images/movehouse_fitness.webp';
import forgeImg from '../assets/images/forge_fitness.webp';
import coachingInstituteImg from '../assets/images/coaching_institute.webp';
import weddingPhotoImg from '../assets/images/wedding_photography.webp';

export const categories = [
  {
    id: 'hotels-resorts',
    title: 'Hotels & Luxury Resorts',
    shortTitle: 'Hotels & Resorts',
    label: 'Hospitality & Luxury Stays',
    description: 'Cinematic booking experiences, virtual suite tours, and high-converting reservation engines designed for boutique hotels, luxury resorts, and holiday villas.',
    image: frame3Img,
    aspectRatio: '819/1024',
    featuredDesign: {
      name: 'The Aravali Palace',
      type: 'Luxury Heritage Palace & Resort · Jaipur, Rajasthan',
      overview: 'An authentic royal sanctuary perched in the Aravali ridges featuring traditional Rajputana craftsmanship, private plunge villas, fine dining court, and an interactive floating booking engine.',
      image: frame3Img,
      aspectRatio: '819/1024',
      highlights: [
        'Interactive Floating Luxury Booking Bar',
        'Rooms & Suites Showcase with Nightly Rates',
        'Curated Royal Experiences & Ayurvedic Spa Booking',
        'Jharokha Royale Fine Dining & Wine Cellar Selection',
        'Royal Weddings & Milestones Gallery',
      ],
      liveDemo: '/the-aravali-palace/',
    },
    designs: [
      {
        id: 'aravali-palace',
        title: 'The Aravali Palace',
        subtitle: 'Luxury Heritage Palace & Resort · Jaipur, Rajasthan',
        description: 'Interactive demo design showcasing royal Rajput aesthetics, suite reservation engines, courtyard dining menus, and wedding inquiry workflows.',
        image: frame3Img,
        aspectRatio: '819/1024',
        liveUrl: '/the-aravali-palace/',
        tags: ['Demo Design', 'Heritage Resort', 'Booking Bar', 'Jaipur'],
      },
      {
        id: 'solara-jaipur',
        title: 'Solara Resort',
        subtitle: 'Sanctuary of Space & Light · Kukas Valley, Jaipur',
        description: 'Brutalist modern sanctuary demo featuring open-air infinity pools overlooking the Aravallis, private garden pavilions, and farm-to-table dining.',
        image: frame1Img,
        aspectRatio: '819/1024',
        liveUrl: '/solara-jaipur/',
        tags: ['Demo Design', 'Minimalist Luxury', 'Aman Aesthetic', 'Jaipur'],
      },
    ],
  },
  {
    id: 'salons-beauty',
    title: 'Salons & Beauty Studios',
    shortTitle: 'Salons & Beauty',
    label: 'Aesthetics & Wellness',
    description: 'Glamorous appointment scheduling platforms, treatment menus, and transformation galleries crafted for high-end salons, spas, and aesthetic clinics.',
    image: aureliaImg,
    aspectRatio: '819/1024',
    featuredDesign: {
      name: 'Aurelia Beauty Studio',
      type: 'Luxury Hair, Skin & Bridal Atelier · Jaipur',
      overview: 'An editorial-grade web experience featuring stylized service menus, artisan stylist showcases, bespoke ritual tastings, and online appointment booking.',
      image: aureliaImg,
      aspectRatio: '819/1024',
      highlights: [
        'Bespoke Treatment Tasting Menus & Transparent Pricing',
        'Royal Trousseau & Jaipur Heritage Bridal Consultations',
        'Artisan Hair & Skin Master Stylists Showcase',
        'Interactive Appointment Booking with Calendar & Time Slots',
      ],
      liveDemo: '/aurelia-beauty-studio/',
    },
    designs: [
      {
        id: 'aurelia-beauty-studio',
        title: 'Aurelia Beauty Studio',
        subtitle: 'Luxury Hair, Skin & Bridal Atelier · C-Scheme, Jaipur',
        description: 'Editorial luxury salon and bridal atelier demo featuring treatment menus, master colorist portfolios, bridal inquiry flow, and real-time appointment booking.',
        image: aureliaImg,
        aspectRatio: '819/1024',
        liveUrl: '/aurelia-beauty-studio/',
        tags: ['Demo Design', 'Editorial Aesthetics', 'Beauty Salon', 'Jaipur'],
      },
      {
        id: 'elara-beauty-house',
        title: 'Elara Beauty House',
        subtitle: 'Atelier & Sanctuary · Narain Niwas Palace, Jaipur',
        description: 'Quiet luxury beauty house demo featuring interactive floating ritual previews, Kansa wand skin therapies, 2025 trousseau bridal suite, and private atelier reservations.',
        image: elaraImg,
        aspectRatio: '819/1024',
        liveUrl: '/elara-beauty-house/',
        tags: ['Demo Design', 'Quiet Luxury', 'Bridal Atelier', 'Jaipur'],
      },
    ],
  },
  {
    id: 'dentists-clinics',
    title: 'Dentists & Healthcare Clinics',
    shortTitle: 'Dentists & Clinics',
    label: 'Healthcare & Medical Care',
    description: 'Trust-inspiring digital portals, patient booking systems, and doctor profiles built for dental practices, specialized clinics, and wellness centers.',
    image: novaCareImg,
    aspectRatio: '819/1024',
    featuredDesign: {
      name: 'NOVA Care',
      type: 'Multi-Specialty & Dental Clinic · Flagship Hub',
      overview: 'A clinical patient cockpit featuring interactive symptom triage, multi-specialist doctor matching, sub-millimeter 3D diagnostic previews, and real-time chair booking.',
      image: novaCareImg,
      aspectRatio: '819/1024',
      highlights: [
        'Interactive Symptom & Care Finder Triage Grid',
        'Continuous Care Map & Treatment Spectrum Deep-Dive',
        'Doctor Discovery Roster with Verified Accreditations',
        'Real-Time Operatory Chair Synchronization & WhatsApp Booking',
      ],
      liveDemo: '/nova-care/',
    },
    designs: [
      {
        id: 'nova-care',
        title: 'NOVA Care Clinic',
        subtitle: 'Multi-Specialty & Dental Hub · Indiranagar, Bengaluru',
        description: 'Modern patient-first healthcare experience with interactive care finder, 3D CBCT diagnostic technology showcase, specialist roster, and real-time chair booking.',
        image: novaCareImg,
        aspectRatio: '819/1024',
        liveUrl: '/nova-care/',
        tags: ['Demo Design', 'Multi-Specialty Clinic', 'Dental Care', 'Bengaluru'],
      },
      {
        id: 'dr-aarav-mehta',
        title: 'Dr. Aarav Mehta',
        subtitle: 'Consultant Dentist & Implantologist · The Blue Practice, Kota',
        description: 'Evidence-based private dental consultancy demo featuring 3D CBCT guided implant workflows, smile rehabilitation, and patient consultation booking.',
        image: drAaravImg,
        aspectRatio: '819/1024',
        liveUrl: '/dr-aarav-mehta/',
        tags: ['Demo Design', 'Implantologist', 'The Blue Practice', 'Kota'],
      },
    ],
  },
  {
    id: 'gyms-fitness',
    title: 'Gyms & Fitness Studios',
    shortTitle: 'Gyms & Fitness',
    label: 'Fitness & Performance',
    description: 'High-energy membership conversion platforms, interactive class schedules, and trainer showcases for modern gyms, CrossFit boxes, and boutique fitness studios.',
    image: movehouseImg,
    aspectRatio: '819/1024',
    featuredDesign: {
      name: 'MOVEHOUSE',
      type: 'Boutique Movement Sanctuary & Reformer Studio · Kota',
      overview: 'An architectural sanctuary featuring 50+ weekly curated sessions, custom Allegro reformers, kinetic HIIT intervals, certified coach guides, and transparent monthly memberships.',
      image: movehouseImg,
      aspectRatio: '819/1024',
      highlights: [
        'Interactive Class Modality Filtering & Booking',
        'Dynamic 7-Day Timetable & Morning/Evening Triage',
        'Coach & Biomechanics Specialist Roster',
        'Architectural Sanctuary & Acoustic Shock-Absorbing Amenities',
      ],
      liveDemo: '/movehouse/',
    },
    designs: [
      {
        id: 'movehouse',
        title: 'MOVEHOUSE',
        subtitle: 'Boutique Movement Sanctuary · Civil Lines, Kota',
        description: 'Sun-drenched boutique functional training and reformer Pilates sanctuary demo featuring interactive class filters, live weekly timetable, coach roster, and transparent memberships.',
        image: movehouseImg,
        aspectRatio: '819/1024',
        liveUrl: '/movehouse/',
        tags: ['Demo Design', 'Boutique Fitness', 'Reformer Pilates', 'Kota'],
      },
      {
        id: 'forge-performance',
        title: 'FORGE Performance Club',
        subtitle: 'Athletic Conditioning & Biomechanics · Mumbai & Gurgaon',
        description: 'Monochrome high-performance athletic club demo featuring velocity-based training protocols, force plate diagnostics lab, coach cadre, and DEXA-verified results.',
        image: forgeImg,
        aspectRatio: '819/1024',
        liveUrl: '/forge-fitness/',
        tags: ['Demo Design', 'Athletic Club', 'Biomechanics', 'Performance'],
      },
    ],
  },
  {
    id: 'coaching-institutes',
    title: 'Coaching & Education Institutes',
    shortTitle: 'Coaching & Institutes',
    label: 'Academies & EdTech',
    description: 'High-converting course enrollment funnels, student success stories, and faculty showcases for competitive coaching centers, academies, and tutoring institutes.',
    image: coachingInstituteImg,
    featuredDesign: {
      name: 'Apex Academy',
      type: 'Elite Coaching & Preparation Institute',
      overview: 'A structured, prestige-driven educational platform designed to turn student and parent visitors into course enrollments through clear curriculums and proven results.',
      highlights: ['Course Syllabus & Video Previews', 'Online Enrollment & Fee Payments', 'Faculty & Mentor Showcase', 'Student Results & Topper Spotlights'],
    },
    designs: [],
  },
  {
    id: 'wedding-photographers',
    title: 'Wedding & Event Photographers',
    shortTitle: 'Wedding Photographers',
    label: 'Photography & Cinema',
    description: 'Editorial storytelling websites, immersive full-bleed photo galleries, and bespoke date inquiry workflows for elite wedding photographers and cinematographers.',
    image: weddingPhotoImg,
    featuredDesign: {
      name: 'Eternal Moments Photography',
      type: 'Fine-Art Wedding Photography Studio',
      overview: "An emotional, cinematic portfolio displaying couples' love stories, destination wedding reels, packages guide, and an interactive date availability check.",
      highlights: ['Full-Screen Story Galleries', 'Cinematic Wedding Film Players', 'Date Availability Inquiry Form', 'Investment & Package Guides'],
    },
    designs: [],
  },
];

export const allDesigns = categories.flatMap((category) =>
  (category.designs || []).map((design) => ({
    ...design,
    categoryId: category.id,
    categoryTitle: category.shortTitle || category.title,
  }))
);
