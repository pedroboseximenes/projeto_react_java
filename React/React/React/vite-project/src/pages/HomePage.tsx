import 'bootstrap/dist/css/bootstrap.css';

import { Carousel, NavLink } from 'react-bootstrap';
import Footer from '../components/footer';
import useVoos from '../hooks/useVoo';
import { Link, Outlet } from 'react-router-dom';

const HomePage = () => {

  const { data: voos, isLoading, error } = useVoos();

  if (isLoading) return <h6>Carregando...</h6>;

  if (error) throw error;
    return (
  <>

<Carousel style={{marginTop:"69px"}} className='d-none d-md-block mb-4'>
  <Carousel.Item>
    <img width={1280} height={350} alt="1280x350" src="..\assets\images\panoramica1.jpg"/>
    <Carousel.Caption>
      <h3>Voos para todo o Brasil</h3>
      <p>Garantimos preços ótimos e segurança.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={1280} height={350} alt="1280x350" src="\assets\images\panoramica2.jpg" />
    <Carousel.Caption>
      <h3>Voos internacionais</h3>
      <p>Voe de FlyTrip</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>;


<div className="row">
      <div className="col-lg-2">
        <h5>Empresas</h5>
        <div className="nav flex-column nav-pills">
          <NavLink aria-current="page" className="nav-link" href='/'>
            Todos
          </NavLink>
          {voos?.map((voo) => (
            
            <NavLink key={voo.id}  className="nav-link" href={`/${voo.empresa}`} >
              {voo.empresa}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="col-lg-10">
        <Outlet />
      </div>
      </div>
<div className="container">
   <div className="jumbotron d-block d-md-none text-center" style={{marginTop: "89px"}}>
      <h4>Empresa focada em passagens aéreas por todo o mundo </h4>

      <h4>Veja abaixo os possiveis voos com um preço bem camarada</h4>
   </div>

  </div>
  

  <Footer></Footer>
  </>

    )
  }
  
  export default HomePage