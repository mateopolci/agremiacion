import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { Button } from "@/components/button";
import { Agremiado } from "@/components/agremiado";

export default function altaAgremiacion() {
  const getDate = () => {
    const date = new Date();
    return date.toDateString();
    };
    
    const agremiados = [
      {
        id: 1,
        nombre: "Juan",
        apellido: "Perez",
        mail: "juan@gmail.com",
        tel: "123456789"
      },
      {
        id: 2,
        nombre: "Maria",
        apellido: "Gonzalez",
        mail: "maria@gmail.com",
        tel: "987654321"
      },
      {
        id: 3,
        nombre: "Carlos",
        apellido: "Lopez",
        mail: "carlos@gmail.com",
        tel: "456789123"
      }
    ]
    return (
      <main className="bg-teal-300 h-screen p-20">
        <div className="h-full text-xl flex flex-col justify-between gap-12 bg-slate-50 p-10 rounded-md">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Alta de Agremiacion</h1>
            <p>Fecha de alta:{getDate()}</p>
          </div>
          <div className="flex gap-12">
            <div className="flex gap-5">
              <label>Agremiado:</label>
              <div className="flex relative justify-center items-center gap-2">
                <input type="search" className="p-2  focus:border-none focus:resize-none focus:select-none"/>
                <FaSearch className="text-2xl" style={{ transform: 'scaleX(-1)' }} /> {/* Icono espejado que va dentro del input search */}
              </div>
            </div>
            
            <Link href="/altaAgremiacion/altaAgremiado">
              <IoIosAddCircle className="text-5xl cursor-pointer"/> {/* Boton para ir a ventana de alta de agremiado */}
            </Link>

          </div>
         
          {/* Tabla de agremiados */}
          <div className="grid grid-cols-5 grid-rows-6 border-2 border-black">
            <p className="tabla-header">Apellido</p>
            <p className="tabla-header">Nombre</p>
            <p className="tabla-header">Email</p>
            <p className="tabla-header">DNI</p>
            <p className="tabla-header">Acciones</p>
            
            {
              agremiados.map(agremiado => {
                return (
                  <Agremiado
                    key={agremiado.id}
                    nombre={agremiado.nombre}
                    apellido={agremiado.apellido}
                    mail={agremiado.mail}
                    tel={agremiado.tel}
                  />
                );
              })
            }
          </div>

          <div>
            <label>Matricula:</label>
            <input type="search"/>
          </div>

          <div className="flex gap-5 justify-end">
            <Link href="/">
              <Button text="Cerrar"/>
            </Link>
            <Link href="/">
              <Button text="Aceptar"/> {/* Implementar funcionalidad de guardar cambios al darle a aceptar! */}
            </Link>
          </div>
        </div>
      </main>
    );
  }
  

