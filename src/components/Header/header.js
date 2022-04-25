import React from "react";
import { Link } from "react-router-dom";

const header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/books">Library</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to={"/books"}>Books</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to={"/categories"}>Categories</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default header;