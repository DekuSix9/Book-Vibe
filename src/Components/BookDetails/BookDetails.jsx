import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../Utility/AddToDb";

const BookDetails = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
     const book = data.find(book => book.bookId === parseInt(bookId) ); 

    const { bookName, image,author,category,review,tags,totalPages,publisher,yearOfPublishing,rating} = book;

    const handleMarkAsRead=(id)=>{
   addToStoredReadList(id)
    }


    return (
        <div className="flex flex-col gap-10 lg:flex-row bg-base-100 shadow-sm p-6 rounded-lg">
  
  <div className="flex-shrink-0 w-full lg:w-[350px]">
    <img className="w-full h-auto rounded-lg object-cover" src={image} alt={bookName} />
  </div>

  
  <div className="lg:ml-8 flex flex-col justify-center">
    <h2 className="text-2xl font-bold">{bookName}</h2>
    <p className="text-lg text-gray-600 mt-1">
      <span className="font-semibold">By :</span> {author}
    </p>
    
    <p className="mt-4 font-semibold text-lg">{category}</p>
    <hr className="my-2 border-gray-300" />

   
    <p className="text-gray-600">
      <span className="font-semibold">Review :</span> {review}
      <hr className="my-2 border-gray-300" />
    </p>

    
    <div className="mt-4 flex gap-5">
        <p className=" font-bold">Tag:</p>
  {tags.map((tag, index) => (
    <span key={index} className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm mr-2">
      #{tag}
      
    </span>
    
  ))}
  
</div>


   
    <div className="mt-4 text-gray-700">
        
      <p className="mt-2 "><span className="font-semibold ">Number of Pages:</span> {totalPages}.</p>
      <p className="mt-2"><span className="font-semibold">Publisher:</span> {publisher}.</p>
      <p className="mt-2"><span className="font-semibold">Year of Publishing:</span> {yearOfPublishing}</p>
      <p className="mt-2"><span className="font-semibold">Rating:</span> {rating}.</p>
    </div>

    
    <div className="mt-6 flex gap-6">
      <button onClick={()=>handleMarkAsRead(bookId)} className="px-6 py-2 bg-gray-200 rounded-md">Mark as Read</button>
      <button className="px-6 py-2 bg-blue-500 text-white rounded-md">Add to Wishlist</button>
    </div>
  </div>
</div>

      

    
    );
};

export default BookDetails;
