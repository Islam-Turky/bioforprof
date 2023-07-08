import { FaWhatsapp, FaFacebook, FaInstagram, FaPhoneFlip } from 'react-icons/fa6';
import './App.css'

function App() {
  return (
    <>
      <section id='container'>
        <div id='one'>
          <div className="box">
            <div id='logo'>
              <img src="/logo.png" alt="logo" />
              <h1>Prof/ Yousef Awny</h1>
            </div>
            <hr style={{ width: '350px' }}/>
            <div id='links'>
              <a href="https://www.facebook.com/profile.php?id=100044132653083&mibextid=ZbWKwL" id='facebook'><FaFacebook /><p>Facebook</p></a>
              <a href="https://api.whatsapp.com/send?phone=201201966426" id='whatsapp'><FaWhatsapp /><p>Whatsapp</p></a>
              <a href="https://instagram.com/you_r5j?igshid=MzNlNGNkZWQ4Mg==" id='instagram'><FaInstagram /><p>Instagram</p></a>
              <a href="tel:+201201966426" id='tele'><FaPhoneFlip /><p>+20 01201966426</p></a>
            </div>
            <a href='https://m.facebook.com/story.php?story_fbid=pfbid0Qsrg461npkJGRa4f2jT3imtWfVpDHUxUQP4EoRER92MxgFbAghYyNAF24Szwty1Vl&id=100044132653083&mibextid=Nif5oz' className='slogan'>الفرنساوي_في_شوال#</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default App;
