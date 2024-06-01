import Image from 'next/image'

export const Introdution = () => {
  return (
    <div className="min-h-screen bg-black text-white relative grid grid-cols-2 items-center max-md:grid-cols-1">
      <Image
        src="/introdution/code.jpg"
        width={1000}
        height={1000}
        alt="capa"
        className="w-full max-h-screen object-cover z-0"
      />
      <div className="text-white text-center space-y-3 max-md:p-4 max-md:mt-[-80px]">
        <h1 className="text-4xl">Seja bem-vindo a TechCraft</h1>
        <div className="h-0.5 w-20 bg-white mx-auto"></div>
        <h2>Transformando Ideias em Software de Alta Performance</h2>
        <h3>
          Desenvolvimento de Software Sob Medida para Impulsionar Seu Negócio
        </h3>
      </div>
    </div>
  )
}
