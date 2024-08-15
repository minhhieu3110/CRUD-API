import {Link, useLocation} from "react-router-dom";

export default function NavBar() {
    const data = useLocation().state
    return(
        <div className='row'>
            <div className='col-12'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                                <Link className="nav-link" to={'/add-product'}>Add Product</Link>
                                <Link className="nav-link" to={'/List-users'}>List Users</Link>
                                <Link className="nav-link" to={'/login'}>Logout</Link>
                                {/*<Link className="nav-link" to={'/edit-product/:id'}>Edit Product</Link>*/}
                            </div>
                        </div>
                        <div>Hello {data?.name}</div>
                    </div>
                </nav>
            </div>
        </div>
    )
}