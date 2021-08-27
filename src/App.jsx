import React from 'react'
import * as Fa from 'react-icons/fa'
import MainLayout from './components/layouts/MainLayout'

function App() {
  return (
    <MainLayout>
      <section
        className="w-full text-white h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url(https://i.ibb.co/W2C4qqP/hero.png)'
        }}>
        <div className="flex justify-center place-items-center h-[calc(100vh-4rem)]">
          <div className="pt-20 text-6xl -mt-80 tracking-wide">
            <h1 className="font-bold">Discover</h1>
            <h1 className="font-light">Wonderful Indonesia</h1>
          </div>
          <div className="-rotate-90 origin-center absolute -left-9 top-1/4 flex justify-center place-items-center">
            <h4>Follow Us</h4>
            <ul className="flex mx-2">
              <li className="mx-2">
                <Fa.FaFacebook />
              </li>
              <li className="mx-2">
                <Fa.FaInstagram />
              </li>
              <li className="mx-2">
                <Fa.FaTwitter />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div>
          <img src="https://i.ibb.co/LdtctMt/holiday.png" alt="" />
        </div>
        <div>
          <h1>EAST nUSA TENGGARA</h1>
          <h1>Have you enjoyed your holiday?</h1>
          <p>You will be amazed if you take part in this sailing Komodo island tour package. So it is also mandatory for you, besides enjoying Komodo tourism on Komodo Island, you also have to taste the marine tourism.  The beautiful waters of Komodo will make you meet many travelers from other countries.</p>
        </div>
      </section>
    </MainLayout>
  )
}

export default App
