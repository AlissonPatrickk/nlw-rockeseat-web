import './styles/main.css'
import logoImg from './assets/logo-nlw-esports.png'
import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center m-20'>
      <img src={logoImg} alt="" />
      <h1 className='text-6xl text-white font-black m-20 ' >Seu Duo está Aqui</h1>

      <div className='grid grid-cols-6 gap-4 mt-16'>
        <a href='' className='relative'>
          <img  src='/games/game-1.png'/>
        </a>
        <a href=''>
          <img  src='/games/game-2.png'/>
        </a>
        <a href=''>
          <img  src='/games/game-3.png'/>
        </a>
        <a href=''>
          <img  src='/games/game-4.png'/>
        </a>
        <a href=''>
          <img  src='/games/game-5.png'/>
        </a>
        <a href=''>
          <img  src='/games/game-6.png'/>
        </a>

      </div>

      <div className='pt-1 self-stretch rounded-lg bg-white mt-8 overflow-hidden' >
        <div className='bg-[#2a2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block' >Não encontrou seu Duo</strong>
            <span className='text-zinc-400 block'>Publique um anuncio para encotrar novos players</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anuncio
          </button>
        </div>

      </div>
    </div>
    )
}

export default App
