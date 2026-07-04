/**
 * Tidox brand theme — colors from online-tidox-player-cast-android colors.xml
 * Applied via Astryx defineTheme + theme build.
 */
import { defineTheme } from '@astryxdesign/core/theme';

export const tidoxTheme = defineTheme({
  name: 'tidox',

  color: {
    accent: '#F44336',
    neutralStyle: 'warm',
  },

  typography: {
    scale: { base: 16, ratio: 1.2 },
    body: {
      family: 'Inter',
      fallbacks:
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    },
    heading: {
      family: 'Satoshi',
      fallbacks: 'Inter, ui-sans-serif, system-ui, sans-serif',
      weights: { 3: 'bold', 4: 'bold' },
    },
  },

  radius: { base: 8, multiplier: 1 },

  tokens: {
    '--color-accent': ['#F44336', '#F44336'],
    '--color-accent-muted': ['#F4433633', '#F4433640'],
    '--color-on-accent': ['#FFFFFF', '#FFFFFF'],
    '--color-background-body': ['#303030', '#303030'],
    '--color-background-surface': ['#424242', '#424242'],
    '--color-background-card': ['#424242', '#2A2A2A'],
    '--color-background-popover': ['#424242', '#2A2A2A'],
    '--color-background-muted': ['#2A2A2A', '#1A1A1A'],
    '--color-text-primary': ['#F5F5F5', '#F5F5F5'],
    '--color-text-secondary': ['#CCCCCC', '#CCCCCC'],
    '--color-text-disabled': ['#A3A3A3', '#A3A3A3'],
    '--color-text-accent': ['#FF8A80', '#FF8A80'],
    '--color-icon-primary': ['#F5F5F5', '#F5F5F5'],
    '--color-icon-secondary': ['#CCCCCC', '#CCCCCC'],
    '--color-icon-accent': ['#F44336', '#F44336'],
    '--color-border': ['#FFFFFF19', '#FFFFFF19'],
    '--color-border-emphasized': ['#FFFFFF33', '#FFFFFF33'],
    '--color-success': ['#32CD32', '#32CD32'],
    '--color-error': ['#FF5252', '#FF5252'],
    '--color-warning': ['#EEFF41', '#EEFF41'],
    '--color-background-red': ['#F4433633', '#F4433633'],
    '--color-border-red': ['#D32F2F', '#D32F2F'],
    '--color-text-red': ['#FF8A80', '#FF8A80'],
  },
});
