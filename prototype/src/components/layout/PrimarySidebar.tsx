import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined'
import { Box, Typography } from '@mui/material'

const navItems = [
  { id: 'author', label: 'AUTHOR', icon: EditNoteOutlinedIcon, active: true },
  { id: 'templates', label: 'TEMPLATES', icon: null, active: false },
]

export function PrimarySidebar() {
  return (
    <Box
      sx={{
        width: 80,
        minWidth: 80,
        bgcolor: 'las.sidebarDark',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRight: '1px solid #222',
      }}
    >
      <Box sx={{ height: 60, minHeight: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', bgcolor: '#222', flexShrink: 0 }}>
        <AppsOutlinedIcon sx={{ color: 'white', fontSize: 28 }} />
      </Box>

      <Box sx={{ flex: 1, width: '100%', bgcolor: 'las.sidebarLavender', pt: 2 }}>
        {navItems.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              py: 1.5,
              position: 'relative',
              ...(item.active && {
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: 8,
                  bottom: 8,
                  width: 4,
                  bgcolor: '#444',
                  borderRadius: '0 4px 4px 0',
                },
              }),
            }}
          >
            {item.icon ? (
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  border: item.active ? '2px solid #555' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <item.icon sx={{ color: item.active ? '#555' : '#555', fontSize: 28 }} />
              </Box>
            ) : (
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  border: '2px dashed #555',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ color: '#555', fontWeight: 500, fontSize: 15 }}>T</Typography>
              </Box>
            )}
            <Typography
              variant="caption"
              sx={{
                mt: 0.5,
                color: item.active ? '#e3cce6' : '#555',
                fontSize: 10,
                letterSpacing: 0.4,
                textAlign: 'center',
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ width: '100%', bgcolor: 'las.sidebarLavender', pb: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box
          sx={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            bgcolor: '#333',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: 24,
          }}
        >
          +
        </Box>
        <Typography variant="caption" sx={{ mt: 1, color: '#333', fontSize: 10 }}>
          AUTHOR
        </Typography>
      </Box>
    </Box>
  )
}
