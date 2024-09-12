import { CardProject } from './other/cardProject'

export const Projects = () => {
  return (
    <div
      className="w-full min-h-screen bg-black text-white"
      // style={{
      //   background: 'linear-gradient(to bottom, #00112b, #000000eb)',
      //   filter: 'brightness(150%)',
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   minHeight: '100%',
      // }}
      style={{
        backgroundImage:
          'linear-gradient(to bottom, #00000076, #000000eb), url(/project/background.png)',
        filter: 'brightness(150%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundAttachment: 'fixed', // Isso cria o efeito de parallax
        minHeight: '100%',
      }}
    >
      <div className="max-w-[1200px] mx-auto min-h-[99.7vh] flex flex-col justify-center gap-4 flex-wrap">
        <h2 className="uppercase font-extrabold text-2xl text-center max-md:mt-20">
          Projetos desenvolvidos
        </h2>
        <div className="flex items-center justify-center flex-wrap gap-3 max-md:p-3">
          <CardProject
            title="Portifolio pessoal"
            link="https://ae.dev.br/"
            desc="Portfólio de TI que destaca o profissional, fortalecendo sua visibilidade com uma marca própria na landing page."
            url={'/project/portfolio2.png'}
          />
          <CardProject
            title="Landing page imobiliária"
            link="https://imobiliariamartinsesilva.com.br/"
            desc="Landing page imobiliária que lista imóveis à venda, destacando ofertas e facilitando a busca para clientes."
            url={'/project/landingPage.png'}
          />
          <CardProject
            title="Portifolio pessoal"
            link="https://elias.dev.br/"
            desc="Portfólio para um profissional de TI que apresenta informações sobre ele, aumentando sua visibilidade com uma marca própria na sua landing page."
            url={'/project/portfolio.png'}
          />
        </div>
      </div>
    </div>
  )
}
