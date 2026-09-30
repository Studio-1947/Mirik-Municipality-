// ============================================================
// Mirik Municipality website: all site content lives here.
// Edit this one file to update the website.
// Items marked `verify: true` (or with a VERIFY comment) came from
// public sources and should be confirmed by the municipality office
// before launch. See README.md for the full checklist.
// Research compiled: 29 September 2026.
// ============================================================

export const meta = {
  nameEn: 'Mirik Municipality',
  nameNe: 'मिरिक नगरपालिका',
  nameBn: 'মিরিক পৌরসভা',
  legalName: 'Mirik Notified Area Authority',
  district: 'Darjeeling',
  state: 'West Bengal',
  tagline: 'Civic body of the lake town of Mirik, Darjeeling hills',
  lastUpdated: '29 September 2026',
};

export const contact = {
  office: 'Mirik Municipality Office',
  address: ['Thana Line, Ward No. III', 'P.O. Mirik, Darjeeling', 'West Bengal 734214'],
  // From the current mirikmunicipality.com site.
  phones: [
    { label: 'Mobile', display: '+91 62953 45636', tel: '+916295345636' },
    // VERIFY: landline as listed on the current site (+91 35422432); looks short for a full number.
    { label: 'Landline', display: '+91 35422432', tel: '+9135422432' },
  ],
  // Current site and 2016 tenders use this address. darjeeling.gov.in lists mirikmunicipality@yahoo.com.
  email: 'mirik_municipality@yahoo.com',
  facebook: 'https://www.facebook.com/municipalitymirik',
  // VERIFY: add the office's real pages. While empty, the footer pill is shown but does not link anywhere.
  instagram: '',
  youtube: '',
  // Set to a form-handling URL (e.g. Formspree, Netlify Forms, or the municipality server)
  // to make the grievance form submit online. Empty = form opens the visitor's email app instead.
  grievanceEndpoint: '',
  // VERIFY office hours with the municipality.
  hours: 'Monday to Friday, 10:00 AM to 5:30 PM (closed on government holidays)',
  mapQuery: 'Mirik Municipality, Thana Line, Mirik, Darjeeling',
};

export const notices = [
  {
    date: '1 September 2026',
    title: 'Strict cleanliness rules now in force, with fines',
    body:
      'New state rules apply in all municipalities and notified areas of West Bengal. See the Clean Mirik section for the fine list.',
  },
  {
    date: '19 May 2026',
    title: 'Board dissolved; SDO Mirik appointed Administrator',
    body:
      'The West Bengal Municipal Affairs Department dissolved the board of the Mirik Notified Area Authority and appointed the Sub-Divisional Officer, Mirik, as Administrator until fresh elections are held.',
  },
  {
    date: '8 June 2026',
    title: 'Two new sewage treatment plants announced',
    body:
      'The state Municipal Affairs minister announced two additional STPs for Mirik alongside the existing facility, and reviewed desiltation and rejuvenation of Sumendu Lake.',
  },
  {
    date: 'Ongoing',
    title: 'AMRUT 2.0 drinking water project',
    body:
      'Works worth more than Rs 170 crore are underway to bring piped drinking water to every household in the municipality area.',
  },
];

export const administration = {
  status: 'Under Administrator',
  statusNote:
    'The elected board’s term ended in April 2022 and no election has been held since. From 19 May 2026 the Sub-Divisional Officer, Mirik, is the Administrator until a new board is elected.',
  administrator: {
    role: 'Administrator',
    // Provided by the office in September 2026 (replaces the earlier June 2026 press report).
    name: 'Krishna Kanta Ghosh, WBCS',
    photo: '/images/people/krishna-kanta-ghosh.jpg',
    photoLarge: '/images/people/krishna-kanta-ghosh-large.jpg',
  },
  officers: [
    // From the current site. VERIFY these are still in post.
    { role: 'Executive Officer', name: 'Ajay Kumar Manna', note: 'Also Nodal Officer, NULM', phone: '+91 94330 99850', tel: '+919433099850' },
    { role: 'Finance Officer', name: 'Dipashree Mitra', note: '', phone: '+91 98311 11379', tel: '+919831111379' },
  ],
  wards: 9,
  assembly: 'Kurseong Assembly Constituency',
  loksabha: 'Darjeeling Lok Sabha Constituency',
  subdivision: 'Mirik Subdivision (declared 30 March 2017)',
  lastElection: 'May 2017',
};

