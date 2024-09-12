import Image from 'next/image'

interface CardProps {
  title: string
  desc: string
  url: string
}

export const CardService = ({ title, desc, url }: CardProps) => {
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <Image src={url} width={60} height={60} alt={`ícone ${title}`} />
      <h4 className="font-semibold text-xl mt-2 mb-1">{title}</h4>
      <p className="text-sm">{desc}</p>
    </div>
  )
}
