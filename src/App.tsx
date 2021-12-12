import { Footer } from './components/footer';
import { Header } from './components/header';
import { Global } from './styles/global';
import {Gallery} from "./components/gallery/index";
import { Pagination } from './components/pagination';
import { useEffect, useState } from 'react';



function App() {
  const [currentpage,setCurrentPage]=useState(1);
  function OnhandleclickNext()
  {
     setCurrentPage(currentpage+1);
    
  }
  function OnhandleclickPrev()
  {
    if(currentpage!=1)
    {
      setCurrentPage(currentpage-1)
    }
  }
  useEffect(()=>{
    console.log(currentpage)
  },[currentpage])
  return (
    <>
    <Global/>
    <Header/>
    <Gallery page={currentpage}/>
    <Pagination onHandleClickNext={OnhandleclickNext} onHandleClickPrev={OnhandleclickPrev}/>
    
    <Footer/>
    </>
  );
}

export default App;
