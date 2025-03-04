

const Book = ({book}) => {
    const {bookName,author,image,tags,category}=book;
    return (
        <div className="card bg-base-100 w-96 shadow-sm p-6">
  <figure className=" bg-blue-200 py-8 rounded-2xl">
    <img
      src={image}
      className=" h-[166px]"
      alt="Shoes" />
  </figure>
  <div className="card-body">
 <div className=" flex justify-center gap-4">
 {
    tags.map(tag=><button className="btn btn-xs bg-green-200 text-green-600">{tag}</button>)
  }
 </div>
    <h2 className="card-title">
     {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>By:{author}</p>
    <div className=" border-t-2 border-dashed border-gray-300"></div>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
      <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-600" aria-label="1 star" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-600" aria-label="2 star" defaultChecked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-600" aria-label="3 star" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-600" aria-label="4 star" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-200" aria-label="5 star" />
</div>
    </div>
  </div>
</div>
    );
};

export default Book;