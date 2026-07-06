import { Box, Button, Link, Typography } from '@mui/material'

interface FooterBarProps {
  onAction: (action: string) => void
}

export function FooterBar({ onAction }: FooterBarProps) {
  return (
    <Box
      sx={{
        height: 60,
        minHeight: 60,
        bgcolor: 'las.footerDark',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 2,
      }}
    >
      <Box sx={{ display: 'flex', gap: 1 }}>
        {['REPORT', 'PREVIEW', 'ADD/EDIT LABELS'].map((label) => (
          <Button
            key={label}
            variant="outlined"
            onClick={() => onAction(label)}
            sx={{
              color: 'white',
              borderColor: 'white',
              '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.08)' },
            }}
          >
            {label}
          </Button>
        ))}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <Typography variant="body2" sx={{ color: 'white' }}>
          Review
        </Typography>
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault()
            onAction('Report Production Release Checklist')
          }}
          sx={{ color: 'primary.light', textDecorationColor: 'primary.light' }}
        >
          Report Production Release Checklist
        </Link>
      </Box>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          variant="outlined"
          onClick={() => onAction('SAVE & VALIDATE')}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.08)' },
          }}
        >
          SAVE & VALIDATE
        </Button>
        <Button variant="contained" color="primary" onClick={() => onAction('SEND TO')}>
          SEND TO
        </Button>
      </Box>
    </Box>
  )
}
