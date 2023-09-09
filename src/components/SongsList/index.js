import {MdOutlineDeleteOutline} from 'react-icons/md'
import './index.css'

const SongsList = props => {
  const {details, deleteItem} = props

  const onClickDeleteBtn = () => {
    deleteItem(details.id)
  }

  return (
    <li className="item">
      <img className="img" alt="track" src={details.imageUrl} />
      <div className="text-container">
        <div className="heading">
          <p className="title"> {details.name}</p>
          <p className="genre"> {details.genre} </p>
        </div>
        <div className="duration-container">
          <p className="duration"> {details.duration} </p>
          <button
            type="button"
            data-testid="delete"
            onClick={onClickDeleteBtn}
            className="delete-btn"
          >
            <MdOutlineDeleteOutline size={18} />
          </button>
        </div>
      </div>
    </li>
  )
}

export default SongsList
