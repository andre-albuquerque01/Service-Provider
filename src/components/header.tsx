'use client'
import { fontLogo } from '@/app/font'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [navbar, setNavBar] = useState<boolean>(false)
  const [isTop, setIsTop] = useState<boolean>(true)

  useEffect(() => {
    const desactivateNavBar = () => setNavBar(false)
    window.addEventListener('resize', desactivateNavBar)
    return () => window.removeEventListener('resize', desactivateNavBar)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 0 && isTop) {
        setIsTop(false)
      } else if (scrollPosition === 0 && !isTop) {
        setIsTop(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isTop])

  return (
    <header
      className={`z-50 w-full transition-all ease-in-out duration-1000 bg-black ${isTop ? 'block' : 'fixed'}`}
    >
      <div className="mx-auto max-w-[1200px] bg-transparent flex justify-between py-4 items-center px-4 text-gray-800 max-h-20">
        <p className={`text-4xl text-white ${fontLogo.className}`}>TechCraft</p>
        <nav className="flex">
          <button
            className="sm:hidden h-[25px] m-auto z-30 w-8 flex items-center flex-col gap-1 p-1 relative"
            onClick={() => setNavBar((e) => !e)}
          >
            <hr
              className={`bg-cyan-600 h-1 w-full rounded border-none transition-all transform absolute ${
                navbar ? 'rotate-[50deg] top-2' : 'top-0'
              }`}
            />
            <hr
              className={`h-1 w-full rounded border-none transition-all transform absolute ${
                navbar ? 'bg-transparent top-1' : 'bg-cyan-600 top-2'
              }`}
            />
            <hr
              className={`bg-cyan-600 h-1 w-full rounded border-none transition-all transform absolute  ${
                navbar ? 'rotate-[-50deg] top-2 ' : 'top-4'
              }`}
            />
          </button>
          <div
            className={`justify-centertransition-all z-50 transition-all w-full flex-col sm:w-auto sm:flex-row sm:visible sm:flex sm:gap-1 text-white font-[700] items-center flex duration-1000 overflow-hidden top-[56px] right-0 left-0 justify-start gap-9 fixed h-0 sm:h-auto sm:static ${
              navbar
                ? 'w-full t h-screen pt-12 bg-black'
                : 'invisible flex transition-all duration-1000'
            }`}
          >
            <Link
              href={`#inicio`}
              className="transition duration-500  hover:bg-cyan-600 rounded-md px-4 py-3  cursor-pointer"
              onClick={() => setNavBar(false)}
            >
              Inicio
            </Link>
            <Link
              href={`#about`}
              className=" hover:bg-cyan-600 rounded-md transition duration-500 px-4 py-3 cursor-pointer"
              onClick={() => setNavBar(false)}
            >
              Quem Somos
            </Link>
            <Link
              href={`#servicos`}
              className=" hover:bg-cyan-600 rounded-md transition duration-500 px-4 py-3 cursor-pointer "
              onClick={() => setNavBar(false)}
            >
              Serviços
            </Link>
            <Link
              href={`#comoficamos`}
              className=" hover:bg-cyan-600 rounded-md transition duration-500 px-4 py-3 cursor-pointer"
              onClick={() => setNavBar(false)}
            >
              Como nos Encontrar
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
