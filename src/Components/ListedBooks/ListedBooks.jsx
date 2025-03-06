/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../Utility/AddToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
  const[readList,setReadList]=useState([])
  const[wishList,setwishList]=useState([])

  const[sort,setSort]=useState('')

  const allBooks=useLoaderData();

  useEffect(()=>{
    const storedReadList=getStoredReadList();
    const storedWishList=getStoredWishList();
    
    const storedReadListInt=storedReadList.map(id=>parseInt(id));
    const storedWishListInt=storedWishList.map(id=>parseInt(id))

    const readBookList=allBooks.filter(book=>storedReadListInt.includes(book.bookId))
    const readWishList=allBooks.filter(book=>storedWishListInt.includes(book.bookId))
   setReadList(readBookList)
   setwishList(readWishList)
  },[]);

  const handleSortBy=(sortType)=>{
    setSort(sortType);
    if(sortType==='Number of pages'){
      const sortedReadList=[...readList].sort((a,b)=>b.totalPages-a.totalPages)
      setReadList(sortedReadList)
      setwishList(sortedReadList)
    }
    if(sortType==='Ratings'){
      const sortedReadList=[...readList].sort((a,b)=>b.rating-a.rating)
      setReadList(sortedReadList)
      setwishList(sortedReadList)
    }

  }
    return (
        <div>
           <h3 className=" text-3xl my-8">Listed Books</h3>
           <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">{sort?`Sort by:${sort}`:'Sort By'}</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>handleSortBy('Ratings')}><a>Ratings</a></li>
    <li onClick={()=>handleSortBy('Number of pages')}><a>Number of pages</a></li>
  </ul>
</div>
           <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2 className=' text-2xl'>Books I Read:{readList.length}</h2>
      {
        readList.map(book=><Book key={book.bookId} book={book}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2 className=' text-2xl'>My Wish List:{wishList.length}</h2>
      {
        wishList.map(book=><Book key={book.bookId} book={book}></Book>)
      }
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default ListedBooks;