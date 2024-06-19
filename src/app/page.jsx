'use client';

import Swal from 'sweetalert2';

// import styles from './page.module.css';
import styles from './sweetalert-custom.css';

import React from "react";
import { useState } from 'react';
import Link from "next/link";
import modal from "./filtrage/page.jsx";
import { input } from '@nextui-org/react';
import withReactContent from 'sweetalert2-react-content';
// import 'sweetalert2/dist/sweetalert2.min.css'; // Importando o CSS padrão do SweetAlert2
// import '../styles/sweetalert-custom.css'; // Caminho para o seu arquivo CSS personalizado



// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
// import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, CloseButton, Button, useDisclosure} from "@nextui-org/react";

export default function CadCliente() {

    const MySwal = withReactContent(Swal);

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

        const Consulta = () => {
        Swal.fire({
            width: 1200,
            confirmButtonText: 'Finalizar',
            showCloseButton: 'true',
            closeButtonHtml: '<button class="mdi--close"></button>',



            html: `
                <body>
                <div class="radioGroup">
                <h2>Pesquisa</h2>

                <div class="options">
                    <div class="option-group">
                        <h3>Opções de Pesquisa</h3>
                        <div class="option-group-grid">
                        <label>
                            <input type="radio" name="option" value="nome"> Nome
                        </label>
                        <label>
                            <input type="radio" name="option" value="cpf"> CPF
                        </label>
                        <label>
                            <input type="radio" name="option" value="telefone"> Telefone
                        </label>
                        <label>
                            <input type="radio" name="option" value="email"> Email
                        </label>
                        </div>
                    </div>
                    <div class="option-group">
                        <h3>Filtro</h3>
                        <label>
                            <input type="radio" name="filter" value="telefone"> Telefone
                        </label>
                        <label>
                            <input type="radio" name="filter" value="email"> Email
                        </label>
                    </div>
                    <div class="option-group">
                        <h3>Situação</h3>
                        <label>
                            <input type="radio" name="situation" value="ativo"> Ativo
                        </label>
                        <label>
                            <input type="radio" name="situation" value="inativo"> Inativo
                        </label>
                    </div>
                </div>

                <div class="input-field">
                    <input type="text" placeholder="Digite aqui">
                </div>

                <button>Pesquisar</button>

                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>Situação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Resultados da pesquisa -->
                    </tbody>
                </table>
            </div>
            </body>
            `
        });
    }

    return (


        <div id="clientes" className={`${styles.content_section}`}>
            <div className={styles.button_group}>
                {/* <button id="novoCliente" onClick={Novo}>Novo</button> */}
                {/* <button id="localizarCliente" onclick={onOpen}>Localizar</button> */}
                {/* <button id="localizarCliente" onClick={Pesquisar}>Localizar</button> */}
                {/* <button id="localizarCliente" onClick={openModal}>Localizar</button> */}
                {/* <button id="localizarCliente" onClick={Consulta}>Consulta</button> */}
                
                <button id="Consulta" onClick={Consulta}>Consulta</button>
                
            </div>

            <Link href="/filtrage">pesquisars</Link>
            <div>
      
    </div>



            {/* MODAL */}






        </div>
    );
}
