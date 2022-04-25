import { Link } from "react-router-dom"

const bookTerm = (props) => {
    return (
        <tr key={props.term.id}>
            <td>{props.term.name}</td>
            <td>{props.term.author.name} {props.term.author.surname}</td>
            <td>{props.term.category}</td>
            <td>{props.term.availableCopies}</td>
            <td className={"text-right"}>
                <button title={"Delete"} className={"btn btn-danger"}
                    onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </button>
                <Link className={"btn btn-info ms-2"}
                    onClick={() => props.onEdit(props.term.id)}
                    to={`/books/edit/${props.term.id}`}>
                    Edit
                </Link>
                <button className={"btn btn-success ms-2"}
                    onClick={() => props.onMark(props.term.id)}>
                    Mark as Taken
                </button>
            </td>
        </tr>
    )
}

export default bookTerm;