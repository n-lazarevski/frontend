import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import BookTerm from "../BookTerm/bookTerm";

class Books extends Component {

    constructor(props) {
        super(props)

        this.state = {
            page: 0,
            size: 5
        }
    }

    render() {

        const offset = this.state.size * this.state.page
        const nextPageOffset = offset + this.state.size
        const pageCount = Math.ceil(this.props.books.length / this.state.size)
        const products = this.getProductPage(offset, nextPageOffset)

        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                                <tr>
                                    <th scope={"col"}>Name</th>
                                    <th scope={"col"}>Author</th>
                                    <th scope={"col"}>Category</th>
                                    <th scope={"col"}>Availabe Copies</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products}
                            </tbody>
                        </table>
                    </div>
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <Link className={"btn form-control btn-dark"} to={"/books/add"}>Add new book</Link>
                            </div>
                        </div>
                    </div>
                    <ReactPaginate previousLabel={"back"}
                        nextLabel={"next"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        breakLabel={<a href="/#">...</a>}
                        breakClassName={"break-me"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination m-4 justify-content-center align-items-center"}
                        activeClassName={"active"} />
                </div>
            </div>
        )
    }

    handlePageClick = (data) => {
        let selected = data.selected
        this.setState({
            page: selected
        })

    }

    getProductPage = (offset, nextPageOffset) => {
        return this.props.books.map((term) => {
            return (
                <BookTerm term={term} onMark={this.props.onMark} onDelete={this.props.onDelete} onEdit={this.props.onEdit} />
            );
        }).filter((book, index) => {
            return index >= offset && index < nextPageOffset
        })

    }
}

export default Books;