export type SecondaryTool =
  | 'sources'
  | 'contributors'
  | 'report-info'
  | 'recipients'
  | 'entities'
  | 'media'
  | 'annotations'
  | 'bundle'
  | 'history'

export interface ClassificationChip {
  id: string
  label: string
  color: string
  textColor?: string
}

export interface BundleItem {
  id: string
  title: string
  subtitle: string
  selected?: boolean
}

export interface Endnote {
  id: string
  text: string
}
