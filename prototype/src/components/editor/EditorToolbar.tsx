import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatClearIcon from '@mui/icons-material/FormatClear'
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease'
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'
import InsertLinkIcon from '@mui/icons-material/InsertLink'
import LinkOffIcon from '@mui/icons-material/LinkOff'
import RedoIcon from '@mui/icons-material/Redo'
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS'
import SubscriptIcon from '@mui/icons-material/Subscript'
import SuperscriptIcon from '@mui/icons-material/Superscript'
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined'
import UndoIcon from '@mui/icons-material/Undo'
import { Box, Divider, IconButton, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useState } from 'react'

const toolbarGroups = [
  [UndoIcon, RedoIcon, FormatClearIcon],
  [FormatBoldIcon, FormatItalicIcon, FormatUnderlinedIcon, StrikethroughSIcon],
  [FormatAlignLeftIcon, FormatAlignCenterIcon, FormatAlignRightIcon, FormatAlignJustifyIcon],
  [FormatIndentDecreaseIcon, FormatIndentIncreaseIcon, FormatListBulletedIcon, FormatListNumberedIcon],
  [InsertLinkIcon, LinkOffIcon, TableChartOutlinedIcon, ImageOutlinedIcon, FormatQuoteIcon],
  [SubscriptIcon, SuperscriptIcon],
]

export function EditorToolbar() {
  const [activeFormats, setActiveFormats] = useState<string[]>(['bold'])

  const toggleFormat = (format: string) => {
    setActiveFormats((prev) =>
      prev.includes(format) ? prev.filter((f) => f !== format) : [...prev, format],
    )
  }

  return (
    <Box sx={{ bgcolor: 'las.panelGray', borderBottom: '1px solid rgba(0,0,0,0.23)' }}>
      {[0, 1].map((row) => (
        <Box
          key={row}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            px: 1,
            py: 0.5,
            flexWrap: 'wrap',
            borderBottom: row === 0 ? '1px solid rgba(0,0,0,0.12)' : 'none',
          }}
        >
          {toolbarGroups.slice(row === 0 ? 0 : 2, row === 0 ? 2 : 6).map((group, gi) => (
            <Box key={gi} sx={{ display: 'flex', alignItems: 'center' }}>
              {gi > 0 && <Divider orientation="vertical" flexItem sx={{ mx: 0.5, height: 28 }} />}
              <ToggleButtonGroup size="small" sx={{ gap: 0.25 }}>
                {group.map((Icon, ii) => {
                  const key = `${row}-${gi}-${ii}`
                  const formatKey = Icon.muiName ?? key
                  return (
                    <ToggleButton
                      key={key}
                      value={formatKey}
                      selected={activeFormats.includes(formatKey)}
                      onClick={() => toggleFormat(formatKey)}
                      sx={{ border: 'none', p: 0.5 }}
                    >
                      <Icon fontSize="small" />
                    </ToggleButton>
                  )
                })}
              </ToggleButtonGroup>
            </Box>
          ))}
          {row === 0 && (
            <IconButton size="small" sx={{ ml: 0.5, fontSize: 12, fontWeight: 700, width: 32, height: 32 }}>
              AB
            </IconButton>
          )}
        </Box>
      ))}
    </Box>
  )
}
