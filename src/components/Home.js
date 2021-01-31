import React from 'react';
import "../scss/Home.scss";
import {Link} from 'react-router-dom';
import Header from "./Header.js";


const Home = () => {
    return (
        <>
        <Header/>
        <div className="homePageWrapper">
           
            <Link to="/questions">
                <div className="singleLink"><i class="far fa-question-circle"></i><p>Ćwicz pytania</p></div>
            </Link>
           
            <Link to="/">
                <div className="singleLink disabled"><i class="far fa-file-alt"></i><p>Test (niedostępny)</p></div>
            </Link>
        </div>
        </>
    );
}
 
export default Home;

