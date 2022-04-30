import { FC } from 'react'
import { FaHome, FaChartLine, FaTree, FaBars } from 'react-icons/fa'
import NavItem from './NavItem'

interface SidebarProps {
  setOpen: (open: boolean) => void
  open: boolean
}

const Sidebar: FC<SidebarProps> = ({ open, setOpen }) => {
  return (
    <div className={open ? 'navigation active' : 'navigation'} id="navbar">
      <div
        className="inline-flex items-center p-5 pt-6 "
        id="navbar-burger"
        onClick={() => setOpen(!open)}
      >
        <span className="text-2xl text-white">
          <FaBars />
        </span>
        <span className="pl-8 text-xl text-white">
          <h2>Kinoko</h2>
        </span>
      </div>

      <ul>
        <NavItem text="Home" href="/">
          <FaHome />
        </NavItem>
        <NavItem href="/stats" text="Statistics">
          <FaChartLine />
        </NavItem>
        <NavItem href="/mushroom-forest" text="Mushroom Forest">
          <FaTree />
        </NavItem>
      </ul>
    </div>
  )
}

export default Sidebar