// Ward list. Localities are filled only where a public source names them.
// VERIFY: add the full locality list and councillor names after the next election.
// `pos` is the ward pin on the Mirik Block map, in map units. These are APPROXIMATE placeholders inside Mirik town; replace them with the real ward locations when the office confirms them.
// `short` is the place name printed on the illustrated ward map. Fill in the blanks when the office confirms each ward's localities.
// Optional `demo: { total, male, female, households }` per ward. Not published for any ward yet, so the ward filter shows "Not published".
export const wards: { no: string; localities: string; short?: string; pos?: [number, number]; demo?: { total: number; male: number; female: number; households?: number } }[] = [
  { no: 'I', localities: 'Includes Neiz Gaon area', short: 'Neiz Gaon', pos: [232, 182] },
  { no: 'II', localities: '', pos: [349, 170] },
  { no: 'III', localities: 'Thana Line (Municipality Office)', short: 'Thana Line', pos: [424, 239] },
  { no: 'IV', localities: 'Deosay Dara', short: 'Deosay Dara', pos: [463, 173] },
  { no: 'V', localities: '', pos: [202, 290] },
  { no: 'VI', localities: '', pos: [286, 260] },
  { no: 'VII', localities: '', pos: [361, 275] },
  { no: 'VIII', localities: '', pos: [238, 362] },
  { no: 'IX', localities: '', pos: [319, 362] },
];

export const facts = [
  { label: 'Population (2011)', value: '11,513' },
  { label: 'Area', value: '6.50 km²' },
  { label: 'Elevation', value: '1,495 m' },
  { label: 'Wards', value: '09' },
  { label: 'Households', value: '2,800' },
  { label: 'PIN code', value: '734214' },
];

export const demographics = {
  census2011: { total: 11513, male: 5688, female: 5825 },
  census2001: { total: 9141, male: 4619, female: 4522 },
  languages: 'Nepali, Bengali and English',
  // Census of India 2011, Mirik Notified Area (as listed on census2011.co.in). Share of people aged 7 and over who can read and write.
  literacy: { overall: 88.38, male: 93.77, female: 83.13 },
  // Published decadal growth rate between the 1991 and 2001 censuses, in percent.
  growth1991to2001: -1.33,
  ruralBlock:
    'The surrounding villages are served by the Mirik Community Development Block (six Gram Panchayats: Chenga Panighata, Pahilagaon School Dara I, Pahilagaon School Dara II, Soureni I, Soureni II and Duptin), which had 46,374 people in 2011.',
};

export const history = [
  {
    year: 'Origins',
    text:
      'The name Mirik comes from the Lepcha "Mir-Yok", a place burnt by fire. Mirik Bazar grew as the trading centre for nearby villages and tea gardens. Where the lake now lies was a marsh of sweet flag (locally bojho), next to a ground where British officers played polo.',
  },
  {
    year: '1969',
    text:
      'The West Bengal Tourism Department began acquiring 335 acres from the neighbouring Thurbo Tea Estate to develop Mirik.',
  },
  { year: '1974', text: 'Work began to turn the land into a tourist centre with a new lake.' },
  {
    year: 'April 1979',
    text:
      'Sumendu Lake and the Day Centre were inaugurated. Krishnanagar grew on the far side of the lake with hotels and restaurants.',
  },
  {
    year: '30 March 2017',
    text: 'Mirik became the headquarters of the newly declared Mirik Subdivision.',
  },
  {
    year: 'May 2017',
    text:
      'Last municipal election. The Trinamool Congress won the Mirik board, the first mainstream party to win a hill civic body in about three decades.',
  },
  {
    year: 'April 2022',
    text:
      'The board’s five-year term ended without an election; the outgoing chairman, L.B. Rai, continued as Administrator.',
  },
  {
    year: '4 to 5 October 2025',
    text:
      'Extreme rainfall caused deadly landslides across Mirik Subdivision and swept away the Dudhia bridge on the Siliguri road.',
  },
  {
    year: '19 May 2026',
    text: 'The state dissolved the board and appointed the SDO, Mirik, as Administrator until elections.',
  },
];

