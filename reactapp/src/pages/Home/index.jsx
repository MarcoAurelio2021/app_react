import './styles.css';

import {Card} from '../../Components/Card/index'

 export function Home() {
  return (
 <div className='container'>
  <h1>Lista de Presença</h1>
  <input type="text" placeholder='Digite o nome...' />
  <button type='button'>Adicionar</button>

  <Card />
  <Card />
  <Card />
  
 </div>
     
  )
}
