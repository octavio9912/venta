import React, { useEffect, useRef, useState } from 'react'; // Importa React y varios hooks de React
import './Categorias.css'; // Importa un archivo de estilos
import BasicExample from '../Components/Cards/Cards'; // Importa un componente llamado BasicExample de otro archivo
import getGames from '../API/getGames'; // Importa una función llamada getGames desde un archivo de API

const Categorias = () => { // Define un componente funcional llamado Categorias
//Variables useState
  const [games, setGames] = useState([]); // Declara un estado llamado games con un array vacío como valor inicial
  const [isLoading, setIsLoading] = useState(true); // Declara un estado llamado isLoading con true como valor inicial


  //UseEffects
  useEffect(() => { // Utiliza el hook useEffect para realizar efectos secundarios en el componente
    getGames().then((resultado) => { // Llama a la función getGames y maneja el resultado
      setTimeout(() => { // Establece un retardo de 1000ms antes de actualizar el estado
        setGames(resultado.data); // Actualiza el estado games con los datos obtenidos
        console.log({ 'mi data: ': resultado.data }); // Imprime los datos obtenidos en la consola
        setIsLoading(false); // Actualiza el estado isLoading a false para indicar que la carga ha finalizado
      }, 1000); // Establece el retardo en 1000ms (1 segundo)
    });
  }, []); // Ejecuta el efecto solo una vez, al montar el componente (deps vacío)
  
  //Loader
  if (isLoading) { // Comprueba si isLoading es true
    return <> // Devuelve un fragmento de JSX
      Esta cargando esta madre ! {'>.<'} // Muestra un mensaje de carga
    </>
  } else { // Si isLoading es false (carga finalizada)

  //Funciones para listar categorias
    const listGames = () => { // Declara una función llamada listGames
      return games.map((item) => ( // Mapea los elementos del array games y devuelve un componente BasicExample para cada elemento
        <BasicExample
          gameID={item.gameID}
          gameImage={item.gameImage}
          gameTitle={item.gameTitle}
          gameText={item.gameDescription}
          gameDeveloper={item.gameDeveloper}
          gameDesigner={item.gameDesigner}
          gameReleaseDate={item.gameReleaseDate}
        />
      ));
    }

    return ( // Devuelve un fragmento de JSX
      <section class="content-Inicio">
        <div> 
          <h2>Categorias</h2> 
        </div>

        <div class="Cards"> 
          {listGames()} P{/* Llama a la función listGames para mostrar la lista de juegos*/}
        </div>

      </section>
    )
  }
}

export default Categorias; // Exporta el componente Categorias para su uso en otros archivos
