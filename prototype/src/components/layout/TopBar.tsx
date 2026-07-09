import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import { Avatar, Box, Typography } from '@mui/material'

export function TopBar() {
  return (
    <Box
      sx={{
        height: 60,
        minHeight: 60,
        bgcolor: 'las.sidebarDark',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: 2,
      }}
    >
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
