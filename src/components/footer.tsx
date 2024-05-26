export const Footer = () => {
  const handleDate = () => {
    const date = new Date()
    const year = date.getFullYear()
    return year
  }

  return (
    <div className="bg-black w-full h-10 text-md text-white flex justify-center items-center">
      <div>&copy;TechCraft - Todos os direitos reservados - {handleDate()}</div>
    </div>
  )
}
