import { CardProject } from './other/cardProject'
import { HeadLine } from './other/headLine'

export const Projects = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto min-h-[99.7vh] flex flex-col justify-center gap-4 flex-wrap">
        <h2 className="uppercase font-bold text-2xl text-center max-md:mt-20">
          Projetos desenvolvidos
        </h2>
        <div className="flex items-center justify-center flex-wrap gap-3 max-md:p-3">
          <CardProject
            title="Sistema de cardápio digital"
            desc="O Cardápio Online é uma plataforma que permite aos clientes acompanhar facilmente os pedidos realizados através do garçom, verificar os itens selecionados, o valor total da conta e facilita o cadastro através de um identificador exclusivo para localizar os pedidos."
            url={'/project/menu.png'}
          />
          <CardProject
            title="Rede social"
            desc="Rede social estilo fórum, projetada para promover a interação sobre os tópicos no feed, permitindo que os usuários se comuniquem entre si."
            url={'/project/login.jpg'}
          />
          <CardProject
            title="Portifolio pessoal"
            desc="Portfólio para um profissional de TI que apresenta informações sobre ele, aumentando sua visibilidade com uma marca própria na sua landing page."
            url={'/differences/acordo.png'}
          />
        </div>
      </div>
      <HeadLine />
    </>
  )
}
