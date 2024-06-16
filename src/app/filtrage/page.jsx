'use client';

import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import styles from './page.module.css'

export default function modal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className={styles.corpo}>
      <Button onPress={onOpen}>Open Modal</Button>


      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true} className={styles.modal}>
        <ModalContent>
          {(onClose) => (
            <>

             

              <ModalHeader className={styles.header}>Modal Title</ModalHeader>
              <ModalBody className={styles.body}>
                <fieldset className={styles.radiogroup}>
                  <fieldset className={styles.opPesquisa}>
                  <label htmlFor="" className={styles.label}>Pesquisar por</label>
                  <table border="1">
                      <tr>
                          <td>Coluna 1, Linha 1</td>
                          <td>Coluna 2, Linha 1</td>
                      </tr>
                      <tr>
                          <td>Coluna 1, Linha 2</td>
                          <td>Coluna 2, Linha 2</td>
                      </tr>
                  </table>
                  </fieldset>
                  <fieldset className={styles.grupobolinha}>
                  {/* <table border="1">
                      <tr>
                          <td>Coluna 1, Linha 1</td>
                          <td>Coluna 2, Linha 1</td>
                      </tr>
                      <tr>
                          <td>Coluna 1, Linha 2</td>
                          <td>Coluna 2, Linha 2</td>
                      </tr>
                  </table> */}
                  {/* <input type="radio"  />
                  <label >Meio termo</label> 
                  <input type="radio"  />
                  <label >Meio termo</label> 
                  <input type="radio"  />
                  <label >Meio termo</label>
                  <input type="radio"  />
                  <label >Meio termo</label>  */}
                  </fieldset>
                  


                  <fieldset className={styles.filtro}>
                  <label htmlFor="" className={styles.label}>Pesquisar por</label>
                  </fieldset>

                  <fieldset className={styles.situacao}>
                  <label htmlFor="" className={styles.label}>Pesquisar por</label>
                  </fieldset>
                  {/* <input type="text" className={styles.input} required /> */}
                </fieldset>

                <fieldset className={styles.pesquisar}>
                  <input className={styles.barpesquisa} type="text" placeholder="Digite........."/>
                  <button className={styles.botaopesquisa}>Pesquisar</button>
                </fieldset>

                <fieldset className={styles.resultado}>
                  
                </fieldset>

                
                
                




                
              </ModalBody>
              <ModalFooter>
                <Button className={`${styles.button} ${styles.fechar}`} color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button className={`${styles.button} ${styles.confirmar}`} color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
