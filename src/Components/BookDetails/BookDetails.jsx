import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
     const book = data.find(book => book.bookId == bookId); 

    const { bookName, image } = book;

    return (
        <div>
            <h2>Book Details: {bookName}</h2>
            <img src={image} alt={bookName} />
            <br />
            <button className="btn btn-accent">Read</button>
            <button className="btn btn-accent ml-4">Wish List</button>
        </div>
    );
};

export default BookDetails;
