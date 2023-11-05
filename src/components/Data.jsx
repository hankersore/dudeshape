import './Data.css';


function Data() {
  const info = [
    {
      name: 'organic products',
      statistics: '100%'
    },
    {
      name: 'yearly sales',
      statistics: '2M+'
    },
    {
      name: 'happy customer',
      statistics: '1.9M+'
    }
  ]

  return (
    <section className='data'>
        {info.map((elem, index) => (
          <div className='data__content' key={index}>
            <p className='data__stat'>{elem.statistics}</p>
            <div className='data__line'></div>
            <p className='data__name'>{elem.name}</p>
          </div>
        ))}
    </section>
  )
}

export default Data