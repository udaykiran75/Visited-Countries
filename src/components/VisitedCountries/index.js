import './index.css'

const VisitedContries = props => {
  const {countryDetails, onClickRemoveButton} = props
  const {id, name, imageUrl, isVisited} = countryDetails
  const onRemoveCountry = () => {
    onClickRemoveButton(id)
  }

  return (
    <>
      {isVisited && (
        <li className="country-list-item">
          <img src={imageUrl} alt="thumbnail" className="thumbnail-image" />
          <div className="name-button-container">
            <p className="country-name">{name}</p>
            <button
              className="remove-button"
              type="button"
              onClick={onRemoveCountry}
            >
              Remove
            </button>
          </div>
        </li>
      )}
    </>
  )
}
export default VisitedContries
