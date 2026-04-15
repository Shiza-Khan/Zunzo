import { Users, Calendar } from 'lucide-react'
import { GiRunningShoe } from 'react-icons/gi'
import { FaAward } from 'react-icons/fa'
import { IconType } from 'react-icons'

export interface Stat {
  icon: IconType
  number: number
  label: string
}

export const stats: Stat[] = [
  { icon: FaAward, number: 196, label: 'Running Awards' },
  { icon: Users, number: 2432, label: 'Active Members' },
  { icon: Calendar, number: 244, label: 'Run Events' },
  { icon: GiRunningShoe, number: 85, label: 'Miles Run' },
]
