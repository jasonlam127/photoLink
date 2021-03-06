import Head from 'next/head'


const Header = ({title, user }) => (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>{title}</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
        </Head>
        
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand" href="/">PhotoLink</a>
            

                    {!user?(
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Log In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-info" href="/signup">Sign Up</a>
                            </li>
                        </ul>
                    ):(
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link " href="/">{user.username}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-info" href="/logout">Logout</a>
                            </li>
                        </ul>
                    )}     
  
        </nav>
        
        <style jsx>{`
            a{
                color: white !important;
            }
            .navbar{
                z-index = 2;
            }
            
        `}</style>
    </div>
)

export default Header