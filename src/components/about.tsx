import Image from 'next/image'
import { CardService } from './other/cardService'
import { HeadLine } from './other/headLine'

export const About = () => {
  return (
    <>
      <div
        className={`min-h-[99.7vh] text-justify space-y-3 p-4 font-sans flex flex-col justify-center mx-auto max-w-[1200px]`}
        id="about"
      >
        <h1 className="uppercase font-bold text-2xl text-center">QUEM SOMOS</h1>
        <div>
          <p className="text-center">
            Somos uma empresa dedicada ao desenvolvimento de sistemas,
            especializada em solucionar os desafios dos nossos clientes com
            eficiência e inovação. Nosso foco é entender profundamente as
            necessidades específicas de cada cliente e oferecer soluções
            personalizadas que não apenas atendam, mas superem suas
            expectativas.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Missão</h3>
          <div className="flex flex-col items-center gap-3">
            <Image src="/about/missao.png" width={50} height={50} alt="icone" />
            <p className="text-center">
              Nossa missão é garantir a satisfação total dos nossos clientes,
              fornecendo produtos e serviços de alta qualidade. Trabalhamos
              incansavelmente para criar soluções tecnológicas que otimizem
              processos, aumentem a produtividade e impulsionem o sucesso dos
              nossos clientes. Acreditamos que cada problema é uma oportunidade
              de inovar e, por isso, estamos comprometidos em oferecer respostas
              rápidas e eficazes para as demandas mais complexas.
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg">Valores</h3>
          <div className="p-4 grid grid-cols-2 gap-8 text-center max-sm:grid-cols-1">
            <CardService
              title="Excelência"
              desc=" Buscamos sempre a máxima qualidade em tudo o que fazemos,
              garantindo resultados excepcionais."
              url="/about/objeto.png"
            />
            <CardService
              title="Inovação"
              desc=" Estamos constantemente explorando novas tecnologias e métodos
              para oferecer soluções criativas e eficientes."
              url="/about/inovacao.png"
            />
            <CardService
              title="Compromisso"
              desc="Nosso compromisso é com a satisfação do cliente, colocando suas
              necessidades e objetivos no centro de nossas operações."
              url="/about/compromisso.png"
            />
            <CardService
              title="Transparência"
              desc="Nosso compromisso é com a satisfação do cliente, colocando suas
              necessidades e objetivos no centro de nossas operações."
              url="/about/transparencia.png"
            />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg">Abordagem</h3>
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/about/abordagem.png"
              width={50}
              height={50}
              alt="icone"
            />
            <p className="text-center">
              Cada projeto é tratado com dedicação e atenção aos detalhes. Desde
              a análise inicial até a implementação final, nossa equipe de
              especialistas trabalha em estreita colaboração com os clientes
              para garantir que todas as expectativas sejam atendidas e
              superadas. Utilizamos metodologias ágeis e as melhores práticas da
              indústria para entregar soluções robustas e escaláveis.
            </p>
          </div>
        </div>
      </div>
      <HeadLine />
    </>
  )
}
