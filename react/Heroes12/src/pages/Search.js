import React, { useMemo } from 'react'
import { useForm } from '../hooks/useForm';
import { getHeroesBySearch } from '../helpers/getHeroesBySearch';
import { useSearchParams } from 'react-router-dom';
import { HeroeCard } from '../components/HeroeCard';

export const Search = () => {

  const [searchParams, setSearchParams] = useSearchParams({
    keyword: ""
  })

  const [{ keyword }, handleInputChange,reset] = useForm({
    keyword: searchParams.get('keyword')
  });

  const handleSearch = (e) => {

    e.preventDefault();
    setSearchParams({
      keyword
    })
    
  }

  const resultado = useMemo(() => getHeroesBySearch(searchParams.get('keyword')), [searchParams])


  return (
    <div className='row'>
      <div className='col-3'>
        <h4>Búsqueda</h4>
        <hr />
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder='Buscá tu héroe...'
            className='form-control'
            name='keyword'
            value={keyword}
            onChange={handleInputChange}
          />
        </form>
      </div>
      <div className='col-9'>
        <h4>Resultados</h4>
        <hr />
        <div className='row'>
          {
            searchParams.get('keyword') === "" &&
            <div className='alert alert-info'>
              Aquí veras el resultado de tu búsqueda
            </div>
          }

          {
            searchParams.get('keyword') !== "" && resultado.length === 0 &&
            <div className='alert alert-danger'>
              No hay resultados para tu búsqueda "{keyword}"
            </div>
          }

          {
            resultado.map(heroe => (
              <HeroeCard
                key={heroe.id}
                {...heroe}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
