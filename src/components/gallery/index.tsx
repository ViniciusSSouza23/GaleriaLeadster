import pexels from "../../services/api";
import { useEffect, useState } from 'react';
import { Container,Content,ContentButton } from "./style";
import LazyLoad from "react-lazyload";

interface Gallery{
    page:number
}
export function Gallery(props:Gallery)
{
   const [controller,setController]= useState(false);
    
    const [photos,setPhotos]= useState([]);

    
  
    

    
    //@ts-ignore
    let GetPhotos = async () => {
        const response = await pexels.get(`/v1/curated?`, {
            params: {
               
                per_page: 40,
                page: props.page

                
            }
        });
       
            
            
            setPhotos(response.data.photos);
           
            setController(true);
    }
   
    useEffect(()=>{
        GetPhotos();
    },[props.page]);


    

    //@ts-ignore
    if(controller!=true)
    {
        return <h1>Carregando</h1>
    }else
    {
               
            return (
                <>
                    <Container>
                        
                        {photos.map(photo=>(
                            //@ts-ignore
                            <Content  key={photo.id}>
                                <a //@ts-ignore
                                href={photo.url} target="_blank">
                                    <LazyLoad once>
                                    <img src={
                                        //@ts-ignore
                                        photo.src.medium} alt="" />
                                    </LazyLoad>
                                </a>
                                    
                            </Content>
                        ))} 
                       
                        
                            
                    </Container>
                    
                </>
            );
           
    }
                
   
}