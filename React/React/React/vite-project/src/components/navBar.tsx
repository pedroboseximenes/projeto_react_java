import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import useRecuperarItensCarrinho from "../hooks/useRecuperarItensCarrinho";



function NavBar() {
  // if (removendo) return null;


   const {data: itens_carrinhos, isLoading: carregandoItens, error: error} = useRecuperarItensCarrinho();

   if(carregandoItens) return <div>Carregando...</div>
    if(error) throw(error);
  
  return (
    <>

          <Navbar bg="light" expand="md" className="navbar navbar-light bg-light navbar-expand-md ">
              <Container className="container mb-4">
                  <Navbar.Brand className="navbar-brand" href="/">
                      <img
                          src="assets/images/wepik-linear-modern-plane-fly-trip-logo-202310020118316pLd.png"
                          alt="Rio Turismo"
                          style={{ width: '100px' }}
                      />
                  </Navbar.Brand>
                  <Navbar.Toggle className="navbar-toggler" aria-controls="menu" />
                  <Navbar.Collapse className="collapse navbar-collapse" id="menu">
                      <Nav className="navbar-nav mr-auto">
                          <Nav.Link className="nav-link nav-item" href="/">
                              <FontAwesomeIcon icon={faHome} /> Home
                          </Nav.Link>
                          <NavDropdown title={<><FontAwesomeIcon icon={faMoneyBill} className="dropdown" /> Compre</>} id="dropdownMenuButton">
                              <NavDropdown.Item className="dropdown-item" href="/listar-passagem">
                                  <FontAwesomeIcon icon={faPlane} /> Passagens Aéreas
                              </NavDropdown.Item>
                              
                          </NavDropdown>
                          <Nav.Link className="nav-link nav-item" href="/sobre">
                              <FontAwesomeIcon icon={faPhone} /> Quem somos?
                          </Nav.Link>
                      </Nav>
                      </Navbar.Collapse>
                      <Navbar.Collapse className="justify-content-end" id="menu">
                      <Nav className="navbar-nav">
                          <Nav.Link className="nav-link nav-item" href="/help">
                              <FontAwesomeIcon icon={faCircleInfo} /> Ajuda
                          </Nav.Link>
                          <Nav.Link className="nav-link nav-item" href="/carrinho">
                          {itens_carrinhos == undefined && (
                  <li className="d-flex justify-content-center">
                    Carrinho vazio
                  </li>
                )}
                              <FontAwesomeIcon icon={faCartShopping} /> Carrinho
                              {itens_carrinhos != undefined && (
                              <li className="d-flex justify-content-center">
                              
                R${" "}
                {itens_carrinhos! 
                  .reduce((total, item) => item.quantidade * item.passagem.preco + total, 0)
                  .toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    useGrouping: true,
                  })}
                              
              </li>
              )}
                          </Nav.Link>
                          <Nav.Link className="nav-link nav-item" href="/login">
                              <FontAwesomeIcon icon={faRightToBracket} /> Entrar
                          </Nav.Link>
                      </Nav>

                  </Navbar.Collapse>
                  
              </Container>
          </Navbar>

    </>
  );
}
export default NavBar;