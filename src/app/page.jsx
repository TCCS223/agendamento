'use client';

import Swal from 'sweetalert2';

import styles from './page.module.css';
// import styles from './ModalComponent.module.css';

import React from "react";
import { useState } from 'react';
import Link from "next/link";
import modal from "./filtrage/page.jsx";
import { input } from '@nextui-org/react';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
// import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, CloseButton, Button, useDisclosure} from "@nextui-org/react";

export default function CadCliente() {


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


        const showModal = () => {
          MySwal.fire({
            title: 'Custom Modal',
            html: `
              <div class="${styles.customModalContent}">
                <div class="${styles.radioGroup}">
            <input type="radio" id="option1" name="radiogroup1" value="Option 1">
            <label for="option1">Option 1</label><br>
            <input type="radio" id="option2" name="radiogroup1" value="Option 2">
            <label for="option2">Option 2</label><br>
            <input type="radio" id="option3" name="radiogroup1" value="Option 3">
            <label for="option3">Option 3</label>
                 </div>
             <div class="${styles.buttonGroup}">
                    <button id="actionButton">Click Me</button>

              </div>
             <div class="${styles.textareaGroup}">
                <textarea rows="5" cols="30"></textarea>
              </div>
             </div>
            `,
            showConfirmButton: false
          });
        };

    const Pesquisar = () => {
        Swal.fire({
            width: 1200,
            title: 'Error!',
            text: 'japones safado',
            icon: 'success',
            // confirmButtonText: 'ok',
            timer: 5000,
            buttons: false,
            timerProgressBar: 'true',
            // showCloseButton: "true",
            backdrop: `
            rgba(0,0,0,0.8)   
            `,
            customClass: {
                filter: 'my-swal',
            }
        });
    }

    const Novo = () => {
        Swal.fire({
            width: 1200,
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'ok',
            html:
                '<input id="swal-input1">' +
                '<input id="swal-input2" >',
            input: "email",
            inputLabel: "Your email address",
            inputPlaceholder: "Enter your email address",
            showCloseButton: "true",
            backdrop: `
            rgba(56,79,126,0.8)   
            `,
            customClass: {
                filter: 'my-swal'
            }
        });
    }

    const Consulta = () => {
        Swal.fire({
           width: 1200,
            confirmButtonText: 'Finalizar',
            html: `
                <body>
                <div class="container">
                <h2>Pesquisa</h2>

                <div class="options">
                    <div class="option-group">
                        <h3>Opções de Pesquisa</h3>
                        <label>
                            <input type="radio" name="option" value="nome"> Nome
                        </label>
                        <label>
                            <input type="radio" name="option" value="cpf"> CPF
                        </label>
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
                        <label>
                            <input type="radio" name="situation" value="todos"> Todos
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
                <button id="novoCliente" onClick={Novo}>Novo</button>
                {/* <button id="localizarCliente" onclick={onOpen}>Localizar</button> */}
                <button id="localizarCliente" onClick={Pesquisar}>Localizar</button>
                {/* <button id="localizarCliente" onClick={openModal}>Localizar</button> */}
                <button id="localizarCliente" onClick={Consulta}>Consulta</button>
            </div>

            <Link href="/filtrage">pesquisars</Link>
            <div>
      
    </div>



            {/* MODAL */}


            <div>
                <button onClick={openModal}>Open Modal</button>

                {/*Este codigo logo abaixo só será mostrado caso isOpen seja true*/}

                {isOpen && (
                    <div className={styles.modal_overlay} onClick={handleOverlayClick} >

                        {/* <button onClick={closeModal} className={styles.btnClose}>Close</button> */}
                        <div className={styles.modal}>
                            {/* <button onClick={closeModal} className={styles.btnClose}>Close</button> */}

                            <div className={styles.lorem}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eligendi libero corrupti ullam, amet voluptate perferendis repudiandae optio distinctio aperiam, aspernatur inventore repellat? Minima ut iste sapiente cum ex optio.
                            </div>
                            <button onClick={closeModal} class={styles.mdi__close}>
                            </button>
                            <button onClick={showModal}>Open Modal</button>
                        </div>
                    </div>
                )}
            </div>




        </div>
    );
}
