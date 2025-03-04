import booksImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 bg-opacity-5 lg:h-[554px] h-auto">
  <div className="hero-content flex-col lg:flex-row-reverse  items-center text-center lg:text-left">
    <img
      src={booksImg}
      className="w-4/5 sm:w-3/5 md:w-1/2 lg:max-w-sm rounded-lg shadow-2xl" />
    <div className=' mt-6 lg:mt-0 lg:ml-40 px-4'>
      <h1 className="text-5xl sm:text-4xl lg:text-5xl font-bold leading-snug lg:leading-[84px]">Books to freshen up your bookshelf</h1>
     
      <button className="btn bg-[#23BE0A] rounded-lg text-white mt-6 sm:mt-8">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;