import React from 'react';

import './styles.css';
import Logo from '../Logo';
import Input from '../Input';
import { FiUser } from 'react-icons/fi';


export default function Header(params) {
    
    const { handleProtected, dropdow } = params;    

    function toggle(){
        handleProtected(!dropdow);
    }

    return (
        <header>
            <div className="container">
                <a href="#">
                    <Logo/>
                </a>
                <div className="principal">
                    <div className="menu">
                        <ul className="items">
                            <li>Início</li>
                            <li>Séries</li>
                            <li>Filmes</li>
                        </ul>
                    </div>
                    <div className="menu">
                       <Input/>
                       <div className="user-tools" onClick={toggle}>
                           <FiUser size={25} color="#babcc0"/>

                           <ul className={dropdow ? 'dropdown-show': 'dropdown-hidden'}>
                               <li><a href="/sua">Sua Conta</a></li>
                               <li><a href="#">Conta e configurações</a></li>
                               <li><a href="#">Assista onde quiser</a></li>
                               <li><a href="#">Ajuda</a></li>
                               <li><a href="#">Não é Bonfim? Sair</a></li>
                           </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}