import fotoPerfil from '../assets/pexels-2192742-3936894.jpg'
import facebook from '../assets/icons8-facebook-48.png'
import twitter from '../assets/icons8-twitter-48.png'
import google from '../assets/icons8-google-plus-48.png'
import plus from '../assets/icons8-plus-48.png'
import { Theme } from './Theme'
import { useState } from 'react'
//#121212 - #ECF0F1, #ECECEC - #9c9a9a, #444C56
export const CardPerfil = () => {
const [theme, setTheme] = useState('light');

  return (
    <div className={
        theme === 'light' ? 'bg-[#ECF0F1] min-h-4/10 min-w-75 max-w-1/3 grid grid-rows-3 grid-cols-1 justify-center items-center px-2 rounded-md shadow-xl font-Poppins' : 'bg-[#121212] min-h-4/10 min-w-75 max-w-1/3 grid grid-rows-3 grid-cols-1 justify-center items-center px-2 rounded-md shadow-xl text-[#ECECEC] font-Poppins dark'
        }>
        <div className='flex flex-col row-span-2 justify-center items-center w-full'>

            <Theme onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}/>
                
            <div className='flex flex-col justify-center items-center'>
                <ul><li><img className='size-20 rounded-full border-1 border-[#1ABC9C] shadow-md' src={fotoPerfil} alt="" /></li></ul>
                <h1 className='font-semibold text-2xl'>Rafaela Cruz</h1>
                <h6 className='font-semibold text-xs pt-1 pb-2 text-[#777] dark:text-[#9c9a9a]'>Front-end Developer</h6>
            </div>

            <p className='text-center text-sm px-3 pb-2 border-b-1 border-[#9c9a9a] dark:border-[#707070]'>Sou desenvolvedora front-end e apaixonada por transformar ideias em interfaces simples, bonitas e funcionais. Gosto de escrever código limpo, resolver problemas com calma e aprender algo novo sempre que posso.</p>
        </div>
        <div className='w-full flex flex-col justify-center items-center row-span-1'>
            <div className='flex justify-center items-center'>
                <ul className='flex gap-1'>
                    <li><img className='size-6 cursor-pointer' src={facebook} alt="" /></li>
                    <li><img className='size-6 cursor-pointer' src={twitter} alt="" /></li>
                    <li><img className='size-6 cursor-pointer' src={google} alt="" /></li>
                    <li><img className='size-6 cursor-pointer' src={plus} alt="" /></li>
                </ul>
            </div>
            <button className='bg-[#1ABC9C] mt-7 py-2 px-7 rounded-3xl font-semibold cursor-pointer shadow-md hover:bg-[#148f77] dark:text-white'>Contratar</button>
        </div>
    </div>
  )
}
