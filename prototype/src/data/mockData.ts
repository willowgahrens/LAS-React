import type { BundleItem, ClassificationChip, Endnote } from '../types'

export const initialChips: ClassificationChip[] = [
  { id: '1', label: 'Release;naey', color: '#0080bb' },
  { id: '2', label: 'Check Grammar', color: '#f49e40', textColor: '#000000' },
  { id: '3', label: 'Important', color: '#b71319' },
  { id: '4', label: 'Targeting', color: '#222222' },
]

export const initialBundles: BundleItem[] = [
  {
    id: 'placeholder',
    title: 'Bundle Title',
    subtitle: 'CLASS',
  },
  {
    id: 'bundle-1',
    title: 'Anticipated Discussions at Behrainabad-Zendia...',
    subtitle: 'CLASS  | EGRAM',
  },
  {
    id: 'bundle-2',
    title: 'Anticipated Discussions at Behrainabad-Zendia...',
    subtitle: 'CLASS  | EGRAM',
    selected: true,
  },
]

export const initialEndnotes: Endnote[] = [
  {
    id: '1',
    text: 'This endnote is attached to nonummy in the text.',
  },
]

export const editorBodyText = `The upcoming peace talks between Behrainabad and Zendia are poised to tackle several critical issues. Central to the discussions will be the facilitation of humanitarian aid to Zendia, a nation currently grappling with severe shortages of food, water, and medical supplies. Establishing secure corridors for aid convoys is expected to be a top priority, as these corridors are essential for providing relief to the beleaguered civilian population. Additionally, the talks aim to initiate a phased withdrawal of troops, a necessary step to de-escalate the conflict and pave the way for peaceful resolutions. The establishment of a transitional government is also on the agenda, with the inclusion of democratic factions being a key focus.

This move seeks to dismantle the autocratic grip of Marshal Salazar and restore democratic governance in Zendia. Furthermore, ensuring the involvement of international monitoring mechanisms to oversee compliance and support recovery...`

export const missionOptions = ['Report Authoring Mission', 'Analysis Mission', 'Collection Mission']
export const reportTypeOptions = ['Egram', 'Intelligence Report', 'Brief']
