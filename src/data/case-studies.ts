// Project case studies shown at /notices/projects/<slug>/ and linked from the Projects section on /notices/.
// Researched September 2026 from the sources listed in each study. Every fact carries `src` (a source id).
// Items marked `demo: true` are NOT published figures: they are placeholders shown with a "Demo" label.
// Replace them with figures from the office, then remove the demo flag.
// `project` must match a `projects[].title` in site.ts so the Notices page can link the card.
// Every visible English string here needs a Nepali and Bengali entry in i18n-extra.ts.

export type Source = { id: string; label: string; url: string };
export type Fact = { value: string; label: string; src?: string; demo?: boolean };
export type Step = { date: string; title: string; text: string; state: 'done' | 'now' | 'next'; src?: string; demo?: boolean };
export type Item = { title: string; text: string; src?: string; demo?: boolean };
// Cover photo. Free-licensed images from Wikimedia Commons, saved in public/images/projects/.
// Keep the credit and licence: they are shown under the photo and are required by the licence.
export type Photo = { src: string; alt: string; caption: string; credit: string; license: string; licenseUrl: string; url: string; pos?: string };
export type CaseStudy = {
  slug: string;
  project: string;
  title: string;
  tagline: string;
  status: string;
  tone: 'blue' | 'lake' | 'orange';
  icon: 'water' | 'lake' | 'landslide' | 'people';
  updated: string;
  photo?: Photo;
  facts: Fact[];
  summary: string[];
  problem: Item[];
  scope: Item[];
  progress: { label: string; value: number; note?: string; demo?: boolean }[];
  timeline: Step[];
  agencies: { name: string; role: string }[];
  residents: { text: string; href?: string; cta?: string }[];
  challenges: Item[];
  related?: Item;
  sources: Source[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'piped-water',
    project: 'Piped water for every household',
    title: 'Piped water for every household',
    tagline: 'A drinking water tap in every home in the municipality, under AMRUT 2.0.',
    status: 'Under way',
    tone: 'blue',
    icon: 'water',
    updated: 'September 2026',
    photo: {
      src: '/images/projects/piped-water.jpg',
      alt: 'An old blue tanker truck marked Water Carrying parked on a street in Darjeeling',
      caption: 'Water delivered by tanker in Darjeeling, 2009: the shortage piped supply is meant to end.',
      credit: 'shankar s.',
      license: 'CC BY 2.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
      url: 'https://commons.wikimedia.org/wiki/File:Darjeeling_India_truck_delivering_water_May_2009.jpg',
      pos: 'center 60%',
    },
    facts: [
      { value: 'Rs 199 crore', label: 'Water supply project approved by the Centre', src: 'sx2022' },
      { value: 'Rs 170 crore+', label: 'Works under way in June 2026', src: 'st2026' },
      { value: 'Rs 2.43 crore', label: 'Sanctioned for tap connections to every home', src: 'apac2025' },
      { value: '135 litres', label: 'Water per person per day, the AMRUT service level', src: 'pib2022' },
    ],
    summary: [
      'The Darjeeling hills get some of the highest rainfall in India, yet towns like Mirik face an acute shortage of drinking water. In November 2022 the Centre approved a Rs 199 crore water supply project for Mirik Municipality under AMRUT 2.0.',
      'The aim is 100% coverage: a working tap in every household in the nine wards. In June 2026 works worth more than Rs 170 crore were under way.',
    ],
    problem: [
      { title: 'Rain, but not enough water', text: 'The hills receive very heavy rain, but the town still faces an acute shortage of drinking water.', src: 'sx2022' },
      { title: 'About 2,800 households', text: 'The municipality has about 2,800 households. The project is meant to reach all of them.', src: 'mp2026' },
      { title: 'Part of a district plan', text: 'Darjeeling district received Rs 1,503.67 crore of AMRUT 2.0 projects for all its towns, including Mirik.', src: 'apac2025' },
    ],
    scope: [
      { title: 'Household tap connections', text: 'A tap connection for every home in the municipality, funded by the Rs 2.43 crore sanction.', src: 'apac2025' },
      { title: 'Water source and intake', text: 'Drawing raw water from a reliable source and piping it to the town.', demo: true },
      { title: 'Treatment plant', text: 'Filtering and disinfecting the water before it is supplied.', demo: true },
      { title: 'Storage reservoirs', text: 'Reservoirs above the wards so water can flow down by gravity.', demo: true },
      { title: 'Distribution pipelines', text: 'New pipelines along the roads and footpaths of each ward.', demo: true },
    ],
    progress: [
      { label: 'Overall works', value: 60, demo: true },
      { label: 'Homes with a new tap', value: 40, demo: true },
    ],
    timeline: [
      { date: '11 August 2022', title: 'Project requested', text: 'The Darjeeling MP asked the Union Minister of Housing and Urban Affairs to approve AMRUT 2.0 water projects for Mirik.', state: 'done', src: 'sx2022' },
      { date: 'November 2022', title: 'Rs 199 crore approved', text: 'The Centre approved the water supply project for Mirik Municipality under AMRUT 2.0.', state: 'done', src: 'sx2022' },
      { date: 'April 2025', title: 'Funds for full coverage', text: 'Rs 2.43 crore was sanctioned to connect every household in Mirik.', state: 'done', src: 'apac2025' },
      { date: 'June 2026', title: 'Works reviewed', text: 'The state Municipal Affairs Minister reviewed the works during a visit to Mirik. Works worth more than Rs 170 crore were under way.', state: 'now', src: 'st2026' },
      { date: 'Next', title: 'Taps in every home', text: 'Connecting homes ward by ward, then trial runs of the new supply.', state: 'next', demo: true },
      { date: '2027', title: 'Full supply', text: 'Target date for the whole project.', state: 'next', demo: true },
    ],
    agencies: [
      { name: 'Ministry of Housing and Urban Affairs', role: 'Runs AMRUT 2.0 and approved the project' },
      { name: 'West Bengal Municipal Affairs Department', role: 'Oversees and reviews the works' },
      { name: 'Mirik Municipality', role: 'New tap connections and supply complaints' },
    ],
    residents: [
      { text: 'Ask at the Municipality Office about a new tap connection. Take your holding number.', href: '/contact/', cta: 'Office address and hours' },
      { text: 'Report leaks, low pressure or no supply with the grievance form.', href: '/grievance/', cta: 'Report a problem' },
      { text: 'Do not damage or tap into new pipelines. Report any damage you see.' },
    ],
    challenges: [
      { title: 'Progress not yet published', text: 'The office has not published ward-by-ward progress. The progress bars on this page are demo figures until it does.' },
    ],
    related: { title: 'Nearby: Manju Khola scheme', text: 'A separate Rs 12 crore GTA drinking water scheme at Manju Khola serves villages in Mirik Block, such as Phuguri and Tingling.', src: 'radiant' },
    sources: [
      { id: 'sx2022', label: 'Sikkim Express, 3 November 2022: Centre approves water supply projects for Mirik, Kalimpong', url: 'https://www.sikkimexpress.com/news-details/centre-approves-water-supply-projects-for-mirik-kalimpong-towns' },
      { id: 'apac2025', label: 'APAC News Network, April 2025: Darjeeling district bags Rs 1,503 crore water projects under AMRUT 2.0', url: 'https://apacnewsnetwork.com/2025/04/darjeeling-district-bags-rs-1503-cr-water-projects-under-amrut-2-0/' },
      { id: 'st2026', label: 'The Statesman, June 2026: Agnimitra Paul inspects potable water projects in Darjeeling', url: 'https://www.thestatesman.com/bengal/agnimitra-paul-inspects-potable-water-projects-in-darjeeling-1503603470.html' },
      { id: 'mp2026', label: 'Millennium Post, 8 June 2026: Minister announces 2 new STPs in Mirik, reviews lake revival', url: 'https://www.millenniumpost.in/bengal/minister-announces-2-new-stps-in-mirik-reviews-lake-revival-663457' },
      { id: 'pib2022', label: 'PIB, Ministry of Housing and Urban Affairs: AMRUT 2.0 water supply through functional taps', url: 'https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1811880' },
      { id: 'radiant', label: 'Radiant Engineering: Drinking water supply at Manju Khola, Mirik', url: 'https://radiantengineering.co/project/drinking-water-supply-at-manju-khola-mirik/' },
    ],
  },
  {
    slug: 'sumendu-lake',
    project: 'Saving Sumendu Lake',
    title: 'Saving Sumendu Lake',
    tagline: 'Stopping sewage from reaching the lake, and removing silt so the water can recover.',
    status: 'In progress',
    tone: 'lake',
    icon: 'lake',
    updated: 'September 2026',
    photo: {
      src: '/images/projects/sumendu-lake.jpg',
      alt: 'Sumendu Lake in Mirik with the town on the hillside behind it under a blue sky',
      caption: 'Sumendu Lake and Mirik town, 2019.',
      credit: 'Shubh.ch1994',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      url: 'https://commons.wikimedia.org/wiki/File:Mirik_Lake_a.k.a_Sumendu_Lake.jpg',
      pos: 'center 55%',
    },
    facts: [
      { value: '~1,050 of 2,800', label: 'Households that discharge sewage into the lake', src: 'mp2026' },
      { value: 'Rs 10 crore', label: 'For desiltation and rejuvenation under AMRUT 2.0', src: 'apac2025' },
      { value: '2 new STPs', label: 'Sewage treatment plants announced in June 2026', src: 'mp2026' },
      { value: '1.25 km', label: 'Length of the lake', src: 'wiki' },
    ],
    summary: [
      'Sumendu Lake is the heart of Mirik. The West Bengal Tourism Department built it on land taken from Thurbo Tea Estate, and it opened in April 1979.',
      'Today about 1,050 of the roughly 2,800 households in the town discharge sewage into the lake. The plan is to treat that sewage before it is released, remove silt, and bring the water back to health.',
    ],
    problem: [
      { title: 'Sewage in the lake', text: 'Many houses around the lake have no septic tank, and wastewater from washing clothes and dishes runs into it.', src: 'dc2022' },
      { title: 'Fish deaths in 2012', text: 'A large number of dead fish surfaced in the lake, and workers who cleaned it later fell ill.', src: 'dc2022' },
      { title: 'Building without drains', text: 'Shops, hotels and houses grew around the lake without proper drains or sewer lines, and parts of the edge were filled with mud and sand.', src: 'dc2022' },
      { title: 'An unfinished plant', text: 'A treatment plant was sanctioned years ago, but in 2022 the work was still incomplete.', src: 'dc2022' },
    ],
    scope: [
      { title: 'Two new treatment plants', text: 'Two more sewage treatment plants, so household sewage is treated before it is released.', src: 'mp2026' },
      { title: 'Existing plant', text: 'The existing treatment plant keeps running alongside the new ones.', src: 'mp2026' },
      { title: 'Desiltation', text: 'Removing silt from the lake bed to restore depth and water quality.', src: 'apac2025' },
      { title: 'Sewer connections', text: 'Connecting lakeside homes and hotels to the sewer lines that feed the plants.', demo: true },
      { title: 'Drain screens', text: 'Screens on drains that enter the lake to stop plastic and garbage.', demo: true },
    ],
    progress: [
      { label: 'Households not discharging into the lake', value: 63, note: 'About 1,750 of 2,800, worked out from the June 2026 figures.' },
      { label: 'Desiltation', value: 35, demo: true },
    ],
    timeline: [
      { date: '1969', title: 'Land acquired', text: 'The Tourism Department began acquiring 335 acres from Thurbo Tea Estate to develop Mirik.', state: 'done', src: 'site' },
      { date: 'April 1979', title: 'Lake opens', text: 'Sumendu Lake and the Day Centre were inaugurated.', state: 'done', src: 'site' },
      { date: '2012', title: 'Fish die-off', text: 'Dead fish surfaced in large numbers, a sign of polluted water.', state: 'done', src: 'dc2022' },
      { date: 'February 2022', title: 'Plant still unfinished', text: 'Reports noted that the sanctioned treatment plant was not complete.', state: 'done', src: 'dc2022' },
      { date: 'April 2025', title: 'Rs 10 crore sanctioned', text: 'Funds for desiltation and rejuvenation of the lake under AMRUT 2.0.', state: 'done', src: 'apac2025' },
      { date: '8 June 2026', title: 'Two new plants announced', text: 'The state Municipal Affairs Minister said two more plants would be installed within three months, and reviewed the desiltation.', state: 'done', src: 'mp2026' },
      { date: 'September 2026', title: 'Plants due', text: 'The three-month target for the two new plants. The office has not yet confirmed completion.', state: 'now', src: 'mp2026' },
      { date: 'Next', title: 'Water quality checks', text: 'Regular testing to show whether the lake is recovering.', state: 'next', demo: true },
    ],
    agencies: [
      { name: 'West Bengal Municipal Affairs Department', role: 'Announced the new plants and reviews the works' },
      { name: 'Ministry of Housing and Urban Affairs', role: 'Funds desiltation under AMRUT 2.0' },
      { name: 'Mirik Municipality', role: 'Sewer connections, drains and cleanliness rules' },
    ],
    residents: [
      { text: 'Never throw garbage, plastic or wastewater into the lake or the drains that feed it. Fines apply.', href: '/clean-mirik/#fines', cta: 'See the fine list' },
      { text: 'Lakeside homes and hotels: connect to the sewer line when it reaches you.' },
      { text: 'Report open sewage or dumping near the lake with the grievance form.', href: '/grievance/', cta: 'Report a problem' },
    ],
    challenges: [
      { title: 'Delays', text: 'The first treatment plant took years and was still unfinished in 2022.', src: 'dc2022' },
      { title: 'Homes without septic tanks', text: 'Sewage will keep reaching the lake until every lakeside home is connected.', src: 'dc2022' },
    ],
    sources: [
      { id: 'mp2026', label: 'Millennium Post, 8 June 2026: Minister announces 2 new STPs in Mirik, reviews lake revival', url: 'https://www.millenniumpost.in/bengal/minister-announces-2-new-stps-in-mirik-reviews-lake-revival-663457' },
      { id: 'apac2025', label: 'APAC News Network, April 2025: Darjeeling district bags Rs 1,503 crore water projects under AMRUT 2.0', url: 'https://apacnewsnetwork.com/2025/04/darjeeling-district-bags-rs-1503-cr-water-projects-under-amrut-2-0/' },
      { id: 'dc2022', label: 'The Darjeeling Chronicle, 1 February 2022: Mirik Lake is turning into a sewage dump', url: 'https://thedarjeelingchronicle.com/mirik-lake-sumendu-lake-is-turning-into-a-sewage-dump/' },
      { id: 'wiki', label: 'Wikipedia: Mirik Lake', url: 'https://en.wikipedia.org/wiki/Mirik_Lake' },
      { id: 'site', label: 'Mirik Municipality: History of Mirik (About page)', url: '/about/#timeline' },
    ],
  },
  {
    slug: 'landslide-recovery',
    project: 'Landslide recovery',
    title: 'Landslide recovery',
    tagline: 'Rebuilding lives, homes and the Siliguri road after the landslides of October 2025.',
    status: 'In progress',
    tone: 'orange',
    icon: 'landslide',
    updated: 'September 2026',
    photo: {
      src: '/images/projects/landslide-recovery.jpg',
      alt: 'The old steel Dudhia bridge over the Balason river on blue and white pillars',
      caption: 'The old Dudhia bridge over the Balason in 2022, before it was swept away in October 2025.',
      credit: 'Pinakpani',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      url: 'https://commons.wikimedia.org/wiki/File:Balason_Bridge,_Dudhia_13.jpg',
      pos: 'center 45%',
    },
    facts: [
      { value: '12', label: 'Lives lost in Mirik Subdivision', src: 'sx2025a' },
      { value: '121', label: 'Families given relief in the first week', src: 'sx2025a' },
      { value: '16 days', label: 'To build the temporary Dudhia bridge', src: 'etv2025' },
      { value: 'Rs 51 to 54 crore', label: 'Permanent two-lane Dudhia bridge (reports differ)', src: 'nh2026' },
    ],
    summary: [
      'On the night of 4 to 5 October 2025, about 300 mm of rain fell in a few hours and set off landslides across the Darjeeling hills. Mirik Subdivision was among the worst hit, and the Dudhia bridge on the Siliguri road was swept away.',
      'Recovery covers help for families who lost people and homes, new settlements on safer land, drains and retaining walls, and a new bridge.',
    ],
    problem: [
      { title: 'A night of extreme rain', text: 'Around 100 landslides were reported across the region, and at least 28 people died in the district.', src: 'ol2025' },
      { title: 'Lives and homes lost', text: 'In Mirik Subdivision 12 people died. At Dhar Gaon in Toklang, Soureni, 4 people died, 5 were injured and several houses were destroyed.', src: 'mp2026' },
      { title: 'The road cut', text: 'The Dudhia bridge over the Balason, built in 1965, collapsed early on 5 October, cutting the main road between Siliguri and Mirik.', src: 'itv2025' },
    ],
    scope: [
      { title: 'Help for families', text: 'Rs 5 lakh to each bereaved family, Rs 1.2 lakh for each home that was destroyed, Home Guard jobs for next of kin, and camps to replace lost documents.', src: 'sx2025b' },
      { title: 'New settlements', text: 'Land for families who cannot return home, with water supply and sanitation by the PHE for the new settlements at Thurbo Tea Garden and Soureni.', src: 'tender2026' },
      { title: 'Drains and retaining walls', text: 'Protecting slopes near homes so rain can drain away safely.', src: 'mp2026' },
      { title: 'Dudhia bridge', text: 'A temporary bridge, then a Bailey bridge, and now a permanent two-lane bridge over the Balason.', src: 'ba2026' },
    ],
    progress: [
      { label: 'Permanent Dudhia bridge', value: 30, demo: true },
      { label: 'Families in permanent homes', value: 25, demo: true },
    ],
    timeline: [
      { date: '4 to 5 October 2025', title: 'Landslides and bridge collapse', text: 'Extreme rain triggered deadly landslides, and the Dudhia bridge was swept away.', state: 'done', src: 'ol2025' },
      { date: '8 October 2025', title: 'Relief for families', text: 'Rs 5 lakh was given to each bereaved family, relief to 121 families, and jobs were promised for next of kin.', state: 'done', src: 'sx2025a' },
      { date: '10 to 26 October 2025', title: 'Temporary bridge', text: 'The PWD built a 468 m route with a 72 m Hume pipe causeway in 16 days, working round the clock.', state: 'done', src: 'etv2025' },
      { date: '19 June 2026', title: 'Causeway damaged', text: 'Heavy rain washed away part of the temporary bridge. Traffic went via Pankhabari and Kurseong.', state: 'done', src: 'nh2026' },
      { date: '24 June 2026', title: 'Army footbridge', text: 'Army engineers built a 34 m footbridge in about a day so people could cross on foot.', state: 'done', src: 'etv2026' },
      { date: '8 July 2026', title: 'Bailey bridge opens', text: 'The Army, the PWD and the district administration rebuilt the crossing in 20 days.', state: 'done', src: 'ba2026' },
      { date: 'October 2026', title: 'Water for new settlements', text: 'The PHE tender for water supply and sanitation at the Thurbo Tea Garden settlement closes on 6 October.', state: 'now', src: 'tender2026' },
      { date: 'February 2027', title: 'Permanent bridge', text: 'The target set by the PWD for the new two-lane bridge.', state: 'next', src: 'etv2026' },
    ],
    agencies: [
      { name: 'Public Works Department (PWD)', role: 'Temporary and permanent Dudhia bridge' },
      { name: 'Indian Army, Trishakti Corps', role: 'Footbridge and Bailey bridge' },
      { name: 'District administration and GTA', role: 'Relief, jobs and land for new homes' },
      { name: 'Public Health Engineering (PHE)', role: 'Water and sanitation for new settlements' },
      { name: 'Mirik Municipality', role: 'Drains in town and local relief' },
    ],
    residents: [
      { text: 'Keep the helpline numbers handy and read the landslide advice.', href: '/emergency/', cta: 'Emergency numbers' },
      { text: 'Report cracks in the ground, blocked drains or new slips near homes straight away.', href: '/grievance/', cta: 'Report a problem' },
      { text: 'If your family lost documents in the landslides, ask at the office how to replace them.', href: '/contact/', cta: 'Office address and hours' },
    ],
    challenges: [
      { title: 'Monsoon damage', text: 'Rain damaged the temporary bridge in June 2026, and the river is eroding the site of the permanent bridge.', src: 'nh2026' },
      { title: 'Slow rehabilitation', text: 'In June 2026 officials were told to speed up relocation sites, drains and retaining walls.', src: 'mp2026' },
    ],
    sources: [
      { id: 'ol2025', label: 'Outlook India, October 2025: Death toll rises to 28 as Darjeeling is devastated by landslides', url: 'https://www.outlookindia.com/national/west-bengal-floods-death-toll-rises-to-28-as-darjeeling-devastated-by-landslides' },
      { id: 'sx2025a', label: 'Sikkim Express, 8 October 2025: CM assures jobs, aid to Mirik landslide-hit families', url: 'https://www.sikkimexpress.com/news-details/cm-assures-jobs-aid-to-mirik-landslide-hit-families' },
      { id: 'sx2025b', label: 'Sikkim Express, 15 October 2025: CM visits landslide-hit Mirik, hands over relief and ex gratia', url: 'https://sikkimexpress.com/news-details/cm-visits-landslide-hit-mirik-hands-over-relief-materials-ex-gratia' },
      { id: 'itv2025', label: 'India TV, 26 October 2025: Dudhia bridge linking Mirik and Siliguri completed', url: 'https://www.indiatvnews.com/west-bengal/kolkata-west-bengal-mamata-banerjee-announces-completion-of-dudhia-bridge-linking-mirik-and-siliguri-2025-10-26-1014495' },
      { id: 'etv2025', label: 'ETV Bharat, October 2025: Bridge at disaster-hit Dudhia ready in record time', url: 'https://www.etvbharat.com/en/state/alternative-bridge-at-dudhia-in-north-bengal-ready-in-record-time-mamata-banerjee-applauds-round-the-clock-efforts-enn25102701571' },
      { id: 'nh2026', label: 'National Herald, June 2026: Heavy rain damages temporary Balason bridge', url: 'https://www.nationalheraldindia.com/national/heavy-rain-damages-temporary-balason-bridge-cutting-siligurimirik-link' },
      { id: 'etv2026', label: 'ETV Bharat, 24 June 2026: Army constructs footbridge at Dudhia', url: 'https://www.etvbharat.com/en/state/army-constructs-footbridge-at-dudhia-restores-siliguri-mirik-connectivity-enn26062404695' },
      { id: 'ba2026', label: 'Business Aajkal, 8 July 2026: Rebuilt Dudhia bridge inaugurated', url: 'https://www.businessaajkal.com/politics/suvendu-inaugurates-rebuilt-dudhia-bridge-restoring-siliguri-mirik-connectivity-30670' },
      { id: 'mp2026', label: 'Millennium Post, 8 June 2026: Minister announces 2 new STPs in Mirik, reviews lake revival', url: 'https://www.millenniumpost.in/bengal/minister-announces-2-new-stps-in-mirik-reviews-lake-revival-663457' },
      { id: 'tender2026', label: 'PHE Kurseong Division tender, 2026: Water supply and sanitation for the Thurbo Tea Garden landslide victims settlement', url: 'https://www.tenderdetail.com/Indian-tender/landslide-tenders' },
    ],
  },
  {
    slug: 'swachh-bharat-mission',
    project: 'Swachh Bharat Mission (Urban)',
    title: 'Swachh Bharat Mission (Urban)',
    tagline: 'A cleaner Mirik through source segregation, reliable collection and responsible waste handling.',
    status: 'Programme guide',
    tone: 'lake',
    icon: 'lake',
    updated: 'September 2026',
    facts: [
      { value: '2 Oct 2014', label: 'National mission launched', src: 'sbm' },
      { value: '2.0', label: 'Current urban mission phase', src: 'sbm' },
      { value: '4 steps', label: 'Segregate, collect, process and dispose safely', src: 'mirik' },
    ],
    summary: [
      'Swachh Bharat Mission (Urban) is the national urban cleanliness mission. Its current phase focuses on garbage-free cities and on sanitation and waste systems that work every day.',
      'In Mirik, the programme connects household waste practices with municipal collection, processing and disposal. The local Solid Waste Management Bye-Laws set the rules residents and businesses need to follow.',
    ],
    problem: [
      { title: 'Waste reaches water and drains', text: 'When waste is mixed or dumped in public places, it can block drains and reach the lake and streams that are central to Mirik.', src: 'mirik' },
      { title: 'Collection only works with segregation', text: 'Separate handling of different waste streams starts at homes, shops and institutions; mixed waste makes recovery and safe processing harder.', src: 'sbm' },
      { title: 'Cleanliness is a shared service', text: 'The mission combines municipal systems with citizen participation, rather than treating waste as a problem for collection crews alone.', src: 'sbm' },
    ],
    scope: [
      { title: 'Source segregation', text: 'Keeping waste separated where it is generated so it can be collected and handled appropriately.', src: 'mirik' },
      { title: 'Door-to-door collection', text: 'Organised collection is one of the core municipal service steps needed to keep waste out of streets and drains.', src: 'sbm' },
      { title: 'Processing and recovery', text: 'The national mission promotes processing of municipal solid waste and reducing the waste that is sent for disposal.', src: 'sbm' },
      { title: 'Public sanitation', text: 'Functional sanitation facilities and the safe management of used water are part of the wider SBM-U framework.', src: 'sbm' },
    ],
    progress: [],
    timeline: [
      { date: '2 October 2014', title: 'SBM-Urban launched', text: 'The Government of India launched Swachh Bharat Mission (Urban) as a national urban sanitation and cleanliness mission.', state: 'done', src: 'sbm' },
      { date: 'October 2021', title: 'SBM-U 2.0 begins', text: 'The second phase set out the goal of making cities garbage-free and strengthening sustainable sanitation and waste systems.', state: 'done', src: 'sbm' },
      { date: '2023', title: 'Mirik waste-management rules', text: 'Mirik Municipal solid waste bye-laws provide the local framework for segregation, collection, processing and disposal.', state: 'done', src: 'mirik' },
      { date: 'Ongoing', title: 'Everyday implementation', text: 'The practical test is regular participation by residents, businesses and municipal service teams.', state: 'now', src: 'sbm' },
    ],
    agencies: [
      { name: 'Ministry of Housing and Urban Affairs', role: 'National mission and urban policy framework' },
      { name: 'West Bengal Urban Development & Municipal Affairs Department', role: 'State-level urban programme support' },
      { name: 'Mirik Municipality', role: 'Local waste-management services and enforcement' },
    ],
    residents: [
      { text: 'Use the correct bins and do not mix household waste where separate collection is available.', href: '/clean-mirik/', cta: 'Clean Mirik guidance' },
      { text: 'Do not throw waste into drains, streams or Sumendu Lake. Report illegal dumping to the municipality.', href: '/grievance/', cta: 'Report a problem' },
      { text: 'Businesses and institutions should follow the municipal Solid Waste Management Bye-Laws.', href: '/clean-mirik/#fines', cta: 'See the rules and fines' },
    ],
    challenges: [
      { title: 'No published Mirik performance dashboard', text: 'The municipality has not published current local collection, processing or segregation figures. This page therefore does not show an estimated progress percentage.' },
    ],
    sources: [
      { id: 'sbm', label: 'Swachh Bharat Mission (Urban) 2.0, Government of India: mission framework and progress', url: 'https://stagingwebsite.sbmurban.org/' },
      { id: 'mirik', label: 'Mirik Municipality: Solid Waste Management Bye-Laws and Clean Mirik guidance', url: '/clean-mirik/' },
    ],
  },
  {
    slug: 'urban-livelihoods-mission',
    project: 'National Urban Livelihoods Mission',
    title: 'National Urban Livelihoods Mission',
    tagline: 'Supporting urban households, self-employment, skills, shelters and street vendors.',
    status: 'Programme guide',
    tone: 'orange',
    icon: 'people',
    updated: 'September 2026',
    facts: [
      { value: 'DAY-NULM', label: 'Current name of the national mission', src: 'nulm' },
      { value: '6 areas', label: 'Institutions, skills, jobs, enterprises, shelters and vendors', src: 'guidelines' },
      { value: 'Local office', label: 'Executive Officer is listed as Mirik’s nodal officer', src: 'mirik' },
    ],
    summary: [
      'Deendayal Antyodaya Yojana–National Urban Livelihoods Mission (DAY-NULM) works to reduce poverty and vulnerability among urban poor households through sustainable self-employment and skilled wage-employment opportunities.',
      'The mission also supports grassroots institutions of the urban poor, shelters for people experiencing homelessness and measures for street vendors, including access to vending spaces, credit, skills and social-security linkages.',
    ],
    problem: [
      { title: 'Work can be insecure', text: 'Many urban households rely on informal or low-paid work with limited access to formal credit, skills development or social-security support.', src: 'nulm' },
      { title: 'Street vendors need legitimate space', text: 'Vendors are an important part of the urban economy but can face barriers to safe vending locations, finance and essential services.', src: 'vendors' },
      { title: 'Homelessness needs more than a bed', text: 'The mission framework calls for shelters with essential services, combined with pathways toward health, identity, work and social support.', src: 'nulm' },
    ],
    scope: [
      { title: 'Community institutions', text: 'Building and strengthening grassroots organisations of urban poor households, including women’s self-help groups and federations.', src: 'guidelines' },
      { title: 'Skills and employment', text: 'Training and support intended to improve access to skilled wage employment and livelihood opportunities.', src: 'guidelines' },
      { title: 'Self-employment and enterprises', text: 'Support for micro-enterprises and self-employment through programme components and financial inclusion.', src: 'guidelines' },
      { title: 'Street-vendor support', text: 'Vendor surveys, vending plans and links to credit, skills and social security are set out in the national guidance.', src: 'vendors' },
    ],
    progress: [],
    timeline: [
      { date: '2013', title: 'National Urban Livelihoods Mission begins', text: 'The urban livelihoods mission was introduced to support sustainable livelihoods for urban poor households.', state: 'done', src: 'nulm' },
      { date: '2014', title: 'DAY-NULM identity adopted', text: 'The mission became part of Deendayal Antyodaya Yojana–National Urban Livelihoods Mission.', state: 'done', src: 'nulm' },
      { date: 'Ongoing', title: 'Local programme coordination', text: 'Mirik lists the Executive Officer as the nodal officer for this scheme.', state: 'now', src: 'mirik' },
    ],
    agencies: [
      { name: 'Ministry of Housing and Urban Affairs', role: 'National DAY-NULM mission' },
      { name: 'State and city mission units', role: 'Programme implementation and monitoring' },
      { name: 'Mirik Municipality', role: 'Local coordination; Executive Officer listed as nodal officer' },
    ],
    residents: [
      { text: 'Ask the Municipality Office about the current local contact point for livelihood, training or vendor support.', href: '/contact/', cta: 'Office address and hours' },
      { text: 'Street vendors can ask about local vending arrangements, identification and available support schemes.' },
      { text: 'If you are facing a municipal service issue affecting your work or neighbourhood, send a grievance with the location.', href: '/grievance/', cta: 'Report a problem' },
    ],
    challenges: [
      { title: 'Local programme data has not been published', text: 'No current Mirik figures for self-help groups, training placements, loans, shelters or vendor support have been published on this website. They should be added when verified by the office.' },
    ],
    sources: [
      { id: 'nulm', label: 'DAY-NULM, Ministry of Housing and Urban Affairs: mission objectives', url: 'https://nulm.gov.in/default.aspx' },
      { id: 'guidelines', label: 'DAY-NULM: component guidelines and programme resources', url: 'https://nulm.gov.in/Guidelines.html' },
      { id: 'vendors', label: 'DAY-NULM: Support to Urban Street Vendors operational guidelines', url: 'https://nulm.gov.in/PDF/NULM_Mission/NULM-SUSV-Guidelines.pdf' },
      { id: 'mirik', label: 'Mirik Municipality: National Urban Livelihoods Mission overview', url: '/notices/#nulm' },
    ],
  },
  {
    slug: 'housing-for-all',
    project: 'Pradhan Mantri Awas Yojana (Urban)',
    title: 'Housing for All',
    tagline: 'Affordable urban housing and essential services for eligible households.',
    status: 'Programme guide',
    tone: 'blue',
    icon: 'people',
    updated: 'September 2026',
    facts: [
      { value: '2015', label: 'Original PMAY-Urban mission launched', src: 'pmay' },
      { value: '2024', label: 'PMAY-U 2.0 approved', src: 'pmay2' },
      { value: '1 crore', label: 'Additional urban households targeted by PMAY-U 2.0', src: 'pmay2' },
    ],
    summary: [
      'Pradhan Mantri Awas Yojana (Urban) is India’s urban affordable-housing mission. It links housing with the basic civic services that make a home liveable, including water, sanitation, electricity and access to local infrastructure.',
      'Mirik Municipality reports that it surveyed wards, held consultations with residents and local groups, and prepared a Housing for All Plan of Action with the State Urban Development Agency. The current site does not publish a verified household or construction count for Mirik.',
    ],
    problem: [
      { title: 'A house needs services too', text: 'Housing plans need to account for safe water, sanitation, electricity and access to essential physical and social infrastructure.', src: 'hfapoa' },
      { title: 'Urban need is diverse', text: 'Affordable housing requires different pathways for households seeking to build, buy or rent a home at an affordable cost.', src: 'pmay2' },
      { title: 'Planning must include residents', text: 'Housing for All Plans are designed as participatory city-level plans that identify need, basic services and delivery options.', src: 'hfapoa' },
    ],
    scope: [
      { title: 'Housing need assessment', text: 'Local surveys and city-level planning help identify households and the type of support needed.', src: 'hfapoa' },
      { title: 'Basic infrastructure', text: 'Housing plans should include sanitation, drinking water, electricity, roads and livelihood-supporting infrastructure.', src: 'hfapoa' },
      { title: 'Affordable ownership and rental options', text: 'PMAY-U 2.0 provides central assistance through States, Union Territories, implementing agencies and lenders for eligible housing options.', src: 'pmay2' },
      { title: 'Local plan coordination', text: 'Mirik’s published overview describes ward surveys and a Housing for All Plan of Action prepared with SUDA.', src: 'mirik' },
    ],
    progress: [],
    timeline: [
      { date: '2015', title: 'Housing for All mission', text: 'PMAY-Urban and the Housing for All mission framework were introduced for urban affordable housing.', state: 'done', src: 'pmay' },
      { date: '2015 onwards', title: 'City plans and project approvals', text: 'State and city agencies prepared housing plans and submitted project proposals under the mission framework.', state: 'done', src: 'pmay' },
      { date: '9 August 2024', title: 'PMAY-U 2.0 approved', text: 'The Union Cabinet approved PMAY-U 2.0 to support eligible urban households to construct, purchase or rent affordable housing.', state: 'done', src: 'pmay2' },
      { date: 'Ongoing', title: 'Mirik plan information', text: 'The municipality should publish verified local eligibility, application and delivery information when it is available.', state: 'now', src: 'mirik' },
    ],
    agencies: [
      { name: 'Ministry of Housing and Urban Affairs', role: 'National PMAY-U mission and guidance' },
      { name: 'State Urban Development Agency, West Bengal', role: 'State-level housing programme coordination' },
      { name: 'Mirik Municipality', role: 'Ward surveys and local Housing for All planning' },
    ],
    residents: [
      { text: 'Ask the Municipality Office whether there is a current PMAY-U application or survey process for Mirik.', href: '/contact/', cta: 'Office address and hours' },
      { text: 'Keep proof of identity, household details and property or tenancy documents ready if the office requests them.' },
      { text: 'Report an unsafe drain, broken water connection or other local service issue through the grievance form.', href: '/grievance/', cta: 'Report a problem' },
    ],
    challenges: [
      { title: 'No verified Mirik beneficiary data', text: 'This website does not have a current official list of eligible households, sanctioned homes, construction progress or application dates for Mirik. The office should confirm these before publishing them.' },
    ],
    sources: [
      { id: 'pmay', label: 'PMAY-Urban, Ministry of Housing and Urban Affairs: mission notices and guidance', url: 'https://www.pmay-urban.gov.in/hfa-important-notices-clarifications-and-formats' },
      { id: 'pmay2', label: 'PMAY-U 2.0, Ministry of Housing and Urban Affairs: approval and affordable-rental housing framework', url: 'https://pmay-urban.gov.in/ARH-EOI.pdf' },
      { id: 'hfapoa', label: 'PMAY-U: Housing for All Plan of Action reference', url: 'https://pmay-urban.gov.in/material/component5/HFAPoA%20Gwalior%20%28Sample%29.pdf' },
      { id: 'mirik', label: 'Mirik Municipality: Housing for All overview', url: '/notices/#pmay' },
    ],
  },
  {
    slug: 'community-health-care',
    project: 'Community Based Primary Health Care Services',
    title: 'Community Based Primary Health Care Services',
    tagline: 'Primary health care and referral support for vulnerable urban residents in West Bengal.',
    status: 'Programme guide',
    tone: 'lake',
    icon: 'people',
    updated: 'September 2026',
    facts: [
      { value: '2006', label: 'Programme initiated in West Bengal', src: 'suda' },
      { value: '71 ULBs', label: 'Current implementation listed by SUDA', src: 'suda' },
      { value: 'State-funded', label: 'Funded by Health & Family Welfare Department', src: 'suda' },
    ],
    summary: [
      'Community Based Primary Health Care Services (CBPHCS) is a West Bengal urban health programme. The State Urban Development Agency says it provides quality primary health care and referral services to urban poor people and other vulnerable sections of society.',
      'The programme is implemented in urban local bodies and is funded by the Department of Health and Family Welfare. Mirik’s published overview notes that the municipality has recruited for a contractual Health Officer under the scheme.',
    ],
    problem: [
      { title: 'Care should be close to home', text: 'Primary health services need to reach vulnerable households before a condition becomes an emergency or requires specialist care.', src: 'suda' },
      { title: 'Referral matters', text: 'The programme is designed to link primary care with referral services where a higher level of assessment or treatment is needed.', src: 'suda' },
      { title: 'Urban vulnerability is not limited to income', text: 'The stated programme focus includes urban poor people as well as other vulnerable sections of society.', src: 'suda' },
    ],
    scope: [
      { title: 'Community-level primary care', text: 'The programme supports access to quality primary health-care services within urban local-body areas.', src: 'suda' },
      { title: 'Referral support', text: 'People who need a higher level of care can be referred onward through the health system.', src: 'suda' },
      { title: 'Health-worker network', text: 'The West Bengal programme framework has used honorary health workers and other local support roles in urban local bodies.', src: 'history' },
      { title: 'Municipal coordination', text: 'Municipalities work with the Health and Family Welfare and urban-development departments to deliver the programme locally.', src: 'history' },
    ],
    progress: [],
    timeline: [
      { date: '2006', title: 'CBPHCS initiated', text: 'The State Urban Development Agency records the programme as having been initiated in 2006.', state: 'done', src: 'suda' },
      { date: '2006 onwards', title: 'Urban local-body implementation', text: 'The programme has been delivered through participating West Bengal urban local bodies with health-department funding.', state: 'done', src: 'suda' },
      { date: 'Ongoing', title: 'Local health coordination', text: 'Mirik’s published overview refers to a contractual Health Officer under the scheme.', state: 'now', src: 'mirik' },
    ],
    agencies: [
      { name: 'Department of Health and Family Welfare, Government of West Bengal', role: 'Programme funding' },
      { name: 'State Urban Development Agency, West Bengal', role: 'Programme information and urban local-body support' },
      { name: 'Mirik Municipality', role: 'Local coordination and Health Officer recruitment' },
    ],
    residents: [
      { text: 'For emergency care, call the emergency number or go to the nearest appropriate health facility.', href: '/emergency/', cta: 'Emergency numbers' },
      { text: 'Ask the Municipality Office for the current local CBPHCS contact or clinic information.', href: '/contact/', cta: 'Office address and hours' },
      { text: 'Report a sanitation, water or other municipal issue that is affecting your neighbourhood’s health.', href: '/grievance/', cta: 'Report a problem' },
    ],
    challenges: [
      { title: 'Local service details still need publication', text: 'This website does not yet list Mirik’s current clinic locations, outreach schedule, referral pathway or contact number. Those details should be confirmed with the health team before publication.' },
    ],
    sources: [
      { id: 'suda', label: 'State Urban Development Agency, West Bengal: CBPHCS programme details', url: 'https://sudawb.org/Program-Details/2' },
      { id: 'history', label: 'State Urban Development Agency, West Bengal: CBPHCS programme plan and urban health history', url: 'https://sudawb.org/uploads/digitaldoc/HEALTH/SUDA_HEALTH_72_08%20%283%20TO%203%29/CP_01.pdf' },
      { id: 'mirik', label: 'Mirik Municipality: CBPHCS overview', url: '/notices/#cbphcs' },
    ],
  },
];
