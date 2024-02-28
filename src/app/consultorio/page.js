import { Button } from "@/components/button";
import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";


export default function ConsultorioPage() {
  return (
    <>
      <div>
        <h1>Consultorio</h1>
      </div>

      <div className="flex gap-5 justify-end">
        <Link href="/">
          <Button text="Cerrar" />
        </Link>
        <Link href="/">
          <Button text="Aceptar" />{" "}
          {/* Implementar funcionalidad de guardar cambios al darle a aceptar! */}
        </Link>
      </div>

      <Link href="/consultorio/altaConsultorio">
        <IoIosAddCircle className="text-5xl cursor-pointer"/> {/* Boton para ir a ventana de alta de consultorio */}
      </Link>
    </>


  );
}
