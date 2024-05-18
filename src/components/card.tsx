import Image from 'next/image'

interface CardProps {
  title: string
  desc: string
  url: string
}

export const Card = ({ ...props }: CardProps) => {
  return (
    <div className="md:w-[30%] text-center border h-72 p-3 flex flex-col justify-evenly items-center rounded-xl transform duration-700 hover:scale-105 hover:shadow-xl">
      <Image src={props.url} width={50} height={50} alt="icone" />
      <div className="font-semibold">{props.title}</div>
      <div>{props.desc}</div>
    </div>
  )
}
