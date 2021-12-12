import { Container } from "./style";
import {FaGithub, FaInstagram, FaLinkedin, FaWhatsapp} from "react-icons/fa"
import { prependOnceListener } from "process";


export function Footer()
{
   
    return(
        <Container>
             <div>
                <p>Desenvolvido por Vinicius Souza</p>
            </div>
            <div>
                <a href="https://github.com/ViniciusSSouza23" className="git" target="_blank"><FaGithub size={30}/></a>
                <a href="https://www.instagram.com/vinicius_ssouza23/" className="instagram" target="_blank"><FaInstagram size={30}/></a>
                <a href="https://wa.me/+5518991391231" className="whatsapp" target="_blank"><FaWhatsapp size={30}/></a>
                <a href="https://www.linkedin.com/in/vinicius-souza-b89719141/" className="linkedin" target="_blank"><FaLinkedin size={30}/></a>
            </div>
           
            
        </Container>
    );
}