// Online services. The four portal links are the ones the current
// mirikmunicipality.com site uses.
export const services = [
  {
    title: 'Trade Licence',
    text: 'Apply for or auto-renew a trade licence (Certificate of Enlistment) online from anywhere, after OTP registration on e-District.',
    link: 'https://edistrict.wb.gov.in/PACE/login.do',
    linkLabel: 'Apply on e-District',
    online: true,
  },
  {
    title: 'Birth and Death Registration',
    text: 'Register a birth or death and get the certificate online through the state Janma-Mrityu Tathya portal.',
    link: 'https://janma-mrityutathya.wb.gov.in/Dashboard/Index',
    linkLabel: 'Open Janma-Mrityu portal',
    online: true,
  },
  {
    title: 'Building Plan Sanction',
    text: 'Submit and track building plans through the state Online Building Permission System.',
    link: 'https://obpsudma.wb.gov.in/',
    linkLabel: 'Open OBPS portal',
    online: true,
  },
  {
    title: 'Mutation',
    // VERIFY: the current site's mutation link is broken; add the correct portal link here.
    text: 'Record a change of ownership of a holding. Apply at the Municipality Office with your holding number and ownership papers.',
    link: '',
    linkLabel: '',
    online: false,
  },
  {
    title: 'Property (Holding) Tax',
    text: 'Assessment and payment of holding tax for property within the nine wards. Paying regularly funds the town\u2019s roads, water and cleaning.',
    link: '',
    linkLabel: '',
    online: false,
  },
  {
    title: 'Water Connection',
    text: 'New household tap connections under the AMRUT 2.0 water project, and complaints about supply.',
    link: '',
    linkLabel: '',
    online: false,
  },
  {
    title: 'Tenders',
    text: 'Municipal works are tendered online on the West Bengal e-tender portal.',
    link: 'https://wbtenders.gov.in',
    linkLabel: 'wbtenders.gov.in',
    online: true,
  },
  {
    title: 'Grievances',
    text: 'Report a problem in your ward with the online form. You can attach a photo.',
    link: '/grievance/',
    linkLabel: 'Go to the form',
    online: true,
  },
];

// Special projects (menu on the current site).
export const schemes = [
  {
    id: 'amrut',
    short: 'AMRUT 2.0',
    name: 'Atal Mission for Rejuvenation and Urban Transformation',
    text:
      'Launched in June 2015 to give every urban household a tap and a sewer connection, with a water supply target of 135 litres per person per day. In Mirik, a Rs 199 crore water supply project was approved under AMRUT 2.0 in November 2022; works worth over Rs 170 crore were underway as of June 2026.',
  },
  {
    id: 'sbm',
    short: 'Swachh Bharat Mission',
    name: 'Swachh Bharat Mission (Urban)',
    text:
      'The national cleanliness mission launched on 2 October 2014. In Mirik it covers segregation, collection, processing and disposal of solid waste under the municipality\u2019s Solid Waste Management Bye-Laws, 2023.',
  },
  {
    id: 'nulm',
    short: 'NULM',
    name: 'National Urban Livelihoods Mission',
    text:
      'Reduces poverty among urban poor households through self-employment and wage employment, shelters for the homeless, and support for street vendors with space, credit and skills. Nodal Officer: the Executive Officer.',
  },
  {
    id: 'pmay',
    short: 'Housing for All',
    name: 'Pradhan Mantri Awas Yojana (Urban)',
    text:
      'Pucca houses for families without one. The municipality surveyed every ward, held workshops with residents, traders, senior citizens and local groups, and prepared a Housing for All Plan of Action with the State Urban Development Agency (SUDA).',
  },
  {
    id: 'cbphcs',
    short: 'CBPHCS',
    name: 'Community Based Primary Health Care Services',
    text:
      'Primary health care for families below the poverty line, to be widened to all residents, in line with national health programmes. The municipality has recruited for a contractual Health Officer under this scheme.',
  },
];

// Cleanliness rules in force from 1 September 2026 (all WB municipalities).
// `title` is the short card heading and `image` the illustration on the Clean Mirik page; `offence` is the official wording.
export const fines = [
  { title: 'Spitting', offence: 'Spitting in public', amount: 'Rs 100', image: '/images/clean-mirik/fine-spitting-in-public.webp' },
  { title: 'Littering', offence: 'Throwing garbage or littering on the road', amount: 'Rs 200', image: '/images/clean-mirik/fine-littering-on-road.webp' },
  { title: 'Public urination', offence: 'Urinating or defecating in public', amount: 'Rs 200', image: '/images/clean-mirik/fine-urinating-in-public.webp' },
  { title: 'Plastic bags', offence: 'Using banned plastic carry bags', amount: 'Rs 200', image: '/images/clean-mirik/fine-plastic-carry-bags.webp' },
  { title: 'Illegal dumping', offence: 'Illegal dumping of garbage', amount: 'Rs 200', image: '/images/clean-mirik/fine-illegal-garbage-dumping.webp' },
  { title: 'Unauthorised parking', offence: 'Parking in a non-parking zone', amount: 'Rs 500', image: '/images/clean-mirik/fine-unauthorised-parking.webp' },
];

