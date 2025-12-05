import './index.scss'
import AyaanPhoto from '../../../assets/images/ayaan.jpg'

const Logo = () => {
  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={AyaanPhoto}
        draggable="false"
        alt="Ayaan Khan"
      />
    </div>
  )
}

export default Logo
