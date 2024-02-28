import { Button } from "@/components/button";
import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

export default function altaAgremiacion() {
  const getDate = () => {
    const date = new Date();
    return date.toDateString();
  };
    return (
    <main className="bg-emerald-400 h-screen">
        <h1>Alta de Consultorio</h1>
         
        <div>
              <h1>Consultorio del agremiado XXXXXX HAY QUE LLAMAR AL AGREMIADO QUE SELECCIONAMOS ANTES </h1>
          </div>
          
        <form>
            <div>
                <label for="nombre"> Nombre </label>
                <input name="nombre" id="nombre" type="text" className="p-2 border-2 border-[#000] rounded-[4px]"/>
                <label for="telefono"> Telefono </label>
                <input name="telefono" id="telefono" type="text" className="p-2 border-2 border-[#000] rounded-[4px]"/>
                <label for="email"> Email </label>
                <input name="email" id="email" type="text" className="p-2 border-2 border-[#000] rounded-[4px]"/>
            </div>
            
            <div>
                <h2> Domicilio</h2> 
                <label for="Calle"> calle </label>
                <input name="calle" id="calle" type="text" className="p-2 border-2 border-[#000] rounded-[4px]"/>
                <label for="Numero"> Numero </label>
                <input name="numero" id="numero" type="text" className="p-2 border-2 border-[#000] rounded-[4px]"/>
                <label for="piso"> Piso </label>
                <input name="piso" id="piso" type="text" className="p-2 border-2 border-[#000] rounded-[4px]"/>
                <label for="depto"> Depto </label>
                <input name="depto" id="depto" type="text" className="p-2 border-2 border-[#000] rounded-[4px]"/>
                <label for="provincia"> Provincia </label>
                <select name="" id="">
                    <option value="buenosAires">Buenos Aires</option>
                    <option value="cordoba">Cordoba</option>
                    <option value="santaFe">Santa Fe</option>
                </select>
            </div>

        

        <div className="flex gap-5 justify-end">
          <Link href="/">
            <Button text="Cerrar"/>
          </Link>
          <Link href="/">
            <Button text="Aceptar"/> {/* Implementar funcionalidad de guardar cambios al darle a aceptar! */}
          </Link>
        </div>


        </form>
        
      </main>
    );
  }



