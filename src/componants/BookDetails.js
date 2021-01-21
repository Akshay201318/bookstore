import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function BookDetails() {

    const { Books } = useSelector(state => state);
    const [book, setBook] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const book = Books.find((data) => Number(data.bookID) === Number(id));
        setBook(book);
    }, [book, id, Books]);
    return (
        <div className="body">
            <div className="Header">
                <div className="Title"><Link to={'/'}>Book Store</Link></div>
                <div className="searchContainer">
                <div className="Title" ><Link to={'/'}>Home</Link></div>
                </div>
            </div>
            <div className="selectedBookContainer">
                <div className="selectedBookPicture" >
                    <div><img src={"book.png"} alt="Book"></img></div>
                </div>
                <div className="selectedBookDetails">
                    <div className="bookTitle" >{book.title}</div>
                    <div><span className="heading">Authers:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {book.authors}</div>
                    <div><span className="heading">Price:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{book.price}</div>
                    <div><span className="heading">Language:</span>&nbsp;&nbsp;&nbsp; {book.language_code}</div>
                    <div><span className="heading">Book ID:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {book.bookID}</div>
                    <div><span className="heading">INSB:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {book.isbn}</div>
                    <div><span className="heading">Rating:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {book.average_rating}</div>
                    <div><span className="heading">Total Ratings:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {book.ratings_count}</div>
                </div>
            </div>
            <div className="footer">
                <span className="copyright">©Book Store 2021</span>
            </div>
        </div>
    )
}
