import CloseIcon from '@mui/icons-material/Close'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import ToggleOffIcon from '@mui/icons-material/ToggleOff'
import { Autocomplete, Box, Button, Chip, Link, TextField, Typography } from '@mui/material'
import type { BundleItem } from '../../types'
import { reportTypeOptions } from '../../data/mockData'

interface BundlePanelProps {
  bundles: BundleItem[]
  showDraftForm: boolean
  expandAll: boolean
  selectedBundleId: string | null
  draftTitle: string
  draftReportType: string
  draftClassification: string
  draftReportTitle: string
  onToggleExpandAll: () => void
  onAddDraft: () => void
  onCancelDraft: () => void
  onSubmitDraft: () => void
  onSelectBundle: (id: string) => void
  onRemoveBundle: (id: string) => void
  onDraftTitleChange: (value: string) => void
  onDraftReportTypeChange: (value: string) => void
  onDraftClassificationChange: (value: string) => void
  onDraftReportTitleChange: (value: string) => void
  onAction: (action: string) => void
}

function BundleCard({
  bundle,
  expanded,
  onSelect,
  onRemove,
}: {
  bundle: BundleItem
  expanded: boolean
  onSelect: () => void
  onRemove: () => void
}) {
  const isPlaceholder = bundle.id === 'placeholder'

  return (
    <Box
      onClick={onSelect}
      sx={{
        border: '2px solid',
        borderColor: bundle.selected ? 'las.bundleSelectedBorder' : '#bababa',
        borderRadius: '5px',
        bgcolor: bundle.selected ? 'las.bundleSelected' : 'white',
        p: 2,
        cursor: 'pointer',
        transition: 'all 0.2s',
        '&:hover': { boxShadow: 1 },
        ...(isPlaceholder && { minHeight: 115 }),
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Chip
          label={isPlaceholder ? 'BUNDLE' : 'BUNDLE TITLE'}
          size="small"
          sx={{ bgcolor: '#333', color: 'white', borderRadius: '5px', height: 19, fontSize: 10 }}
        />
        {!isPlaceholder && (
          <CloseIcon
            sx={{ fontSize: 20, color: 'action.active', cursor: 'pointer' }}
            onClick={(e) => {
              e.stopPropagation()
              onRemove()
            }}
          />
        )}
      </Box>

      {expanded && (
        <Box sx={{ mt: 1.5 }}>
          <Typography variant="caption" sx={{ color: '#8a8a8a', display: 'block' }}>
            {bundle.subtitle}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: '#333' }}>
            {bundle.title}
          </Typography>
          {!isPlaceholder && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1, justifyContent: 'flex-end' }}>
              <OpenInNewIcon sx={{ fontSize: 18, color: 'primary.dark' }} />
              <Link href="#" sx={{ color: 'primary.dark', fontSize: 12 }}>
                Open in new tab
              </Link>
            </Box>
          )}
        </Box>
      )}
    </Box>
  )
}

