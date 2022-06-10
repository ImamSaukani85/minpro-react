import React from 'react'
import {
    Navbar,
    Container,
    Nav,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap'
import { Link } from "react-router-dom";
import '../../assets/styles/index.css';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const isLogin = Cookies.get("token")
    const navigate = useNavigate()

    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand className="fw-bold fs-4 py-3">La Collection</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', fontSize: "18px" }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>

                        {isLogin ? (
                        <> 
                        <Nav.Link as={Link} to="/dashboard-admin" className="dashboard">
                            Dasboard Admin
                        </Nav.Link>
                            <Button as={Link} to="/register" variant="outline-success" href="" className="me-2">
                                <i className="fa fa-user-plus me-1">
                                    </i>Register
                            </Button>
                            <Button onClick={() => {
                                Cookies.remove("token")
                                navigate("/login")
                            }} variant="outline-success" href="" className="me-2">
                                <i className="fa fa-sign-out me-1 ms-2">
                                    </i>Logout
                            </Button>
                                </>
                                    ) : (
                            <Button as={Link} to="/login" variant="outline-success" href="" className="me-2">
                                <i className="fa fa-sign-in me-1 ms-2">
                                    </i>Login
                            </Button>
                                        )}




                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header