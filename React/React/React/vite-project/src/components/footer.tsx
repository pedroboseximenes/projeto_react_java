
import 'bootstrap/dist/css/bootstrap.css';


function Footer(){

    return(
<div className="footer-container m-5">
 
      <div className="row">
         <div className="col-xl-4  col-lg-3 col-sm-7">
            <h5>Nossos Pacotes</h5>
            <ul className="list-unstyled">
               <li><a href='#excursoes'> Resort</a></li>
               <li><a href='#excursoes'>Aventura</a></li>
               <li><a href='#excursoes'>Natureza</a></li>
            </ul>
         </div>
         <div className="col-xl-3 col-lg-3 col-sm-7">
            <h5>Lugares para conhecer</h5>
            <ul className="list-unstyled">
               <li><a href='#'>Bonito</a></li>
               <li><a href='#'>Manaus</a></li>
               <li><a href='#'>São Paulo</a></li>
               <li><a href='#'>Salvador</a></li>
               <li><a href='#'>Curitiba</a></li>
               <li><a href='#'>Recife</a></li>
            </ul>
         </div>
         <div className="col-xl-3 col-lg-3 col-sm-7">
            <h5>Formas de Pagamento</h5>
            <ul className="list-unstyled">
               <li><a href='#'>Pix</a></li>
               <li><a href='#'>Crédito</a></li>
               <li><a href='#'>Débito</a></li>
               
            </ul>
         </div>
         <div className="col-xl-2 col-lg-3 col-sm-7">
            <h5><i className="fa-solid fa-circle-info"></i> Contato</h5>
            <ul className="list-unstyled">
         
               <li><a href="teste.html"><i className="fa-solid fa-phone"></i> (21) 99999-9999</a></li>
               <li> <a href='mailto:popo@pb.dum.br'><i className="fa-solid fa-envelope"></i> popo@pb.dum.br</a></li>
               <li><a href="#"><i className="fa-brands fa-instagram"></i> @flytrip</a></li>
                  
               
            </ul>
         </div>
      </div>
   </div>


    );

}
export default Footer;