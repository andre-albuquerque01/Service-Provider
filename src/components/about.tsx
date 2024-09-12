import Image from 'next/image'
import { CardService } from './other/cardService'

export const About = () => {
  return (
    <div className="min-h-screen p-8 mx-auto max-w-6xl flex flex-col justify-center items-center space-y-8">
      <h1 className="uppercase font-extrabold text-3xl text-center">
        Quem Somos
      </h1>

      <div className="text-center max-w-4xl space-y-4">
        <p>
          Somos uma empresa de desenvolvimento de software comprometida em
          transformar desafios em oportunidades através de soluções inovadoras e
          eficientes. Nossa abordagem personalizada começa com uma compreensão
          profunda das necessidades únicas de cada cliente, permitindo-nos criar
          sistemas sob medida que não apenas atendem, mas superam expectativas,
          impulsionando seus negócios para o próximo nível.
        </p>
      </div>

      <section className="w-full space-y-8">
        <h3 className="font-bold text-2xl text-center">Missão</h3>
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/about/missao.png"
            width={70}
            height={70}
            alt="ícone da missão"
          />
          <p className="max-w-4xl text-center">
            Nossa missão é garantir a satisfação total dos nossos clientes,
            fornecendo produtos e serviços de alta qualidade. Trabalhamos
            incansavelmente para criar soluções tecnológicas que otimizem
            processos, aumentem a produtividade e impulsionem o sucesso dos
            nossos clientes. Acreditamos que cada problema é uma oportunidade de
            inovar e, por isso, estamos comprometidos em oferecer respostas
            rápidas e eficazes para as demandas mais complexas.
          </p>
        </div>
      </section>

      <section className="w-full space-y-8">
        <h3 className="font-bold text-2xl text-center">Valores</h3>
        <div className="grid grid-cols-2 gap-6 text-center max-sm:grid-cols-1">
          <CardService
            title="Excelência"
            desc="Buscamos sempre a máxima qualidade em tudo o que fazemos, garantindo resultados excepcionais."
            url="/about/objeto.png"
          />
          <CardService
            title="Inovação"
            desc="Estamos constantemente explorando novas tecnologias e métodos para oferecer soluções criativas e eficientes."
            url="/about/inovacao.png"
          />
          <CardService
            title="Compromisso"
            desc="Nos dedicamos a atender nossos clientes com seriedade, colocando suas necessidades e objetivos no centro de todas as nossas ações."
            url="/about/compromisso.png"
          />
          <CardService
            title="Transparência"
            desc="Mantemos uma comunicação clara e aberta em todas as etapas do projeto, garantindo confiança e alinhamento com nossos clientes."
            url="/about/transparencia.png"
          />
        </div>
      </section>

      <section className="w-full space-y-8">
        <h3 className="font-bold text-2xl text-center">Abordagem</h3>
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/about/abordagem.png"
            width={70}
            height={70}
            alt="ícone da abordagem"
          />
          <p className="max-w-4xl text-center">
            Cada projeto é tratado com dedicação e atenção aos detalhes. Desde a
            análise inicial até a implementação final, nossa equipe de
            especialistas trabalha em estreita colaboração com os clientes para
            garantir que todas as expectativas sejam atendidas e superadas.
            Utilizamos metodologias ágeis e as melhores práticas da indústria
            para entregar soluções robustas e escaláveis.
          </p>
        </div>
      </section>
    </div>
  )
}
