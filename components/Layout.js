import Header from './Header'
import Footer from './Footer'

const Layout = ({ children,user, title = 'This is the default title' }) => (
  <div >
    <Header title = {title} user = {user}/>
    {children}
    <Footer />
  </div>
)

export default Layout