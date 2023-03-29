export const common = {
  black: '#000000',
  white: '#ffffff',
}

export const blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
}

export const red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
}

export const green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
}

export const yellow = {
  50: '#fffde7',
  100: '#fff9c4',
  200: '#fff59d',
  300: '#fff176',
  400: '#ffee58',
  500: '#ffeb3b',
  600: '#fdd835',
  700: '#fbc02d',
  800: '#f9a825',
  900: '#f57f17',
}

export const orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
}

export const grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
}

export const colors = {
  common,
  blue,
  red,
  green,
  yellow,
  orange,
  grey,
}

export type Shades = keyof typeof common | keyof typeof blue | keyof typeof red | keyof typeof green | keyof typeof yellow | keyof typeof orange | keyof typeof grey

export type Colors = typeof colors

// Color palette v2
const primaryColor = {
  lightest: '#f0f4f8',
  light: '#c8d6e5',
  main: '#2c3e50',
  dark: '#1c2833',
  darkest: '#0e151a',
};

const secondaryColor = {
  lightest: '#f8e7da',
  light: '#f0c38e',
  main: '#e67e22',
  dark: '#ba5a19',
  darkest: '#8e3f11',
};

const accentColor = {
  lightest: '#eff7fa',
  light: '#9bd5e1',
  main: '#22a7f0',
  dark: '#1977b3',
  darkest: '#104c75',
};

const successColor = {
  lightest: '#edf7ed',
  light: '#a3e6a3',
  main: '#27ae60',
  dark: '#1e8449',
  darkest: '#196f3d',
};

const warningColor = {
  lightest: '#fdebd0',
  light: '#f5b041',
  main: '#f39c12',
  dark: '#b9770e',
  darkest: '#7e5109',
};

const errorColor = {
  lightest: '#fadbd8',
  light: '#f1948a',
  main: '#e74c3c',
  dark: '#ba372a',
  darkest: '#922b21',
};

const backgroundColor = {
  light: '#f7f9fa',
  main: '#ffffff',
};

const textColor = {
  main: '#2c3e50',
  light: '#546778',
};

export const colorPalette = {
  primary: primaryColor,
  secondary: secondaryColor,
  accent: accentColor,
  success: successColor,
  warning: warningColor,
  error: errorColor,
  background: backgroundColor,
  text: textColor,
  common,
};
