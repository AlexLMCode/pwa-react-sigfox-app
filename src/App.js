import React from 'react'
import './App.css';
import Navigation from "./components/Navigation";
import MainTable from "./components/MainTable";
import Button from 'react-bootstrap/Button'

const App = () => {
    // useEffect(() => {
    //     fetchMessages().then((data) => console.log(data))
    // }, [])
    return (
        <>
            <Navigation/>
            <section className="container mt-5">
                <h1>Bienvenido...</h1>
                <p>Los datos mostrados son del dia de hoy</p>
                <MainTable/>
                <a className="mt-3 mb-5 d-flex justify-content-center">Acceder a los datos de dias anteriores...</a>
                <div className="d-flex justify-content-around">
                    <Button variant="success" >Encender</Button>
                    <Button variant="danger">Apagar</Button>
                </div>
            </section>
        </>
    );
};

export default App;
