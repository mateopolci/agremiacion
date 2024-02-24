export default function altaAgremiado() {
    return (
      <main className="bg-emerald-400">
        altaAgremiado
        <h1>Alta de agremiado</h1>
        <form>
          <label for="nombre"> Nombre </label>
          <input name="nombre" id="nombre" type="text"/>
          <label for="apellido"> Apellido </label>
          <input name="apellido" id="apellido" type="text"/>
          <label for="dni"> Dni </label>
          <input name="dni" id="dni" type="text"/>
          <label for="email"> Email </label>
          <input name="email" id="email" type="text"/>

      </form>

      </main>
    );
  }