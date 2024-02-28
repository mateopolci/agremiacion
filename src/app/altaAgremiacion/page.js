"use client"

import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";
import { Button } from "@/components/button";
import { Agremiado } from "@/components/agremiado";
import { Search } from "@/components/Search/Search";
import { NextUIProvider } from "@nextui-org/react";
import { TableComponent } from "@/components/TableComponent";

export default function altaAgremiacion() {
  const getDate = () => {
    const date = new Date();
    return date.toDateString();
    };

    return (
      <NextUIProvider>
        <main className="bg-teal-300 h-screen p-20">
          <div className="h-full text-xl flex flex-col justify-between gap-12 bg-slate-50 p-10 rounded-md">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">Alta de Agremiacion</h1>
              <p>Fecha de alta:{getDate()}</p>
            </div>
            <div className="flex gap-12 items-center">
              <div className="flex gap-5 items-center">
                <label>Agremiado:</label>
                <Search/>
              </div>
              <Link href="/altaAgremiacion/altaAgremiado">
                <IoIosAddCircle className="text-5xl cursor-pointer"/> {/* Boton para ir a ventana de alta de agremiado */}
              </Link>
            </div>

            <TableComponent/>

            <div className="flex gap-3 items-center">
              <label>Matricula:</label>
              <input className="p-2 border-2 border-[#000] rounded-[4px]" type="search"/>
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
      </NextUIProvider>
    );
  }
  

