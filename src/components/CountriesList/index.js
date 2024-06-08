import './index.css'

const CountriesList = props => {
  const {countryDetails, onClickVisitCountry} = props
  const {id, name, isVisited} = countryDetails
  const onAddVisitCountry = () => {
    onClickVisitCountry(id)
  }

  return (
    <li className="countries-listitem">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited-text">Visited</p>
      ) : (
        <button
          className="filled-button"
          type="button"
          onClick={onAddVisitCountry}
        >
          Visit
        </button>
      )}
    </li>
  )
}
export default CountriesList
