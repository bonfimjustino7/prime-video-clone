import React from 'react';
import { FiSearch } from 'react-icons/fi';


import './styles.css';

export default function Input( { params } ){

    return (
        <form autoComplete="off">
            <div className="campo">
                <label htmlFor="search">
                    <FiSearch size={22} color="#babcc0" />
                </label>
                <input type="text" placeholder="Buscar" id="search" name="oi" />
            </div>
        </form>
    )



}