const colors = {
  brand: {
    primary: {
      '50': '#e7e9f2',
      '100': '#c4c7e0',
      '200': '#9da3cb',
      '300': '#7880b5',
      '400': '#5d64a6',
      '500': '#434a98',
      '600': '#3d438f',
      '700': '#353983',
      '800': '#2d3077',
      '900': '#211f61',
    },
    secondary: {
      '50': '#f7f1e2',
      '100': '#ecdbb7',
      '200': '#e0c389',
      '300': '#d5ad5e',
      '400': '#ce9d43',
      '500': '#c78e34',
      '600': '#c3852f',
      '700': '#bc782a',
      '800': '#b46b26',
      '900': '#a75922',
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
