import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

export const Contact = () => {
  return (
    <div className="text-white" id="contato">
      <div className="flex justify-around items-center max-w-[1200px] mx-auto max-md:flex-col max-md:items-start max-md:px-3 max-md:gap-3 mb-5">
        <div className="flex max-h-32">
          <Image
            src={'/logo/logo.png'}
            width={500}
            height={500}
            alt="Logo"
            className="h-auto w-auto"
          />
        </div>
        <div className="flex flex-col items-start space-y-2 w-[200px]">
          <h1 className="text-xl font-bold">Contato</h1>
          <Link
            href="mailto:andregonsalves2011@gmail.com?subject=Dúvidas sobre o serviços"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <MdOutlineEmail className="w-6 h-6" /> E-mail
          </Link>
          <Link
            href="https://www.instagram.com/tech_craft1/"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaInstagram className="w-6 h-6" /> Instagram
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=5561985261944&text=Ol%C3%A1!%20Estou%20interessado%20em%20saber%20como%20funciona%20o%20servi%C3%A7o%20de%20desenvolvimento%20de%20sistemas!%20%F0%9F%90%BE%20Poderia%20me%20enviar%20mais%20informa%C3%A7%C3%B5es?"
            target="_blank"
            className="flex items-center gap-2"
          >
            <FaWhatsapp className="w-6 h-6" />
            +55 61 98526-1944
          </Link>
        </div>
      </div>
    </div>
  )
}
