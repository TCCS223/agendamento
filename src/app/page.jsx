'use client';

import Swal from 'sweetalert2';

import styles from './page.module.css';

import React from "react";
import { useState } from 'react';
import Link from "next/link";
import modal from "./filtrage/page.jsx";
import { input } from '@nextui-org/react';
import withReactContent from 'sweetalert2-react-content'

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
                <div class="consulta">

                </div>
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
                        </div>
                    </div>
                )}
            </div>




        </div>
    );
}
