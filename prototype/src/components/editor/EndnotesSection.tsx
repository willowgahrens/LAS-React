import AddIcon from '@mui/icons-material/Add'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import EditIcon from '@mui/icons-material/Edit'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import { Box, Button, Collapse, IconButton, Typography } from '@mui/material'
import type { Endnote } from '../../types'

interface EndnotesSectionProps {
  endnotes: Endnote[]
  expanded: boolean
  onToggle: () => void
  onAdd: () => void
  onRemove: (id: string) => void
}

export function EndnotesSection({ endnotes, expanded, onToggle, onAdd, onRemove }: EndnotesSectionProps) {
  return (
    <Box sx={{ px: 2, pt: 2, pb: 2 }}>
      <Box
        sx={{
          border: '1px solid #bababa',
          borderRadius: '5px',
          bgcolor: 'white',
          overflow: 'hidden',
        }}
      >
        <Box
          onClick={onToggle}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            px: 2,
            py: 1.5,
            cursor: 'pointer',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.02)' },
          }}
        >
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          <Typography variant="body1">Endnotes ({endnotes.length})</Typography>
        </Box>

        <Collapse in={expanded}>
          {endnotes.map((note) => (
            <Box
              key={note.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 2,
                pb: 1.5,
                pl: 5,
              }}
            >
              <Typography variant="body2">{note.text}</Typography>
              <Box>
                <IconButton size="small">
                  <CommentOutlinedIcon fontSize="small" />
                </IconButton>
                <IconButton size="small">
                  <StarBorderOutlinedIcon fontSize="small" />
                </IconButton>
                <IconButton size="small">
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" onClick={() => onRemove(note.id)}>
                  <DeleteForeverOutlinedIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Collapse>
      </Box>

      <Button
        startIcon={<AddIcon />}
        onClick={onAdd}
        sx={{ mt: 1, color: 'primary.main', fontWeight: 600 }}
      >
        Add Endnote
      </Button>
    </Box>
  )
}
