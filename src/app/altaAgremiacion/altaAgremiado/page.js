"use client"
import Link from "next/link";
import { Button } from "@/components/button";
import { useState } from "react";
import { agremiados } from "@/data/agremiados";

export default function altaAgremiado() {

  const [formData, setFormData] = useState({
    nombre:'',
    apellido:'',
    email: '',
    dni: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleForm =(e)=>{
    e.preventDefault();
    
    console.log('Datos del formulario:', formData);
    agremiados.push(formData);
    console.log(agremiados);
    
  }

  return (
    <main className="bg-teal-300 h-screen p-20">
      <div className="h-full text-xl flex flex-col justify-between gap-12 bg-slate-50 p-10 rounded-md">
        <div className="flex flex-col items-center justify-center gap-12 h-full">
          <h1 className="text-4xl">Alta de agremiado</h1>
          <form onSubmit={handleForm} className="flex flex-col justify-center max-w-[500px] gap-3">
            <label for="nombre"> Nombre </label>
            <input onChange={handleChange} name="nombre" id="nombre" type="text" className="p-2 border-2 border-[#000] rounded-[4px]"/>
            <label for="apellido"> Apellido </label>
            <input onChange={handleChange} name="apellido" id="apellido" type="text" className="p-2 border-2 border-[#000] rounded-[4px]"/>
            <label for="dni"> Dni </label>
            <input onChange={handleChange} name="dni" id="dni" type="text" className="p-2 border-2 border-[#000] rounded-[4px]"/>
            <label for="email"> Email </label>
            <input onChange={handleChange} name="email" id="email" type="text" className="p-2 border-2 border-[#000] rounded-[4px]"/>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="flex gap-5 justify-end">
          <Link href="/">
            <Button text="Cerrar"/>
          </Link>
          <Link href="/altaAgremiacion">
            <Button text="Aceptar"/> {/* Implementar funcionalidad de guardar cambios al darle a aceptar! */}
          </Link>
        </div>
      </div>
    </main>
  );
}