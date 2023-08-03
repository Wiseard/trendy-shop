import { nanoid } from 'nanoid'

import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineShoppingCart,
} from 'react-icons/ai'
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2'
import { BsTruck } from 'react-icons/bs'

const links = [
  {
    id: nanoid(),
    name: 'home',
    url: '/',
    icon: <AiOutlineHome />,
  },
  {
    id: nanoid(),
    name: 'shop',
    url: '/shop',
    icon: <AiOutlineShopping />,
  },
  {
    id: nanoid(),
    name: 'your cart',
    url: '/cart',
    icon: <AiOutlineShoppingCart />,
  },
  {
    id: nanoid(),
    name: 'your orders',
    url: '/checkout',
    icon: <BsTruck />,
  },
  {
    id: nanoid(),
    name: 'about us',
    url: '/about',
    icon: <HiOutlineChatBubbleOvalLeftEllipsis />,
  },
]

export default links
