import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import { Avatar, Box, Breadcrumbs, Link, Typography } from '@mui/material'

interface TopBarProps {
  reportTitle: string
}

export function TopBar({ reportTitle }: TopBarProps) {
  return (
    <Box
      sx={{
        height: 60,
        minHeight: 60,
        bgcolor: 'las.sidebarDark',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pl: 10 }}>
        <Box sx={{ bgcolor: '#444', borderRadius: '0 4px 4px 0', width: 18, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', ml: -2 }}>
          <KeyboardArrowUpIcon sx={{ color: 'white', fontSize: 20, transform: 'rotate(90deg)' }} />
        </Box>
        <Breadcrumbs
          separator="/"
          sx={{
            '& .MuiBreadcrumbs-separator': { color: '#373737', mx: 0.5 },
            '& .MuiTypography-root': { fontSize: 18, fontFamily: '"Source Sans Pro", sans-serif' },
          }}
        >
          <Link href="#" underline="always" sx={{ color: 'las.breadcrumbLink', fontSize: 18 }}>
            Author
          </Link>
          <Link href="#" underline="always" sx={{ color: 'las.breadcrumbLink', fontSize: 18 }}>
            Draft
          </Link>
          <Typography color="#373737">{reportTitle}</Typography>
        </Breadcrumbs>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pr: 2 }}>
        <NotificationsNoneOutlinedIcon sx={{ color: 'white' }} />
        <Avatar sx={{ width: 32, height: 32, bgcolor: '#555' }}>JV</Avatar>
        <Typography variant="body2" sx={{ color: 'white' }}>
          Jonathan Viewer
        </Typography>
      </Box>
    </Box>
  )
}