export function BundlePanel({
  bundles,
  showDraftForm,
  expandAll,
  selectedBundleId,
  draftTitle,
  draftReportType,
  draftClassification,
  draftReportTitle,
  onToggleExpandAll,
  onAddDraft,
  onCancelDraft,
  onSubmitDraft,
  onSelectBundle,
  onRemoveBundle,
  onDraftTitleChange,
  onDraftReportTypeChange,
  onDraftClassificationChange,
  onDraftReportTitleChange,
  onAction,
}: BundlePanelProps) {
  return (
    <Box
      sx={{
        width: 570,
        minWidth: 570,
        bgcolor: 'las.panelGray',
        borderLeft: '1px solid #d1d1d1',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ px: 2.5, pt: 2, pb: 1, borderBottom: '1px solid #d1d1d1' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
          <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
            BUNDLE
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography
              variant="caption"
              onClick={onToggleExpandAll}
              sx={{ cursor: 'pointer', color: '#333', '&:hover': { textDecoration: 'underline' } }}
            >
              Expand all
            </Typography>
            <ToggleOffIcon sx={{ color: expandAll ? 'primary.main' : 'action.active', cursor: 'pointer' }} onClick={onToggleExpandAll} />
            <CompareArrowsIcon sx={{ color: 'action.active' }} />
            <FilterAltOutlinedIcon sx={{ color: 'action.active' }} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" color="primary" onClick={onAddDraft}>
            ADD DRAFT
          </Button>
        </Box>
      </Box>

      <Box sx={{ flex: 1, overflow: 'auto', px: 2.5, py: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {bundles
          .filter((b) => b.id !== 'draft-form')
          .map((bundle) => (
            <BundleCard
              key={bundle.id}
              bundle={{
                ...bundle,
                selected: bundle.id === selectedBundleId,
              }}
              expanded={expandAll || bundle.id === selectedBundleId || bundle.id === 'placeholder'}
              onSelect={() => onSelectBundle(bundle.id)}
              onRemove={() => onRemoveBundle(bundle.id)}
            />
          ))}

        {showDraftForm && (
          <Box
            sx={{
              border: '2px solid #bababa',
              borderRadius: '5px',
              bgcolor: 'white',
              p: 2,
              position: 'relative',
            }}
          >
            <DeleteForeverOutlinedIcon
              sx={{ position: 'absolute', top: 12, right: 12, cursor: 'pointer', color: 'action.active' }}
              onClick={onCancelDraft}
            />
            <Chip label="BUNDLE" size="small" sx={{ bgcolor: '#333', color: 'white', borderRadius: '5px', mb: 2 }} />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ position: 'relative' }}>
                <Autocomplete
                  fullWidth
                  options={['Egram']}
                  value={draftTitle}
                  onChange={(_, v) => onDraftTitleChange(v ?? '')}
                  renderInput={(params) => <TextField {...params} label="Bundle Title" />}
                  disableClearable
                />
                <Chip
                  label="(CLASS)"
                  size="small"
                  sx={{ position: 'absolute', left: 12, top: 10, bgcolor: '#d9d9d9', height: 25, fontSize: 13 }}
                />
                <LockOutlinedIcon sx={{ position: 'absolute', right: 48, top: 14, fontSize: 18, color: 'action.active' }} />
              </Box>

              <Autocomplete
                fullWidth
                options={reportTypeOptions}
                value={draftReportType}
                onChange={(_, v) => onDraftReportTypeChange(v ?? '')}
                renderInput={(params) => <TextField {...params} label="Report Type*" />}
                disableClearable
              />

              <Autocomplete
                fullWidth
                options={['CLASSIFICATION', 'SECRET', 'UNCLASSIFIED']}
                value={draftClassification}
                onChange={(_, v) => onDraftClassificationChange(v ?? '')}
                renderInput={(params) => <TextField {...params} label="Report Classification" />}
                disableClearable
              />

              <Box sx={{ position: 'relative' }}>
                <Autocomplete
                  fullWidth
                  options={['Harry Potter Went To Hogwarts Versi..']}
                  value={draftReportTitle}
                  onChange={(_, v) => onDraftReportTitleChange(v ?? '')}
                  renderInput={(params) => <TextField {...params} label="Report Title" />}
                  disableClearable
                />
                <Chip
                  label="(CLASS)"
                  size="small"
                  sx={{ position: 'absolute', left: 12, top: 10, bgcolor: '#d9d9d9', height: 25, fontSize: 13 }}
                />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 1 }}>
                <Button variant="outlined" onClick={onCancelDraft} sx={{ color: 'las.chipBlack', borderColor: 'las.chipBlack' }}>
                  CANCEL
                </Button>
                <Button variant="contained" color="primary" onClick={onSubmitDraft}>
                  ADD
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>

      <Box sx={{ px: 2.5, py: 1.5, borderTop: '1px solid #d1d1d1', display: 'flex', justifyContent: 'flex-end' }}>
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault()
            onAction('Open bundle in new tab')
          }}
          sx={{ color: 'primary.dark', fontSize: 12, display: 'flex', alignItems: 'center', gap: 0.5 }}
        >
          <OpenInNewIcon sx={{ fontSize: 16 }} />
          Open in new tab
        </Link>
      </Box>
    </Box>
  )
}
