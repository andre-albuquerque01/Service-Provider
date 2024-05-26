import { Card } from './other/card'
import { HeadLine } from './other/headLine'

export const Differences = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto min-h-[99.7vh] flex flex-col justify-center gap-4 flex-wrap">
        <h2 className="uppercase text-cyan-500 font-bold text-2xl text-center max-md:mt-20">
          Diferenciais
        </h2>
        <div className="gradient-div w-[90%] h-0.5 mx-auto shadow-lg"></div>
        <div className="flex items-center justify-center flex-wrap gap-3 max-md:p-3">
          <Card
            title="Soluções Personalizadas"
            desc="Entendemos profundamente as necessidades específicas de cada cliente, oferecendo soluções personalizadas que superam expectativas."
            url={'/differences/personalizado.png'}
          />
          <Card
            title="Inovação Constante"
            desc="Exploramos continuamente novas tecnologias para fornecer soluções criativas e eficientes, mantendo nossos clientes na vanguarda do mercado."
            url={'/differences/inovacao.png'}
          />
          <Card
            title="Compromisso com a Excelência"
            desc="Aplicamos as melhores práticas da indústria e metodologias ágeis para garantir resultados excepcionais e soluções robustas."
            url={'/differences/acordo.png'}
          />
        </div>
      </div>
      <HeadLine />
    </>
  )
}
