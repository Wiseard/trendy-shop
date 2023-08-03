import { nanoid } from 'nanoid'
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from 'react-icons/ai'

const socials = [
  {
    id: nanoid(),
    name: 'instagram',
    icon: <AiOutlineInstagram />,
  },
  {
    id: nanoid(),
    name: 'twitter',
    icon: <AiOutlineTwitter />,
  },
  {
    id: nanoid(),
    name: 'facebook',
    icon: <AiOutlineFacebook />,
  },
]

export default socials
