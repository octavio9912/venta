import React, { useEffect, useState } from 'react'; // Importa React y varios hooks de React
import './Categorias.css'; // Importa un archivo de estilos
import Carousell from '../Components/Carousel/Carousel'
import BasicExample from '../Components/Cards/Cards'; // Importa un componente llamado BasicExample de otro archivo
import BasicExample2 from '../Components/Cards/Cards_consoles'; // Importa un componente llamado BasicExample de otro archivo
import BasicExample3 from '../Components/Cards/Cards_accessories'; // Importa un componente llamado BasicExample de otro archivo
import getGameOffers from '../API/getGameOffers'; // Importa una función llamada getGames desde un archivo de API
import getConsoleOffers from '../API/getConsoleOffers'; // Importa una función llamada getGames desde un archivo de API
import getAccessoryOffers from '../API/getAccessoryOffers'; // Importa una función llamada getGames desde un archivo de API
import Cargando from '../Components/Cargando/Cargando';

const Ofertas = () => {

//Variables useState
const [games, setGames] = useState([]); // Declara un estado llamado games con un array vacío como valor inicial
const [isLoading, setIsLoading] = useState(true); // Declara un estado llamado isLoading con true como valor inicial
const [consoles, setConsoles] = useState([]); // Declara un estado llamado games con un array vacío como valor inicial
const [accessories, setAccessories] = useState([]); // Declara un estado llamado games con un array vacío como valor inicia

useEffect(() => { // Utiliza el hook useEffect para realizar efectos secundarios en el componente
  getGameOffers().then((resultado) => { // Llama a la función getGames y maneja el resultado
    setTimeout(() => { // Establece un retardo de 1000ms antes de actualizar el estado
      setGames(resultado.data); // Actualiza el estado games con los datos obtenidos
      console.log({ 'mi data: ': resultado.data }); // Imprime los datos obtenidos en la consola
      setIsLoading(false); // Actualiza el estado isLoading a false para indicar que la carga ha finalizado
    }, 3000); // Establece el retardo en 1000ms (1 segundo)
  });
}, []); // Ejecuta el efecto solo una vez, al montar el componente (deps vacío)

useEffect(() => { // Utiliza el hook useEffect para realizar efectos secundarios en el componente
  getConsoleOffers().then((resultado) => { // Llama a la función getGames y maneja el resultado
    setTimeout(() => { // Establece un retardo de 1000ms antes de actualizar el estado
      setConsoles(resultado.data); // Actualiza el estado games con los datos obtenidos
      console.log({ 'mi data: ': resultado.data}); // Imprime los datos obtenidos en la consola
      setIsLoading(false); // Actualiza el estado isLoading a false para indicar que la carga ha finalizado
    }, 3000); // Establece el retardo en 1000ms (1 segundo)
  });
}, []); // Ejecuta el efecto solo una vez, al montar el componente (deps vacío)

useEffect(() => { // Utiliza el hook useEffect para realizar efectos secundarios en el componente
  getAccessoryOffers().then((resultado) => { // Llama a la función getGames y maneja el resultado
    setTimeout(() => { // Establece un retardo de 1000ms antes de actualizar el estado
      setAccessories(resultado.data); // Actualiza el estado games con los datos obtenidos
      console.log({ 'mi data: ': resultado.data}); // Imprime los datos obtenidos en la consola
      setIsLoading(false); // Actualiza el estado isLoading a false para indicar que la carga ha finalizado
    }, 3000); // Establece el retardo en 1000ms (1 segundo)
  });
}, []); // Ejecuta el efecto solo una vez, al montar el componente (deps vacío)

//Loader
if (isLoading) { // Comprueba si isLoading es true
  return <> 
    <Cargando/> 
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

    const listConsoles = () => { // Declara una función llamada listGames
      return consoles.map((item) => ( // Mapea los elementos del array games y devuelve un componente BasicExample para cada elemento
        <BasicExample2
          consoleID={item.consoleID}
          consoleTitle={item.consoleTitle}
          consoleImage={item.consoleImage}
          consoleManufacturer={item.consoleManufacturer}
          consoleCategories={item.consoleCategories}
          consoleDescription={item.consoleDescription}
        />
      ));
    }

    const listAccessories = () => { // Declara una función llamada listGames
      return accessories.map((item) => ( // Mapea los elementos del array games y devuelve un componente BasicExample para cada elemento
        <BasicExample3
        accessoryID={item.accessoryID}
        accessoryTitle={item.accessoryTitle}
        accessoryImage={item.accessoryImage}
        accessoryManufacturer={item.accessoryManufacturer}
        accessoryCategories={item.accessoryCategories}
        accessoryDescription={item.accessoryDescription}
        />
      ));
    }

    return (
      <section class="content-Inicio">
      
          
      <div>
        <h2>Ofertas en juegos</h2>
      </div>
      
      <div class="Cards"> 
        {listGames()} {/* Llama a la función listGames para mostrar la lista de juegos*/}
      </div>
      <Carousell />
      <div> 
        <h2>Ofertas en Consolas</h2> 
      </div>

      <div class="Cards"> 
        {listConsoles()} {/* Llama a la función listGames para mostrar la lista de juegos*/}
      </div>

      <div> 
        <h2>Ofertas en Accesorios</h2> 
      </div>

      <div class="Cards"> 
        {listAccessories()} {/* Llama a la función listGames para mostrar la lista de juegos*/}
      </div>

    </section>
    )
  }
}

export default Ofertas