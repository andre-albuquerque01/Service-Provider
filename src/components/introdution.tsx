export const Introdution = () => {
  return (
    <div
      className="min-h-screen bg-black text-white flex items-center justify-center"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, #00000076, #000000eb), url(/introdution/code.jpg)',
        filter: 'brightness(150%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div className="text-white text-center space-y-3 max-md:px-4">
        <h1 className="text-4xl sm:text-5xl font-[500]">
          Transformando ideias em soluções de alta performance
        </h1>
        <div className="h-0.5 w-40 bg-cyan-600 mx-auto"></div>
        <h2 className="text-xl">
          Desenvolvimento de software sob medida para impulsionar o crescimento
          e a inovação do seu negócio.
        </h2>
        {/* <h3 className="text-xl">
          Desenvolvimento de Software Sob Medida para Impulsionar Seu Negócio
        </h3> */}
      </div>
    </div>
  )
}
