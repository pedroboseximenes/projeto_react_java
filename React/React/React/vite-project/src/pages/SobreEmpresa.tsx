import { faEarthAmericas, faThumbsUp, faUniversalAccess, faUserTie } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SobreEmpresa = () => {
    return (
     <>
     
<div className="container bg-light rounded">
   <div className="row ">
      <div className=" col-lg-6 image-wrapper">
         <img className="w-100 p-1 mt-2" src="assets/images/amazonia_img.jpg"/>
      </div>
      <div className="col-lg-6">
         <div className="jumbotron mt-5 p-3 bg-secondary">
            <h5 className="text-light text-center text-1">Sobre nós</h5>
            <br/>
            <p className="text-center text-white text-sm">   Adipisci veritatis esse expedita odit neque quam! Repellat
               quas ad cum porro amet, maiores, dolores in magni ea enim. Commodi
               quidem consequuntur animi pariatur cumque distinctio.
               Adipisci veritatis esse expedita odit neque quam! Repellat
               quas ad cum porro amet, maiores, dolores in magni ea enim. Commodi
               quidem consequuntur animi pariatur cumque distinctio.</p>
         </div>
         </div>
      </div>

   </div>

   
   <div className="container bg-light rounded mt-2 mb-2">
      <h5 className="text-center p-3 text-uppercase font-bold">Nossos ideais</h5>
      <div className="row ">
         
         <div className=" col-3 text-center">
            <div className="jumbotron  p-3 bg-light">
            <FontAwesomeIcon icon={faEarthAmericas} /><br/><br/>
               <h5 className=" text-md font font-weight-lighter mt-2">Confiança</h5>
               
            </div>

            </div>
            <div className=" col-3 text-center">
               <div className="jumbotron  p-3 bg-light">
               <FontAwesomeIcon icon={faThumbsUp} /><br/><br/>
                  <h5 className=" text-md font font-weight-lighter mt-2">Eficiência</h5>
                  
               </div>
               
         </div>
         <div className=" col-3 text-center">
            <div className="jumbotron  p-3 bg-light">
            <FontAwesomeIcon icon={faUniversalAccess} /><br/><br/>
               <h5 className=" text-md font font-weight-lighter mt-2">Acessivel</h5>
               
            </div>
            
   
      </div>
      <div className=" col-3 text-center">
         <div className="jumbotron  p-3 bg-light">
         <FontAwesomeIcon icon={faUserTie} /><br/><br/>
            <h5 className=" text-md font font-weight-lighter mt-2">Profissional</h5>
            
         </div>

      </div>
      </div>
   </div>




<div className="container mt-4">
<div className="jumbotron mb-4">
    <h4 className="mb-3">Depoimentos </h4>
    <div className="row">
    <div className="col-lg-6">   
    <blockquote>
    <p className="mb-5">Adipisci veritatis esse expedita odit neque quam! Repellat
       quas ad cum porro amet, maiores, dolores in magni ea enim. Commodi
       quidem consequuntur animi pariatur cumque distinctio.</p>
       <footer className="blockquote-footer">
    Luis Gustavo Pereira Filho
    </footer>
 
    </blockquote>
 </div>
    <div className="col-lg-6">   
    <blockquote>
    <p className="mb-5">Sed ut perspiciatis unde omnis iste natus error sit
       voluptatem accusantium doloremque laudantium, totam rem aperiam,
       eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
       <footer className="blockquote-footer">
    Sergio albuquerque
    </footer>
   
    </blockquote>
 </div>
    <div className="col-lg-6">   
    <blockquote>
    <p className="mb-5">Nemo enim ipsam voluptatem quia voluptas sit aspernatur
       aut odit aut fugit, sed quia consequuntur magni dolores eos qui
       ratione voluptatem sequi nesciunt.</p>
       <footer className="blockquote-footer">
    Pedro arnaldo Soares
    </footer>
 
    </blockquote>
 </div>
 </div>
</div>  
</div>
     
     </>
    )
  }
  export default SobreEmpresa