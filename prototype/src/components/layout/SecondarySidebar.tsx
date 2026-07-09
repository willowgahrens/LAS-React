import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined'
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined'
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined'
import HubOutlinedIcon from '@mui/icons-material/HubOutlined'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined'
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined'
import { Box, Typography } from '@mui/material'
import type { SecondaryTool } from '../../types'

const tools: { id: SecondaryTool; label: string; icon: typeof HubOutlinedIcon }[] = [
  { id: 'sources', label: 'SOURCES', icon: HubOutlinedIcon },
  { id: 'contributors', label: 'CONTRIBUTORS', icon: ContactEmergencyOutlinedIcon },
  { id: 'report-info', label: 'REPORT INFO', icon: InsertDriveFileOutlinedIcon },
  { id: 'recipients', label: 'RECIPIENTS', icon: InsertDriveFileOutlinedIcon },
  { id: 'entities', label: 'ENTITIES', icon: HubOutlinedIcon },
  { id: 'media', label: 'MEDIA', icon: PhotoOutlinedIcon },
  { id: 'annotations', label: 'ANNOTATIONS', icon: CommentOutlinedIcon },
  { id: 'bundle', label: 'BUNDLE', icon: LibraryBooksOutlinedIcon },
  { id: 'history', label: 'HISTORY', icon: HistoryOutlinedIcon },
]

interface SecondarySidebarProps {
  activeTool: SecondaryTool
  onToolChange: (tool: SecondaryTool) => void
}

export function SecondarySidebar({ activeTool, onToolChange }: SecondarySidebarProps) {
  return (
    <Box
      sx={{
        width: 85,
        minWidth: 85,
        bgcolor: 'las.sidebarDark',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 2,
        gap: 2.5,
      }}
    >
      {tools.map((tool) => {
        const isActive = activeTool === tool.id
        const isBundle = tool.id === 'bundle'

        return (
          <Box
            key={tool.id}
            onClick={() => onToolChange(tool.id)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0.5,
              cursor: 'pointer',
              width: '100%',
              py: isBundle && isActive ? 1 : 0,
              bgcolor: isBundle && isActive ? 'las.panelGray' : 'transparent',
              transition: 'background-color 0.2s',
              '&:hover': { opacity: 0.85 },
            }}
          >
            <tool.icon sx={{ color: isBundle && isActive ? '#333' : 'white', fontSize: 24 }} />
            <Typography
              variant="caption"
              sx={{
                color: isBundle && isActive ? '#333' : 'white',
                fontSize: 9,
                letterSpacing: 0.3,
                textAlign: 'center',
                px: 0.25,
                lineHeight: 1.2,
              }}
            >
              {tool.label}
            </Typography>
          </Box>
        )
      })}
    </Box>
  )
}
