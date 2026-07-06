import CloseIcon from '@mui/icons-material/Close'
import { Autocomplete, Box, TextField, Typography } from '@mui/material'
import { ClassificationBar } from './ClassificationBar'
import { EditorToolbar } from './EditorToolbar'
import { EndnotesSection } from './EndnotesSection'
import type { ClassificationChip, Endnote } from '../../types'
import { missionOptions, reportTypeOptions } from '../../data/mockData'

interface ReportEditorProps {
  reportTitle: string
  mission: string
  reportType: string
  title: string
  caveat: string
  body: string
  chips: ClassificationChip[]
  endnotes: Endnote[]
  endnotesExpanded: boolean
  onMissionChange: (value: string) => void
  onReportTypeChange: (value: string) => void
  onTitleChange: (value: string) => void
  onCaveatChange: (value: string) => void
  onBodyChange: (value: string) => void
  onRemoveChip: (id: string) => void
  onToggleEndnotes: () => void
  onAddEndnote: () => void
  onRemoveEndnote: (id: string) => void
}

export function ReportEditor({
  reportTitle,
  mission,
  reportType,
  title,
  caveat,
  body,
  chips,
  endnotes,
  endnotesExpanded,
  onMissionChange,
  onReportTypeChange,
  onTitleChange,
  onCaveatChange,
  onBodyChange,
  onRemoveChip,
  onToggleEndnotes,
  onAddEndnote,
  onRemoveEndnote,
}: ReportEditorProps) {
  const wordCount = body.trim() ? body.trim().split(/\s+/).length : 0

  return (
    <Box sx={{ flex: 1, overflow: 'auto', bgcolor: 'white', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ px: 3, pt: 2, pb: 1 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Autocomplete
            fullWidth
            options={missionOptions}
            value={mission}
            onChange={(_, value) => onMissionChange(value ?? '')}
            renderInput={(params) => <TextField {...params} label="Mission*" />}
            disableClearable
          />
          <Autocomplete
            fullWidth
            options={reportTypeOptions}
            value={reportType}
            onChange={(_, value) => onReportTypeChange(value ?? '')}
            renderInput={(params) => <TextField {...params} label="Report Type*" />}
            disableClearable
          />
        </Box>

        <Typography variant="h5" sx={{ mb: 2 }}>
          {reportTitle}
        </Typography>
      </Box>

      <Box
        sx={{
          mx: 3,
          mb: 2,
          bgcolor: 'las.panelGray',
          border: '1px solid #d1d1d1',
          borderRadius: '20px',
          overflow: 'hidden',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: 500,
        }}
      >
        <ClassificationBar chips={chips} onRemoveChip={onRemoveChip} />

        <Box sx={{ px: 2, py: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <TextField
            fullWidth
            label="Title*"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            slotProps={{
              input: {
                endAdornment: title ? (
                  <CloseIcon sx={{ cursor: 'pointer', fontSize: 20, color: 'action.active' }} onClick={() => onTitleChange('')} />
                ) : undefined,
              },
            }}
          />
          <TextField
            fullWidth
            label="Add Caveat"
            value={caveat}
            onChange={(e) => onCaveatChange(e.target.value)}
            slotProps={{
              input: {
                endAdornment: caveat ? (
                  <CloseIcon sx={{ cursor: 'pointer', fontSize: 20, color: 'action.active' }} onClick={() => onCaveatChange('')} />
                ) : undefined,
              },
            }}
          />
        </Box>

        <EditorToolbar />

        <Box sx={{ flex: 1, position: 'relative', bgcolor: 'white', mx: 0 }}>
          <TextField
            multiline
            fullWidth
            variant="standard"
            value={body}
            onChange={(e) => onBodyChange(e.target.value)}
            slotProps={{ input: { disableUnderline: true } }}
            sx={{
              px: 2,
              py: 2,
              '& .MuiInputBase-root': { alignItems: 'flex-start', fontSize: 16, lineHeight: 1.51 },
            }}
            minRows={8}
          />
          <Typography
            variant="body2"
            sx={{ position: 'absolute', bottom: 8, right: 16, color: '#aba5a4' }}
          >
            {wordCount} words
          </Typography>
        </Box>

        <EndnotesSection
          endnotes={endnotes}
          expanded={endnotesExpanded}
          onToggle={onToggleEndnotes}
          onAdd={onAddEndnote}
          onRemove={onRemoveEndnote}
        />
      </Box>
    </Box>
  )
}
