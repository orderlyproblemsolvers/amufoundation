export const PROGRAMS = {
  'music-school': {
    slug: 'music-school',
    collectionKey: 'music',
    name: 'B&S Music School',
    tagline: 'Music Program',
    icon: 'i-lucide-music',
    description: 'Experience the transformative power of music in building communities and fostering creativity. Our comprehensive music program offers professional instruction across multiple instruments and vocal training.',
    ageGroup: 'Children and youths',
    features: [
      'Professional Instructors',
      'All Skill Levels',
      'Performance Opportunities',
      'Community Building'
    ],
    theme: {
      gradient: 'from-rose-500 to-rose-700',
      bg: 'bg-rose-700',
      bgHover: 'hover:bg-rose-800',
      bgLight: 'bg-rose-50',
      bgLighter: 'bg-rose-100',
      text: 'text-rose-700',
      border: 'border-rose-100',
      ring: 'focus:ring-rose-700',
      outlineBtn: 'border-rose-700 text-rose-700 hover:bg-rose-700 hover:text-white'
    }
  },
  'sports-camp': {
    slug: 'sports-academy',
    collectionKey: 'sports',
    name: 'B&S Sports Academy',
    tagline: 'Sports Program',
    icon: 'i-lucide-trophy',
    description: 'Empower young athletes through comprehensive sports training and character development programs. Our camp focuses on building both physical excellence and strong moral character.',

    ageGroup: 'Children and youths',
    features: [
      'Expert Coaching',
      'Character Building',
      'Team Sports',
      'Leadership Training'
    ],
    theme: {
      gradient: 'from-blue-500 to-blue-700',
      bg: 'bg-blue-600',
      bgHover: 'hover:bg-blue-700',
      bgLight: 'bg-blue-50',
      bgLighter: 'bg-blue-100',
      text: 'text-blue-600',
      border: 'border-blue-100',
      ring: 'focus:ring-blue-600',
      outlineBtn: 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
    }
  }
}

export const usePrograms = () => {
  const getProgram = (slug) => PROGRAMS[slug] || null
  const allPrograms = Object.values(PROGRAMS)
  return { PROGRAMS, getProgram, allPrograms }
}