import Link from 'next/link'
import { FC } from 'react'

interface NavItemProps {
  href: string
  text: string
}

const NavItem: FC<NavItemProps> = (props) => {
  const { href, text, children } = props
  return (
    <li className="flex p-3 text-white hover:bg-[#9c57ec]">
      <Link href={href}>
        <a className="flex">
          <span className="text-center text-4xl">{children}</span>
          <span className="flex items-center pl-6">{text}</span>
        </a>
      </Link>
    </li>
  )
}

export default NavItem
