import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";

export const Agremiado = ({nombre,apellido,mail,tel}) => {
    return (
      <>
        <p className="tabla-item">{apellido}</p>
        <p className="tabla-item">{nombre}</p>
        <p className="tabla-item">{mail}</p>
        <p className="tabla-item">{tel}</p>
        <div className="flex gap-5">
          <Link href="/consultorio">
            <p>Consultorio</p>
          </Link>
          <FaRegCheckCircle className="text-2xl cursor-pointer"/>
        </div>
      </>
    );
  }