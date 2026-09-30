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
  icon: 'water' | 'lake' | 'landslide';
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
];
