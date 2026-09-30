// Sub-pages of the site. `num` is the segment number shown on each page header.
export const pages = [
  { slug: 'about', num: '01', label: 'About Mirik', blurb: 'History, census, places to see, transport, health and schools.' },
  { slug: 'administration', num: '02', label: 'Administration', blurb: 'Officers, wards and jurisdiction.' },
  { slug: 'services', num: '03', label: 'Services & Projects', blurb: 'Online services, AMRUT, sanitation, housing and health schemes.' },
  { slug: 'clean-mirik', num: '04', label: 'Clean Mirik', blurb: 'Fines and waste segregation rules.' },
  { slug: 'emergency', num: '05', label: 'Emergency', blurb: 'Helplines and landslide advice.' },
  { slug: 'grievance', num: '06', label: 'Grievance', blurb: 'Report a problem in your ward.' },
  { slug: 'contact', num: '07', label: 'Contact', blurb: 'Office address, phones and map.' },
  { slug: 'notices', num: '08', label: 'Notices', blurb: 'Official notices.' },
  { slug: 'policies', num: '09', label: 'Website policies', blurb: 'Privacy, terms and accessibility.' },
] as const;

export const accents: Record<string, [string, string]> = {
  about: ['#1f4d3a', '#e6eee8'],
  administration: ['#6a4c93', '#eee8f5'],
  services: ['#2f6f8f', '#e5f0f5'],
  'clean-mirik': ['#1f6b47', '#e0f0e7'],
  emergency: ['#b3471d', '#fbece5'],
  grievance: ['#a2416b', '#f6e6ee'],
  contact: ['#1f4d3a', '#e6eee8'],
  notices: ['#2f6f8f', '#e5f0f5'],
  policies: ['#5a6b64', '#eef1ee'],
};

// Banner photo (and focal point) behind each sub-page header.
export const banners: Record<string, [string, string]> = {
  about: ['hero.jpg', 'center 60%'],
  administration: ['monastery.jpg', 'center 40%'],
  services: ['tea.jpg', 'center 70%'],
  notices: ['garden.jpg', 'center 45%'],
  policies: ['tea.jpg', 'center 60%'],
  'clean-mirik': ['tea.jpg', 'center 90%'],
  emergency: ['hero.jpg', 'center 25%'],
  grievance: ['monastery.jpg', 'center 85%'],
  contact: ['lake.jpg', 'center 70%'],
};

// Sections inside each page, shown in the navbar dropdown.
export const sections: Record<string, { href: string; label: string }[]> = {
  about: [
    { href: '#about', label: 'About Mirik' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#town-guide', label: 'Town Guide' },
    { href: '#places', label: 'Places to see' },
    { href: '#nearby', label: 'Nearby' },
    { href: '#health', label: 'Health care' },
    { href: '#schools', label: 'Schools and college' },
  ],
  administration: [
    { href: '#officers', label: 'Officers' },
    { href: '#wards', label: 'Wards' },
    { href: '#jurisdiction', label: 'Jurisdiction' },
    { href: '#offices', label: 'Other government offices in Mirik' },
  ],
  services: [
    { href: '#services', label: 'Citizen services' },
    { href: '#projects', label: 'Projects under way' },
    { href: '#schemes', label: 'Special projects and schemes' },
    { href: '#faq', label: 'Common questions' },
  ],
  'clean-mirik': [
    { href: '#fines', label: 'Fines' },
    { href: '#segregation', label: 'Waste segregation' },
  ],
  // Contact now scrolls to the footer, so it has no dropdown. Restore this if the Contact page comes back.
  // contact: [
  //   { href: '#details', label: 'Contact details' },
  //   { href: '#rti', label: 'Right to Information' },
  //   { href: '#links', label: 'Useful links' },
  //   { href: '#map', label: 'Map' },
  // ],
};
