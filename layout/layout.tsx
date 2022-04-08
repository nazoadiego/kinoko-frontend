import { FC, useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Sidebar setOpen={setOpen} open={open} />
      <main className={open ? 'bg-[#0B021F]' : 'main active bg-[#0B021F]'}>
        {children}
      </main>
    </>
  )
}

export default Layout
