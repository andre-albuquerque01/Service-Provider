import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  title: string
  desc: string
  url: string
  link: string
}

export const CardProject = ({ ...props }: CardProps) => {
  return (
    <Link
      href={props.link}
      className="md:w-[30%] text-center border h-96 p-3 flex flex-col justify-evenly items-center rounded-xl transform duration-700 hover:scale-105 hover:shadow-xl"
    >
      <Image
        src={props.url}
        width={200}
        height={200}
        alt="Imagem do projeto"
        className="border rounded-md"
      />
      <div className="font-semibold">{props.title}</div>
      <div>{props.desc}</div>
    </Link>
  )
}
