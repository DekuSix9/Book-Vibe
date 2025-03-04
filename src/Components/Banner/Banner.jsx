import booksImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={booksImg}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold leading-[84px]">Books to freshen up your bookshelf</h1>
     
      <button className="btn bg-[#23BE0A] rounded-lg text-white">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;