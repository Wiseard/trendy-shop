import { nanoid } from 'nanoid'
import { GiCompass, GiPineTree, GiStabbedNote } from 'react-icons/gi'

const services = [
  {
    id: nanoid(),
    icon: <GiCompass />,
    name: 'mission',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime laborum saepe ad explicabo eum expedita ipsam, dolorum aliquid. Quibusdam.',
  },
  {
    id: nanoid(),
    icon: <GiPineTree />,
    name: 'ethics',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime laborum saepe ad explicabo eum expedita ipsam, dolorum aliquid. Quibusdam.',
  },
  {
    id: nanoid(),
    icon: <GiStabbedNote />,
    name: 'history',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime laborum saepe ad explicabo eum expedita ipsam, dolorum aliquid. Quibusdam.',
  },
]

export default services
