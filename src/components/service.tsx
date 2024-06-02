import { CardService } from './other/cardService'
import { HeadLine } from './other/headLine'

export const Service = () => {
  return (
    <>
      <div
        className="max-w-[1200px] mx-auto min-h-[99.7vh] flex flex-col justify-center items-center gap-4 flex-wrap my-20"
        id="service"
      >
        <h2 className="uppercase font-bold text-2xl text-center max-md:mt-20">
          O que fazemos
        </h2>
        <div className="p-4 grid grid-cols-2 gap-8 text-center max-sm:grid-cols-1">
          <CardService
            title="Desenvolvimento de Software"
            desc="Criamos
            soluções personalizadas para atender às necessidades específicas do
            seu negócio."
            url="/service/codigo.png"
          />
          <CardService
            title="Hospedagem"
            desc="Oferecemos serviços de
            hospedagem confiáveis para garantir que seus sistemas estejam sempre
            acessíveis."
            url="/service/hospedagem.png"
          />
          <CardService
            title="Sistemas Completos"
            desc="Desenvolvemos
            sistemas integrados e robustos que cobrem todas as funcionalidades
            necessárias."
            url="/service/system.png"
          />
          <CardService
            title="Layout Intuitivo"
            desc="Priorizamos a criação
            de interfaces fáceis de usar, proporcionando uma excelente
            experiência para o usuário."
            url="/service/wireframe.png"
          />
          <CardService
            title="Consultoria Técnica"
            desc="Fornecemos
            orientação especializada para ajudar a definir a melhor abordagem
            tecnológica para seus projetos."
            url="/service/consultor.png"
          />
          <CardService
            title="Manutenção e Suporte"
            desc="Oferecemos
            serviços contínuos de manutenção e suporte para garantir que seus
            sistemas funcionem sem problemas."
            url="/service/suporte.png"
          />
          <CardService
            title="Integração de Sistemas"
            desc="Facilitamos a
            integração de novos sistemas com suas soluções existentes,
            garantindo uma operação harmoniosa."
            url="/service/integracao.png"
          />
          <CardService
            title="Segurança"
            desc="Implementamos as melhores
            práticas de segurança para proteger seus dados e garantir a
            integridade dos sistemas."
            url="/service/ciber-seguranca.png"
          />
          <CardService
            title="Escalabilidade"
            desc="Desenvolvemos soluções
            que crescem junto com o seu negócio, permitindo fácil expansão e
            adaptação a novas demandas."
            url="/service/escalabilidade.png"
          />
          <CardService
            title="Metodologias Ágeis"
            desc="Utilizamos
            metodologias ágeis para garantir entregas rápidas e eficientes, com
            foco na qualidade e satisfação do cliente."
            url="/service/iteracao.png"
          />
          <CardService
            title="Inovação Contínua"
            desc="Estamos sempre
            atualizados com as últimas tecnologias e tendências do mercado para
            oferecer soluções inovadoras."
            url="/service/inovacao.png"
          />
        </div>
      </div>
      <HeadLine />
    </>
  )
}
