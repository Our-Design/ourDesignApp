export const Colors = {
  // Base
  background: '#ffffff', // --background
  text: '#171717', // --foreground
  heading: '#0d0d0d', // --heading

  // Brand
  primary: '#011640', // --primary
  primaryLight: '#1a2a5c', // Lighter shade of primary
  primaryGradient: '#004b87', // For gradients
  secondary: '#FFF7F0', // --secondary
  accent: '#848484', // --accent

  // UI
  muted: '#f5f5f5', // --muted
  soft: '#FFD6D6', // --soft
  border: '#dddddd', // --border
  shadow: 'rgba(0, 0, 0)', // --shadow

  // Tabs, cards, input fields
  card: '#FDFDFD',
  subText: '#848484', // reuse --accent
  error: '#FF3B30',
  success: '#28a745',
  warning: '#ffc107',

  // New vibrant colors for buttons and cards
  buttonPrimary: '#007AFF', // iOS blue - vibrant primary button
  buttonSecondary: '#5856D6', // Purple - secondary actions
  buttonSuccess: '#34C759', // Green - success/positive actions
  buttonWarning: '#FF9500', // Orange - warning actions
  buttonDanger: '#FF3B30', // Red - destructive actions
  buttonDangerMuted: '#DC3545', // Less vibrant red for logout/unavailable

  // Card accents
  cardAccent: '#F2F2F7', // Light gray for card backgrounds
  cardBorder: '#E5E5EA', // Subtle borders  // Gradients
  gradientStart: '#007AFF',
  gradientEnd: '#5856D6',

  // Optional new semantic names
  headerBackground: '#FFF7F1', // use secondary for light warm headers
  webViewBackground: '#ededed',
  lighterHeader: '#FFF9F6',

  transparent: 'rgba(0,0,0,0)', // fully transparent
  semiTransparent: 'rgba(255,255,255,0.2)',
};

export const FontSize = {
  x1: 1,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
};

export const Spacing = {
  na: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const Radius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 20,
  max: 40,
};

export const FontWeight = {
  normal: '400',
  medium: '500',
  bold: '700',
};

export const FontFamily = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  bold: 'Poppins-Bold',
};
