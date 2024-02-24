import { IoIosAddCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

export default function altaAgremiacion() {
  const getDate = () => {
    const date = new Date();
    return date.toDateString();
  };
    return (
    <main className="bg-emerald-400">
        <h1>Alta de Consultorio</h1>
         
        <form>
            <div>
                <label for="nombre"> Nombre </label>
                <input name="nombre" id="nombre" type="text"/>
                <label for="telefono"> Telefono </label>
                <input name="telefono" id="telefono" type="text"/>
                <label for="email"> Email </label>
                <input name="email" id="email" type="text"/>
            </div>
            
            <div>
                <h2> Domicilio</h2> 
                <label for="Calle"> calle </label>
                <input name="calle" id="calle" type="text"/>
                <label for="Numero"> Numero </label>
                <input name="numero" id="numero" type="text"/>
                <label for="piso"> Piso </label>
                <input name="piso" id="piso" type="text"/>
                <label for="depto"> Depto </label>
                <input name="depto" id="depto" type="text"/>
                <label for="provincia"> Provincia </label>
                <select name="" id="">
                    <option value="buenosAires">Buenos Aires</option>
                    <option value="cordoba">Cordoba</option>
                    <option value="santaFe">Santa Fe</option>
                </select>
            </div>
        </form>
        
      </main>
    );
  }



