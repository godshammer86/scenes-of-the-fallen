import { createContext } from 'react'
import { Page } from '../../pages'

const PageContext = createContext<{
  activePage: Page | null;
  pages: Page[];
}>(undefined!)

export default PageContext