// Bin colours under the Mirik Solid Waste Management Bye-Laws, 2023.
// VERIFY: the `items` examples follow the national SWM Rules 2016 and Bio-Medical Waste Rules 2016,
// not the Mirik bye-law text. Confirm with the office before launch. `icon` picks a drawing on the Clean Mirik page.
export const bins = [
  { colour: 'Green', hex: '#2e8b57', use: 'Biodegradable (kitchen and garden waste)', image: '/images/clean-mirik/bin-green.webp',
    items: [{ label: 'Food scraps', icon: 'food' }, { label: 'Vegetable peels', icon: 'peel' }, { label: 'Leaves and flowers', icon: 'leaf' }] },
  { colour: 'Blue', hex: '#2f6fb3', use: 'Non-biodegradable (plastic, paper, metal, glass)', image: '/images/clean-mirik/bin-blue.webp',
    items: [{ label: 'Plastic bottles', icon: 'bottle' }, { label: 'Paper and cardboard', icon: 'box' }, { label: 'Metal cans', icon: 'can' }, { label: 'Glass jars', icon: 'jar' }] },
  { colour: 'Black', hex: '#2a2a2a', use: 'Hazardous waste', image: '/images/clean-mirik/bin-black.webp',
    items: [{ label: 'Batteries', icon: 'battery' }, { label: 'Paint cans', icon: 'paint' }, { label: 'Tube lights and CFLs', icon: 'bulb' }] },
  { colour: 'White', hex: '#f4f4f4', use: 'Biomedical waste', image: '/images/clean-mirik/bin-white.webp',
    items: [{ label: 'Needles and syringes', icon: 'syringe' }, { label: 'Blades', icon: 'blade' }] },
  { colour: 'Yellow', hex: '#e8b923', use: 'COVID waste', image: '/images/clean-mirik/bin-yellow.webp',
    items: [{ label: 'Used masks', icon: 'mask' }, { label: 'Used gloves', icon: 'glove' }] },
];

export const projects = [
  {
    title: 'Piped water for every household',
    figure: 'Rs 199 crore',
    text:
      'Approved by the Centre under AMRUT 2.0 in November 2022. As of June 2026, works worth over Rs 170 crore are underway for 100% household drinking water coverage.',
  },
  {
    title: 'Saving Sumendu Lake',
    figure: '~1,050 of 2,800',
    text:
      'Households that currently discharge sewage into the lake. Two new STPs, in addition to the existing plant, plus desiltation and rejuvenation of the lake are planned so all household sewage is treated.',
  },
  {
    title: 'Landslide recovery',
    figure: 'Oct 2025',
    text:
      'Rehabilitation of families affected by the October 2025 landslides, drainage and retaining walls, and a new Dudhey bridge on the Siliguri to Mirik road (under construction).',
  },
];

