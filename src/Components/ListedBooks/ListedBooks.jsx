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
  },[])
    return (
        <div>
           <h3 className=" text-3xl my-8">Listed Books</h3>
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