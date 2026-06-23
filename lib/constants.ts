export const CITY_SLUGS = [
  'clear-lake-city', 'seabrook', 'kemah', 'el-lago', 'nassau-bay',
  'taylor-lake-village', 'webster', 'league-city', 'friendswood', 'pearland',
  'galveston', 'dickinson', 'baytown', 'clear-lake-shores', 'deer-park',
  'la-porte', 'pasadena', 'san-leon', 'shoreacres', 'tiki-island', 'texas-city',
] as const

export type CitySlug = (typeof CITY_SLUGS)[number]

export const NAV_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Buying', href: '/home-buyers' },
  { label: 'Selling', href: '/seller-services' },
  { label: 'Communities', href: '/communities' },
  { label: 'Reviews', href: '/realtor-reviews' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
] as const
