import {
  SiSpotify,
  SiSlack,
  SiShopify,
  SiAdidas,
  SiNike,
  SiDropbox,
} from 'react-icons/si'
import { FaRunning } from 'react-icons/fa'
import { IconType } from 'react-icons'

export type Client = {
  name: string
  icon: IconType
  className: string
}
export const clients: Client[][] = [
  [
    { name: 'Spotify', icon: SiSpotify, className: 'text-green-500' },
    { name: 'Vanfaba', icon: SiAdidas, className: 'text-gray-300' },
    { name: 'Slack', icon: SiSlack, className: 'text-pink-500' },
    { name: 'Panadoxn', icon: SiShopify, className: 'text-green-400' },
  ],
  [
    { name: 'Barrycr.tce', icon: SiNike, className: 'text-blue-400' },
    { name: 'Barrycry.tce', icon: SiDropbox, className: 'text-sky-400' },
    { name: 'Shangxi', icon: FaRunning, className: 'text-[#c3e92d]' },
    { name: 'Vanfaba', icon: SiAdidas, className: 'text-gray-300' },
  ],
]
