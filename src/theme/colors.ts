export const colors = {
  // Primary Colors
  primary: '#2196F3',
  primaryDark: '#1976D2',
  primaryLight: '#64B5F6',

  // Secondary Colors
  secondary: '#03A9F4',
  accent: '#00BCD4',

  // Status Colors
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',

  // Water Levels
  water: {
    empty: '#E3F2FD',
    low: '#90CAF9',
    medium: '#42A5F5',
    high: '#1E88E5',
    full: '#1565C0',
  },

  // Neutrals
  white: '#FFFFFF',
  black: '#000000',
  background: '#F5F5F5',
  surface: '#FFFFFF',
  card: '#FFFFFF',

  // Text
  text: {
    primary: '#212121',
    secondary: '#757575',
    disabled: '#BDBDBD',
    hint: '#9E9E9E',
    inverse: '#FFFFFF',
  },

  // Borders
  border: '#E0E0E0',
  divider: '#EEEEEE',

  // Shadows
  shadow: 'rgba(0, 0, 0, 0.1)',

  // Gradients
  gradients: {
    blue: ['#2196F3', '#1976D2'],
    water: ['#00BCD4', '#2196F3'],
    success: ['#4CAF50', '#388E3C'],
  },
};

export type Colors = typeof colors;
