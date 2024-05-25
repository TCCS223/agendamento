
"use client";

import styles from "./page.module.css"
export default function ModalCreate({ title, diaInicio, diaFim, isInteiro}) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.headerTitle}>INFO</h1>
                <button className={styles.button}>Close</button>
            </div>
            <div className={styles.body}>
                <h2 className={styles.bodyTitle}>Data inicio: {diaInicio}</h2>
                <h2 className={styles.bodyTitle}>Data fim: {diaFim}</h2>
                <h2 className={styles.bodyTitle}>Dia inteiro: {isInteiro ? 'Sim' : 'Não'} </h2>
                <p className={styles.bodyText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <h1 className={styles.h1}>Testes</h1>
        </div>
    )
}