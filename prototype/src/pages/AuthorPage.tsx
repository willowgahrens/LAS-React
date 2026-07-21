import { Box, Snackbar, Alert } from '@mui/material'
import { useState } from 'react'
import { FooterBar } from '../components/layout/FooterBar'
import { PrimarySidebar } from '../components/layout/PrimarySidebar'
import { SecondarySidebar } from '../components/layout/SecondarySidebar'
import { TopBar } from '../components/layout/TopBar'
import { ReportEditor } from '../components/editor/ReportEditor'
import { BundlePanel } from '../components/bundle/BundlePanel'
import {
  editorBodyText,
  initialBundles,
  initialChips,
  initialEndnotes,
} from '../data/mockData'
import type { BundleItem, Endnote, SecondaryTool } from '../types'

export function AuthorPage() {
  const [activeTool, setActiveTool] = useState<SecondaryTool>('bundle')
  const [mission, setMission] = useState('Report Authoring Mission')
  const [reportType, setReportType] = useState('Egram')
  const [title, setTitle] = useState('Anticipated Discussions at Behrainabad-Zendia Peace Talks')
  const [caveat, setCaveat] = useState('Add Caveat')
  const [body, setBody] = useState(editorBodyText)
  const [chips, setChips] = useState(initialChips)
  const [endnotes, setEndnotes] = useState<Endnote[]>(initialEndnotes)
  const [endnotesExpanded, setEndnotesExpanded] = useState(true)
  const [bundles, setBundles] = useState<BundleItem[]>(initialBundles)
  const [selectedBundleId, setSelectedBundleId] = useState<string | null>('bundle-2')
  const [expandAll, setExpandAll] = useState(false)
  const [showDraftForm, setShowDraftForm] = useState(true)
  const [draftTitle, setDraftTitle] = useState('Egram')
  const [draftReportType, setDraftReportType] = useState('Egram')
  const [draftClassification, setDraftClassification] = useState('CLASSIFICATION')
  const [draftReportTitle, setDraftReportTitle] = useState('Anticipated Discussions at Behrainabad-Zendia Peace Talks')
  const [snackbar, setSnackbar] = useState<string | null>(null)

  const reportTitle = 'Harry Potter Went to Hogwarts'

  const handleAction = (action: string) => {
    setSnackbar(action)
  }

  const handleAddEndnote = () => {
    setEndnotes((prev) => [
      ...prev,
      { id: String(Date.now()), text: 'New endnote added to the report.' },
    ])
    setEndnotesExpanded(true)
  }

  const handleSubmitDraft = () => {
    const newBundle: BundleItem = {
      id: `bundle-${Date.now()}`,
      title: draftReportTitle,
      subtitle: `CLASS  | ${draftReportType.toUpperCase()}`,
    }
    setBundles((prev) => [...prev.filter((b) => b.id !== 'placeholder'), newBundle])
    setSelectedBundleId(newBundle.id)
    setShowDraftForm(false)
    setSnackbar('Draft added to bundle')
  }

  const showBundlePanel = activeTool === 'bundle'

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <PrimarySidebar />

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <TopBar />

        <Box sx={{ flex: 1, display: 'flex', minHeight: 0 }}>
          {activeTool !== 'bundle' ? (
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'white',
              }}
            >
              <Alert severity="info" sx={{ maxWidth: 400 }}>
                {activeTool.replace('-', ' ').toUpperCase()} panel — click BUNDLE in the sidebar to return to the main view.
              </Alert>
            </Box>
          ) : (
            <ReportEditor
              reportTitle={reportTitle}
              mission={mission}
              reportType={reportType}
              title={title}
              caveat={caveat}
              body={body}
              chips={chips}
              endnotes={endnotes}
              endnotesExpanded={endnotesExpanded}
              onMissionChange={setMission}
              onReportTypeChange={setReportType}
              onTitleChange={setTitle}
              onCaveatChange={setCaveat}
              onBodyChange={setBody}
              onRemoveChip={(id) => setChips((prev) => prev.filter((c) => c.id !== id))}
              onToggleEndnotes={() => setEndnotesExpanded((v) => !v)}
              onAddEndnote={handleAddEndnote}
              onRemoveEndnote={(id) => setEndnotes((prev) => prev.filter((n) => n.id !== id))}
            />
          )}

          <SecondarySidebar activeTool={activeTool} onToolChange={setActiveTool} />

          {showBundlePanel && (
            <BundlePanel
              bundles={bundles}
              showDraftForm={showDraftForm}
              expandAll={expandAll}
              selectedBundleId={selectedBundleId}
              draftTitle={draftTitle}
              draftReportType={draftReportType}
              draftClassification={draftClassification}
              draftReportTitle={draftReportTitle}
              onToggleExpandAll={() => setExpandAll((v) => !v)}
              onAddDraft={() => setShowDraftForm(true)}
              onCancelDraft={() => setShowDraftForm(false)}
              onSubmitDraft={handleSubmitDraft}
              onSelectBundle={setSelectedBundleId}
              onRemoveBundle={(id) => {
                setBundles((prev) => prev.filter((b) => b.id !== id))
                if (selectedBundleId === id) setSelectedBundleId(null)
              }}
              onDraftTitleChange={setDraftTitle}
              onDraftReportTypeChange={setDraftReportType}
              onDraftClassificationChange={setDraftClassification}
              onDraftReportTitleChange={setDraftReportTitle}
              onAction={handleAction}
            />
          )}
        </Box>

        <FooterBar onAction={handleAction} />
      </Box>

      <Snackbar
        open={Boolean(snackbar)}
        autoHideDuration={2500}
        onClose={() => setSnackbar(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={() => setSnackbar(null)}>
          {snackbar}
        </Alert>
      </Snackbar>
    </Box>
  )
}
