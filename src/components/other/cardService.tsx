import Image from 'next/image'

interface CardProps {
  title: string
  desc: string
  url: string
}

export const CardService = ({ ...props }: CardProps) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={props.url} width={50} height={50} alt="icone" />
      <h3 className="font-bold">{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  )
}