export const attractions = [
  { name: 'Sumendu Lake', text: 'The heart of Mirik: an 80-hectare natural lake surrounded by a 3.5 km paved walkway, pine forest trails, boating, and Kanchenjunga views.', note: 'Created in the 1970s by the West Bengal Tourism Department. Land was acquired from Thurbo Tea Estate starting in 1969, and the lake opened to visitors in April 1979.' },
  { name: 'Indreni Pul and Savitri Pushpaudyan', text: 'An 80-foot arched footbridge over the lake connecting the pine forest to the garden, named in honor of Indian National Army martyrs.', note: 'Indreni Pul is named after Indreni Thapa and Savitri Pushpaudyan after Savitri Thapa, both brave female soldiers of Netaji’s INA who gave their lives for Indian independence.' },
  { name: 'Bokar Monastery', text: 'Buddhist meditation centre at the highest point of Mirik (1,768 m), overlooking the town and lake.', note: 'Founded in 1984 by Kyabje Bokar Tulku Rinpoche in the Kagyu tradition of Tibetan Buddhism. It houses hundreds of monks and features intricate wall murals and a golden stupa.' },
  { name: 'Rameetay Dara', text: 'Scenic vantage viewpoint offering sweeping panoramas over the surrounding mountain ridges and the North Bengal plains below.', note: 'A short scenic walk from the lake with wide views extending to snow-capped peaks on clear days. Bokar Monastery lies along the path.' },
  { name: 'Debisthan', text: 'Hilltop Hindu temple complex set amidst pine trees near the edge of Sumendu Lake.', note: 'The temple is dedicated to the goddess Singha Devi and also holds revered shrines for Shiva, Kali, and Hanuman.' },
  { name: 'Tingling View Point', text: 'Panoramic lookout point offering breathtaking views over the undulating green tea slopes of Thurbo Tea Estate and surrounding valleys.', note: 'Located about 8 km from Mirik town on the road to Siliguri. It is a favorite photography stop for travelers surrounded by tea gardens.' },
  { name: 'Tea gardens', text: 'World-famous tea estates including Thurbo, Soureni, Gopaldhara, Singbulli, Okayti and Phuguri producing finest Darjeeling Orthodox tea.', note: 'Tea plantation began here in the late 19th century. Visitors can walk through scenic tea trails, watch leaf plucking, and sample fresh teas at garden outlets.' },
  { name: 'Orange orchards', text: 'Mirik Busty, Murmah and Soureni Busty are celebrated for cultivating sweet Darjeeling mandarin oranges.', note: 'During harvest season (November to January), the hillside groves glow orange. Local roadside stalls sell fresh organic fruit and orange blossom honey.' },
  { name: 'Mirik Church (UCNI)', text: 'Historic church built in 1962, located at Deosay Dara in Ward IV overlooking the hill town.', note: 'The church was built in 1962. Nearby, the Darjeeling Hills Bible School has offered theological training in Nepali since 1954.' },
];

export const gettingHere = [
  { place: 'Siliguri', distance: '52 km', car: '~ 2 hr', bike: '~ 1 hr 45 min' },
  { place: 'Darjeeling', distance: '49 km', car: '~ 2 hr', bike: '~ 1 hr 45 min' },
  { place: 'Bagdogra Airport (IXB)', distance: '52 km', car: '~ 2 hr', bike: '~ 1 hr 45 min' },
  { place: 'New Jalpaiguri (NJP) railway station', distance: 'Via Siliguri', car: '~ 2 hr 15 min', bike: '~ 2 hr' },
];

export const transportNote =
  'Shared taxis run from Mirik to Siliguri, Darjeeling, Kurseong, Sonada, Kalimpong and Kakarbhitta (Nepal); a few buses run to Siliguri and Darjeeling. Local taxis connect the lake (Krishnanagar) with Mirik Bazar. Fares change often; check locally.';

export const health: { name: string; detail: string; text: string; note?: string }[] = [
  {
    name: 'Mirik Rural Hospital',
    detail: '30 beds · Primary Hospital',
    text: 'Main government hospital in Mirik offering 24/7 emergency care, maternity ward, outpatient services (OPD), pathology lab, and essential medicine distribution.',
    note: 'Primary municipal medical facility located near Thana Line.',
  },
  {
    name: 'Soureni Bustee PHC',
    detail: '10 beds · Primary Health Centre',
    text: 'Serves the Soureni Gram Panchayat and nearby tea estate worker communities with inpatient care, routine immunizations, and maternal health services.',
    note: 'Situated along the main Mirik-Siliguri highway.',
  },
  {
    name: 'Duptin PHC',
    detail: '2 beds · Health Post',
    text: 'Rural health centre providing general outpatient consultations, preventive health check-ups, child care, and emergency first-aid for local farming hamlets.',
    note: 'Focuses on rural community health outreach.',
  },
  {
    name: 'Panighatta PHC',
    detail: 'Outpatient Clinic',
    text: 'Outpatient primary care facility catering to the Panighatta tea garden and foothills population, providing medical consultations and essential medicines.',
    note: 'Situated at the base of the Mirik Hills region.',
  },
];

