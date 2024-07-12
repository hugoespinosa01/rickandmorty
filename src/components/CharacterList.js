import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useGetCharacters } from '../services'

function CharacterList() {

  //Iniciar variables de estado para paginación
  const [page, setPage] = useState(1);

  //Consumo de data
  const data = useGetCharacters(page);

  const minPage = 1;
  const maxPage = data?.info?.pages;

  /**
   * Navega a página siguiente
   */
  const nextPage = () => {
    setPage(page + 1);
  }

  /**
   * Navega a página anterior
   */
  const previousPage = () => {
    setPage(page - 1);
  }

  return (
    <div>
      <div className='justify-content-center text-center mt-5'>
        <h1 className="display-4">Lista de personajes de Rick & Morty</h1>
        <p className="lead">
          Hecho por Hugo Espinosa Martínez
        </p>
      </div>
      <div className='row mt-5 justify-content-center'>
        {
          data?.results?.map((item, index) => {
            return (
              <Card className="card p-5 m-3 shadow p-3 mb-5 bg-white rounded" style={{ width: '18rem' }} key={index}>
                <Card.Img variant='top' src={item?.image} alt={item?.name} />
                <Card.Body>
                  <Card.Title>{item?.name}</Card.Title>

                </Card.Body>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><b>Status</b> {item?.status}</li>
                  <li class="list-group-item"><b>Species</b> {item?.species}</li>
                </ul>
              </Card>)
          })
        }
      </div>
      <div className='block'>
        <Button
          onClick={previousPage}
          disabled={page == minPage}
          className='m-3'
        >
          Anterior
        </Button>
        <Button
          onClick={nextPage}
          disabled={page == maxPage}
          className='m-3'>
          Siguiente
        </Button>
      </div>
    </div>
  )
}

export default CharacterList