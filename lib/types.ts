export interface CityData {
  name: string
  tagline: string
  intro: string
  detail: string
  highlights: string[]
  localTips: string[]
  priceRange: string
  schoolDistrict: string
  commute: string
  image: string
  testimonial: { quote: string; author: string }
}

export interface RentalCityMeta {
  name: string
  image: string
  intro: string
  priceRange: string
  petPolicy: string
  leaseTerms: string
}