export const education: { name: string; detail: string; text: string; note?: string }[] = [
  {
    name: 'Mirik College (affiliated to the University of North Bengal)',
    detail: 'Higher Education / Degree College',
    text: 'Premier government-aided degree college offering undergraduate BA and BSc courses in Humanities, Sciences, and Nepali Literature for students of Mirik subdivision.',
    note: 'Established in 2000 on Krishnanagar Road with mountain views.',
  },
  {
    name: 'Mirik Higher Secondary School',
    detail: 'Government Higher Secondary School',
    text: 'Historic co-educational government school offering Secondary (Madhyamik) and Higher Secondary (WBCHSE) education across Arts, Science, and Commerce streams.',
    note: 'Central school serving generations of local hill residents.',
  },
  {
    name: 'Don Bosco School',
    detail: 'Co-Ed ICSE / ISC School',
    text: 'Renowned missionary institution providing holistic primary and secondary education with modern science labs, computer rooms, and sports grounds.',
    note: 'Known for high academic standards and student discipline.',
  },
  {
    name: 'Snowdrops School',
    detail: 'English Medium Secondary School',
    text: 'Established private English-medium institution emphasizing academic excellence, moral values, and active co-curricular engagement for children in Ward III.',
    note: 'Located near Thana Line in central Mirik.',
  },
  {
    name: 'Orange Lake School',
    detail: 'Primary & Secondary School',
    text: 'Popular local English-medium school providing primary and secondary education near the scenic Sumendu Lake area.',
    note: 'Features small class sizes and personal student attention.',
  },
  {
    name: 'Glenmore International School',
    detail: 'Residential & Day Boarding School',
    text: 'Modern co-educational school with residential hostel facilities, comprehensive sports infrastructure, and activity-based learning programs.',
    note: 'Spacious campus situated in a peaceful hill environment.',
  },
  {
    name: 'Brindavan Boarding School',
    detail: 'Boarding & Day Secondary School',
    text: 'Long-standing boarding school serving students from across Darjeeling district, focusing on disciplined study, character building, and sports.',
    note: 'Offers full hostel facilities for outstation students.',
  },
  {
    name: 'Lewis English School',
    detail: 'Primary & Secondary School',
    text: 'Community-centered English-medium school committed to quality foundational education, reading literacy, and public speaking skills.',
    note: 'Serves families from Mirik town and surrounding tea estates.',
  },
  {
    name: 'Green Lawn School',
    detail: 'Primary & Middle School',
    text: 'Dedicated elementary school fostering creative arts, environmental awareness, and foundational skills in a nurturing environment.',
    note: 'Known for friendly faculty and green surroundings.',
  },
  {
    name: 'Woodlands Academy',
    detail: 'Secondary & High School',
    text: 'Hillside academy providing comprehensive school curriculum, sports, physical education, and environmental studies.',
    note: 'Located amidst pine groves on the town outskirts.',
  },
  {
    name: 'Pinehall Academy',
    detail: 'Primary & Secondary School',
    text: 'Respected educational academy emphasizing STEM education, computer training, and regional language heritage.',
    note: 'Features active sports and cultural clubs.',
  },
  {
    name: 'Temple of Wisdom',
    detail: 'Early Childhood & Primary School',
    text: 'Innovative early learning center and elementary school focusing on holistic child development, play-based learning, and foundational education.',
    note: 'Specialized early childhood development programs.',
  },
];

export const emergency = [
  { label: 'All emergencies', number: '112' },
  { label: 'Police', number: '100' },
  { label: 'Fire', number: '101' },
  { label: 'Ambulance', number: '108' },
  { label: 'Disaster helpline', number: '1070' },
  { label: 'Women helpline', number: '1091' },
  { label: 'Child helpline', number: '1098' },
];

// Optional `photo` (e.g. '/images/offices/sdo.jpg') replaces the map thumbnail once real photos are added to public/.
export const offices: { name: string; detail: string; address: string; photo?: string }[] = [
  { name: 'Sub-Divisional Office (SDO), Mirik', detail: 'Near Mirik Police Station', address: 'Near Mirik Police Station, Thana Line, Mirik, Darjeeling, West Bengal 734214', photo: '/images/offices/mirik-sdo.webp' },
  { name: 'SDPO Office, Mirik', detail: 'Near Mirik Police Station', address: 'Near Mirik Police Station, Thana Line, Mirik, Darjeeling, West Bengal 734214', photo: '/images/offices/mirik-sdo.webp' },
  { name: 'Mirik Police Station', detail: 'Thana Line', address: 'Thana Line, Mirik, Darjeeling, West Bengal 734214', photo: '/images/offices/mirik-police-station-building.webp' },
  { name: 'Taluka Court, Mirik', detail: 'Civil Judge and Judicial Magistrate', address: 'Mirik, Darjeeling, West Bengal 734214', photo: '/images/offices/mirik-court.webp' },
  { name: 'Mirik Block (BDO) Office', detail: 'Rural areas and Gram Panchayats', address: 'Mirik, Darjeeling, West Bengal 734214', photo: '/images/offices/mirik-bdo-no-person.png' },
];

