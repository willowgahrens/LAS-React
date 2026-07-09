import CloseIcon from '@mui/icons-material/Close'
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined'
import { Avatar, Box, Chip, Typography } from '@mui/material'
import type { ClassificationChip } from '../../types'

interface ClassificationBarProps {
  chips: ClassificationChip[]
  onRemoveChip: (id: string) => void
}

export function ClassificationBar({ chips, onRemoveChip }: ClassificationBarProps) {
  return (
    <Box sx={{ pb: 1 }}>
      <Box
        sx={{
          bgcolor: 'las.classificationGreen',
          borderRadius: '0 0 10px 10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1.5,
          py: 1.25,
          mx: 0,
        }}
      >
        <Typography variant="body2" sx={{ color: 'white' }}>
          CLASSIFICATION
        </Typography>
        <Typography variant="body2" sx={{ color: 'white' }}>
          |
        </Typography>
        <Box
          sx={{
            bgcolor: 'las.classificationGreenDark',
            border: '1px solid #d8e6d5',
            borderRadius: '5px',
            px: 1.5,
            py: 0.5,
          }}
        >
          <Typography variant="body2" sx={{ color: 'white' }}>
            VIEW CLASSIFICATION
          </Typography>
        </Box>
      </Box>

      <Box sx={{ px: 2, pt: 1.5, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            bgcolor: '#333',
            borderRadius: '5px',
            px: 1.25,
            py: 0.75,
            alignSelf: 'flex-start',
          }}
        >
          <LibraryBooksOutlinedIcon sx={{ color: 'white', fontSize: 20 }} />
          <Typography variant="caption" sx={{ color: 'white', fontWeight: 500 }}>
            BUNDLED REPORT
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
          {chips.map((chip) => (
            <Box key={chip.id} sx={{ display: 'flex', alignItems: 'center' }}>
              <Chip
                label={
                  <Box>
                    <Typography component="span" sx={{ fontSize: 10, opacity: 0.54, display: 'block', lineHeight: 1, pt: '5px' }}>
                      CLASS
                    </Typography>
                    <Typography component="span" sx={{ fontSize: 10, fontWeight: 500, lineHeight: 1 }}>
                      {chip.label}
                    </Typography>
                  </Box>
                }
                onDelete={() => onRemoveChip(chip.id)}
                deleteIcon={<CloseIcon sx={{ fontSize: 14, color: chip.textColor ?? 'white' }} />}
                sx={{
                  bgcolor: chip.color,
                  color: chip.textColor ?? 'white',
                  height: 'auto',
                  minHeight: 30,
                  borderRadius: '5px',
                  '& .MuiChip-label': { px: 1.25 },
                }}
              />
            </Box>
          ))}

          <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: '#2a7478', fontSize: 12 }}>RR</Avatar>
            <Typography variant="subtitle2" sx={{ color: '#333' }}>
              ROUTINE
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
