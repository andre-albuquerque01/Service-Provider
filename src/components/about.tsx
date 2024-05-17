export const About = () => {
  return (
    <>
      <div
        className={`h-screen text-justify space-y-3 p-4 font-sans flex flex-col justify-center max-w-[1200px]  mx-auto`}
      >
        <h1 className="uppercase text-cyan-500 font-bold text-2xl text-center">
          QUEM SOMOS
        </h1>
        <div className="gradient-div w-[90%] h-0.5 mx-auto shadow-lg"></div>
        <div>
          <p className="">
            Somos uma empresa dedicada ao desenvolvimento de sistemas,
            especializada em solucionar os desafios dos nossos clientes com
            eficiência e inovação. Nosso foco é entender profundamente as
            necessidades específicas de cada cliente e oferecer soluções
            personalizadas que não apenas atendam, mas superem suas
            expectativas.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Nossa Missão</h3>
          <p className="">
            Nossa missão é garantir a satisfação total dos nossos clientes,
            fornecendo produtos e serviços de alta qualidade. Trabalhamos
            incansavelmente para criar soluções tecnológicas que otimizem
            processos, aumentem a produtividade e impulsionem o sucesso dos
            nossos clientes. Acreditamos que cada problema é uma oportunidade de
            inovar e, por isso, estamos comprometidos em oferecer respostas
            rápidas e eficazes para as demandas mais complexas.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Nossos Valores</h3>
          <ul className="list-disc ml-10">
            <li className="space-x-1">
              <span className="font-bold">Excelência:</span>
              <span>
                Buscamos sempre a máxima qualidade em tudo o que fazemos,
                garantindo resultados excepcionais.
              </span>
            </li>
            <li className="space-x-1">
              <span className="font-bold">Inovação:</span>
              <span>
                Estamos constantemente explorando novas tecnologias e métodos
                para oferecer soluções criativas e eficientes.
              </span>
            </li>
            <li className="space-x-1">
              <span className="font-bold">Compromisso:</span>
              <span>
                Nosso compromisso é com a satisfação do cliente, colocando suas
                necessidades e objetivos no centro de nossas operações.
              </span>
            </li>
            <li className="space-x-1">
              <span className="font-bold"> Transparência:</span>
              <span>
                Mantemos uma comunicação aberta e honesta com nossos clientes,
                garantindo confiança mútua e parcerias duradouras.
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Nossa Abordagem</h3>
          <p className="">
            Cada projeto é tratado com dedicação e atenção aos detalhes. Desde a
            análise inicial até a implementação final, nossa equipe de
            especialistas trabalha em estreita colaboração com os clientes para
            garantir que todas as expectativas sejam atendidas e superadas.
            Utilizamos metodologias ágeis e as melhores práticas da indústria
            para entregar soluções robustas e escaláveis.
          </p>
        </div>
      </div>
      <div className="w-full h-0.5 bg-zinc-400"></div>
    </>
  )
}
