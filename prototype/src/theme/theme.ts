import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    las: {
      sidebarDark: string
      sidebarLavender: string
      panelGray: string
      classificationGreen: string
      classificationGreenDark: string
      chipBlue: string
      chipOrange: string
      chipRed: string
      chipBlack: string
      bundleSelected: string
      bundleSelectedBorder: string
      breadcrumbLink: string
      footerDark: string
    }
  }
  interface PaletteOptions {
    las?: Palette['las']
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#7b1fa2',
      dark: '#4a148c',
      light: '#ce93d8',
    },
    secondary: {
      main: '#1976d2',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: '#32383e',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    las: {
      sidebarDark: '#333333',
      sidebarLavender: '#e3cce6',
      panelGray: '#eff0f0',
      classificationGreen: '#008100',
      classificationGreenDark: '#006300',
      chipBlue: '#0080bb',
      chipOrange: '#f49e40',
      chipRed: '#b71319',
      chipBlack: '#222222',
      bundleSelected: '#fbf2fa',
      bundleSelectedBorder: '#975ea5',
      breadcrumbLink: '#00669f',
      footerDark: '#333333',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      fontFamily: '"Inter", "Roboto", sans-serif',
      fontWeight: 600,
      fontSize: 14,
      lineHeight: '14px',
      letterSpacing: 0,
      textTransform: 'none',
    },
    h5: {
      fontFamily: '"Source Sans Pro", "Roboto", sans-serif',
      fontSize: 25,
      fontWeight: 400,
      color: '#373737',
      letterSpacing: '0.275px',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          minHeight: 40,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: 2,
            borderColor: '#bababa',
          },
        },
      },
    },
  },
})
