import Image from "next/image";
import styles from "./page.module.css";
import ModalCreate from "@/components/modal";
//importando a fullcalendar
import FullCalendar from "@/components/fullcalendar/page";

export default function Home() {
  return (
<div>
    
      <FullCalendar />




      {/* {isModalActive &&
      <ModalCreate 
        title={'Dia de festa'}
        diaInicio={'Dia inicio'}
        diaFim={'Dia fim'}
        isInteiro={false}
      />
      } */}




    </div>
  );
}