export const links = [
  { label: 'Darjeeling District', url: 'https://darjeeling.gov.in' },
  { label: 'WB Urban Services', url: 'https://www.wburbanservices.gov.in' },
  { label: 'e-District West Bengal', url: 'https://edistrict.wb.gov.in' },
  { label: 'Janma-Mrityu Tathya', url: 'https://janma-mrityutathya.wb.gov.in/Dashboard/Index' },
  { label: 'Online Building Permission', url: 'https://obpsudma.wb.gov.in/' },
  { label: 'WB e-Tenders', url: 'https://wbtenders.gov.in' },
  { label: 'Bangla Sahayata Kendra', url: 'https://bsk.wb.gov.in' },
];

export const sources = [
  { label: 'Current Mirik Municipality website', url: 'https://www.mirikmunicipality.com/' },
  { label: 'Mirik Municipality on Facebook', url: 'https://www.facebook.com/municipalitymirik' },
  { label: 'Darjeeling District: Mirik Municipality', url: 'https://darjeeling.gov.in/public-utility/mirik-municipality/' },
  { label: 'Wikipedia: Mirik', url: 'https://en.wikipedia.org/wiki/Mirik' },
  { label: 'Wikipedia: Mirik subdivision', url: 'https://en.wikipedia.org/wiki/Mirik_subdivision' },
  { label: 'IANS via Social News XYZ (19 May 2026)', url: 'https://www.socialnews.xyz/2026/05/19/bengal-govt-dissolves-four-civic-bodies-appoints-administrators' },
  { label: 'Millennium Post (8 June 2026)', url: 'https://www.millenniumpost.in/bengal/minister-announces-2-new-stps-in-mirik-reviews-lake-revival-663457' },
  { label: 'The Statesman (June 2026)', url: 'https://www.thestatesman.com/bengal/agnimitra-paul-inspects-potable-water-projects-in-darjeeling-1503603470.html' },
  { label: 'Sikkim Express (Nov 2022)', url: 'https://www.sikkimexpress.com/news-details/centre-approves-water-supply-projects-for-mirik-kalimpong-towns' },
  { label: 'All India Radio News (Oct 2025)', url: 'https://www.newsonair.gov.in/west-bengal-over-20-people-lost-lives-due-to-rainfall-landslides-in-darjeeling-district' },
  { label: 'WB Urban Services: Trade Licence', url: 'https://www.wburbanservices.gov.in/page/cms/trade_license_procedure_44b32d' },
];

// "Mirik Municipality Body" grid on the home page (8 cards).
// First five names were supplied by the office (Sept 2026); the last three are placeholders.
// Cards 2 to 8 currently use two STOCK sample portraits (public/images/people/sample-*.jpg). Replace with the officers' real photos before launch.
// VERIFY: replace the placeholders (name: '') with real names, photos and designations from the office.
export const body: { role: string; name: string; note?: string; tone: string; tel?: string; photo?: string }[] = [
  { role: 'Executive Officer', name: administration.officers[0].name, note: 'Also Nodal Officer, NULM', tone: '#1f4d3a', tel: administration.officers[0].tel , photo: '/images/people/staff-2.jpg' },
  { role: 'Finance Officer', name: administration.officers[1].name, tone: '#2f6f8f', tel: administration.officers[1].tel },
  { role: 'Sub Assistant Engineer', name: 'Nimasang Tamang', tone: '#a2416b' , photo: '/images/people/staff-1.jpg' },
  { role: 'Sub Assistant Engineer', name: 'Bhaskar Mothay', tone: '#b3471d', photo: '/images/people/bhaskar-mothay.jpg' },
  { role: 'Chairperson', name: '', note: 'Vacant since 19 May 2026', tone: '#b07d12' , photo: '/images/people/sample-1.jpg' },
  { role: 'Health Officer (CBPHCS)', name: 'Mahendra Pradhan', tone: '#2b7a5a', photo: '/images/people/mahendra-pradhan.jpg' }, // VERIFY role
  { role: 'Head Clerk', name: 'Mamta Subba', tone: '#1f6b47', photo: '/images/people/mamta-subba.jpg' },
];
