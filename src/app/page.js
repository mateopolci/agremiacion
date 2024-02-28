"use client"
import { Button } from "@/components/button";
import Link from "next/link";


export default function Home() {
  return (
  
      <main className="home">
        <div className="flex p-10 flex-col justify-center items-center gap-32 h-full w-[50%]">
          <h1 className="text-4xl text-center">Agremiación odontológica de Buenos Aires </h1>
          <Link href="/altaAgremiacion" className="text-2xl">
            <Button text="Agremiarse"/>
          </Link>
      </div>

  {/*       
        <div>
          <Link href="/altaAgremiacion/altaAgremiado">
            <Button text="Alta de agremiado"/>
          </Link>
          <Link href="/consultorio">
            <Button text="Consultorios"/>
          </Link>
          <Link href="/consultorio/altaConsultorio">
            <Button text="altaConsultorio"/>
          </Link>
        </div> */}

      </main>
   
  );
}
