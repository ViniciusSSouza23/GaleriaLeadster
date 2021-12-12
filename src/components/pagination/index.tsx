import {Container, Containers} from './style';
import Backimg from "../../assets/back.png"
import Nextimg from "../../assets/next.png"

interface PaginationProps{
    onHandleClickNext:()=>void;
    onHandleClickPrev:()=>void;

}

export function Pagination(props:PaginationProps)
{
    return(
        <>
            <Container>
                <button type="submit" onClick={props.onHandleClickPrev}><img src={Backimg} alt="" /></button>
            
            </Container>
            <Containers>
                <button type="submit" onClick={props.onHandleClickNext}><img src={Nextimg} alt="" /></button>
            </Containers>
        </>
    );
}