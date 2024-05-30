import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

export const Location = () => {
  return (
    <>
      <div
        className="max-w-[1200px] my-20 mx-auto flex flex-col justify-center gap-4 flex-wrap"
        id="contato"
      >
        <h2 className="uppercase text-cyan-500 font-bold text-2xl text-center max-md:mt-20">
          Como nós encontrar
        </h2>
        <div className="gradient-div w-[90%] h-0.5 mx-auto shadow-lg"></div>
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="md:w-[30%] text-center border h-20 p-3 flex flex-col justify-evenly items-center rounded-xl transform duration-700 hover:scale-105 hover:shadow-xl">
            <Link
              href="mailto:andregonsalves2011@gmail.com?subject=Dúvidas sobre o serviços"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 hover:text-cyan-600"
            >
              <MdOutlineEmail className="w-5 h-5" />
              <div className="font-semibold">Nosso e-mail</div>
            </Link>
          </div>
          <div className="md:w-[30%] text-center border h-20 p-3 flex flex-col justify-center items-center rounded-xl transform duration-700 hover:scale-105 hover:shadow-xl">
            <Link
              href="https://api.whatsapp.com/send?phone=5561985261944&text=Ol%C3%A1!%20Estou%20interessado%20em%20saber%20como%20funciona%20o%20servi%C3%A7o%20de%20desenvolvimento%20de%20sistemas!%20%F0%9F%90%BE%20Poderia%20me%20enviar%20mais%20informa%C3%A7%C3%B5es?"
              target="_blank"
              className="flex flex-col items-center justify-center gap-2 hover:text-cyan-600"
            >
              <FaWhatsapp className="w-5 h-5" />
              <div className="font-semibold">Nosso WhatsApp</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
