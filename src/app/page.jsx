'use client';

import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import styles from './page.module.css'
import Link from "next/link";
import modal from "./filtrage/page.jsx";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
    <div className={styles.coorpo}>
      <Button onPress={onOpen}>Open Modal</Button>
     
      <Link href="/filtrage">pesquisars</Link> 

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true} className={styles.modal}>
        <ModalContent>
          {(onClose) => (
            <>
              

              <ModalHeader className={styles.header}>Modal Title</ModalHeader>
              <ModalBody className={styles.body}>
                <fieldset className={styles.fieldset}>
                  <label htmlFor="" className={styles.label}>NOME</label>
                  <input type="text" className={styles.input} required />
                </fieldset>

                <fieldset className={styles.fieldset}>
                  <label htmlFor="" className={styles.label}>TELEFONE</label>
                  <input type="text" className={styles.input} required/>
                </fieldset>

                <fieldset className={styles.fieldset}>
                  <label htmlFor="" className={styles.label}>EMAIL</label>
                  <input type="text" className={styles.input} required/>
                </fieldset>
                
                <fieldset className={styles.fieldset}>
                  <label htmlFor="" className={styles.label}>SENHA</label>
                  <input type="password" className={styles.input} required/>
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
    </>
  );
}
