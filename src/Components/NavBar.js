import {Link} from "react-router-dom";

export default function NavBar() {
    return(
        <div className='row'>
            <div className='col-12'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                                <Link className="nav-link" to={'/add-product'}>Add Product</Link>
                                {/*<Link className="nav-link" to={'/edit-product/:id'}>Edit Product</Link>*/}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}