import { Contact } from './contact'

export const Footer = () => {
  const handleDate = () => {
    const date = new Date()
    const year = date.getFullYear()
    return year
  }

  return (
    <div className="bg-black pt-4" id="contato">
      <Contact />
      <div className="w-full text-md text-white flex flex-col justify-center items-center max-md:text-sm">
        <div>
          &copy; {handleDate()} TechCraft - Todos os direitos reservados
        </div>
      </div>
    </div>
  )
}
