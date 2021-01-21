import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Home() {
    const { Books } = useSelector(state => state)
    const [bookNameSearch, setbookName] = useState('');
    const [searchedBook, setSearchedBook] = useState('')
    const [count, setCount] = useState(0);

    const search = () => {
        if (bookNameSearch !== '') {
            let book =Books.find((book) => book.title === bookNameSearch);
            setSearchedBook(book);
            setCount(count + 1);
            setbookName('');
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            search();
        }
    }

    const unset = () => {
        setSearchedBook('');
        setCount(count + 1);
    }

    useEffect(() => {
    }, [count]);


    return (
        <div className="body">
            <div className="Header">
                <div className="Title" onClick={unset} ><Link to={'/'}>Book Store</Link></div>
                <div className="searchContainer">
                <div className="Title" onClick={unset} ><Link to={'/'}>Home</Link></div>
                    <div className="searchIcon"><input className="searchIcon" type='text' placeholder='Bookname.....'
                     value={bookNameSearch} onKeyDown={handleKeyDown} onChange={(e) => setbookName(e.target.value)} />
                     <span className="search" onClick={search} ><img className=" searchImg" src="ic_search.png" alt='search'>
                     </img></span></div>
                    <div className="UserProfileLogo"><img alt="User profile" src="ic_user.png"></img></div>
                </div>
            </div>
            <div className="main">
                {
                    !searchedBook ?
                        Books.map((book, index) => <div className="Container" key={index}>
                            <div className="bookTitle"><Link to={`/${book.bookID}`}>{book.title}</Link></div>
                            <div className="bookDetails">
                                <div className="BookDetailsContainer">
                                    <div><span className="heading">Authers:</span> &nbsp; {book.authors}</div>
                                    <div><span className="heading">Price:</span> &nbsp;&nbsp;&nbsp;{book.price}</div>
                                    <div><span className="heading">Language:</span> {book.language_code}</div>
                                    <div><span className="heading">Book ID:</span> {book.bookID}</div>
                                    <div><span className="heading">INSB:</span> {book.isbn}</div>
                                    <div><span className="heading">Rating:</span> {book.average_rating}</div>
                                </div>
                                <div><img className="bookImage" src={"book.png"} alt="Book"></img></div>
                            </div>
                        </div>) :
                        <div className="selectedBookContainer">
                            <div className="selectedBookPicture"><div><img src={"book.png"} alt="Book"></img></div></div>
                            <div className="selectedBookDetails">
                                    <div className="bookTitle" >{searchedBook.title}</div>
                                    <div><span className="heading">Authers:</span> &nbsp; {searchedBook.authors}</div>
                                    <div><span className="heading">Price:</span> &nbsp;&nbsp;&nbsp;{searchedBook.price}</div>
                                    <div><span className="heading">Language:</span> {searchedBook.language_code}</div>
                                    <div><span className="heading">Book ID:</span> {searchedBook.bookID}</div>
                                    <div><span className="heading">INSB:</span> {searchedBook.isbn}</div>
                                    <div><span className="heading">Rating:</span> {searchedBook.average_rating}</div>
                            </div>
                        </div>
                }
            </div>
            <div className="footer">
                <span className="copyright">©Book Store 2021</span>
            </div>

        </div>
    )
}
