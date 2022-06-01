import Header from "./Header"
import layoutStyles from '../styles/Layout.module.css';

const Layout = ({children}) => {
  return (
    <div className={layoutStyles.container}>
        <Header />
        {children}
    </div>
  )
}

export default Layout

