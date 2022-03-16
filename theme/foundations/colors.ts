const colors = {
  brand: {
    primary: {
      50: '#ebebff',
      100: '#c6c5ef',
      200: '#a09ee0',
      300: '#7a77d3',
      400: '#5550c6',
      500: '#3c37ad',
      600: '#2f2b87',
      700: '#211f61',
      800: '#13123c',
      900: '#070519',
    },
    secondary: {
      50: '#fff2df',
      100: '#f4dabb',
      200: '#e9c394',
      300: '#dfab6c',
      400: '#d59343',
      500: '#bc792a',
      600: '#925e20',
      700: '#694314',
      800: '#412708',
      900: '#1b0b00',
    },
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
  },
  'bg-canvas': {
    default: 'gray.50',
    _dark: 'gray.900',
  },
  'bg-surface': {
    default: 'white',
    _dark: 'gray.800',
  },
  'bg-subtle': {
    default: 'gray.50',
    _dark: 'gray.700',
  },
  'bg-muted': {
    default: 'gray.100',
    _dark: 'gray.600',
  },

  default: {
    default: 'gray.900',
    _dark: 'white',
  },
  inverted: {
    default: 'white',
    _dark: 'gray.900',
  },
  emphasized: {
    default: 'gray.700',
    _dark: 'gray.100',
  },
  muted: {
    default: 'gray.600',
    _dark: 'gray.300',
  },
  subtle: {
    default: 'gray.500',
    _dark: 'gray.400',
  },
  border: {
    default: 'gray.200',
    _dark: '#333e51', // lighten('gray.700', 3)(props.theme)
  },
  accent: {
    default: 'brand.500',
    _dark: 'brand.200',
  },
  success: {
    default: 'green.600',
    _dark: 'green.200',
  },
  error: {
    default: 'red.600',
    _dark: 'red.200',
  },
  'bg-accent': 'brand.600',
  'bg-accent-subtle': 'brand.500',
  'bg-accent-muted': 'brand.400',
  'on-accent': 'white',
  'on-accent-muted': 'brand.50',
  'on-accent-subtle': 'brand.100',
}

export default colors
