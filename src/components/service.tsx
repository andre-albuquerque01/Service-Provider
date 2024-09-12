import { Card } from './other/card'

export const Service = () => {
  return (
    <div
      className="w-full min-h-screen bg-black text-white"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #ADD8E6, #2d3385)',
        // filter: 'brightness(150%)',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundAttachment: 'fixed', // Isso cria o efeito de parallax
        minHeight: '100%',
      }}
    >
      <div
        className="max-w-[1200px] mx-auto min-h-[99.7vh] flex flex-col justify-center items-center gap-4 flex-wrap my-40"
        id="service"
      >
        <h2 className="font-extrabold text-3xl text-center mt-20">Serviços</h2>
        <div className="p-4 flex flex-wrap items-center justify-center gap-3">
          <Card
            title="Desenvolvimento de Software"
            desc="Criamos
            soluções personalizadas para atender às necessidades específicas do
            seu negócio."
            url="/service/codigo.png"
          />
          <Card
            title="Hospedagem"
            desc="Oferecemos serviços de
            hospedagem confiáveis para garantir que seus sistemas estejam sempre
            acessíveis."
            url="/service/hospedagem.png"
          />
          <Card
            title="Sistemas Completos"
            desc="Desenvolvemos
            sistemas integrados e robustos que cobrem todas as funcionalidades
            necessárias."
            url="/service/system.png"
          />
          <Card
            title="Layout Intuitivo"
            desc="Priorizamos a criação
            de interfaces fáceis de usar, proporcionando uma excelente
            experiência para o usuário."
            url="/service/wireframe.png"
          />
          {/* <Card
            title="Consultoria Técnica"
            desc="Fornecemos
            orientação especializada para ajudar a definir a melhor abordagem
            tecnológica para seus projetos."
            url="/service/consultor.png"
          /> */}
          <Card
            title="Manutenção e Suporte"
            desc="Oferecemos
            serviços contínuos de manutenção e suporte para garantir que seus
            sistemas funcionem sem problemas."
            url="/service/suporte.png"
          />
          {/* <Card
            title="Integração de Sistemas"
            desc="Facilitamos a
            integração de novos sistemas com suas soluções existentes,
            garantindo uma operação harmoniosa."
            url="/service/integracao.png"
          /> */}
          <Card
            title="Segurança"
            desc="Implementamos as melhores
            práticas de segurança para proteger seus dados e garantir a
            integridade dos sistemas."
            url="/service/ciber-seguranca.png"
          />
          <Card
            title="Escalabilidade"
            desc="Desenvolvemos soluções
            que crescem junto com o seu negócio, permitindo fácil expansão e
            adaptação a novas demandas."
            url="/service/escalabilidade.png"
          />
          <Card
            title="Metodologias Ágeis"
            desc="Utilizamos
            metodologias ágeis para garantir entregas rápidas e eficientes, com
            foco na qualidade e satisfação do cliente."
            url="/service/iteracao.png"
          />
          <Card
            title="Inovação Contínua"
            desc="Estamos sempre
            atualizados com as últimas tecnologias e tendências do mercado para
            oferecer soluções inovadoras."
            url="/service/inovacao.png"
          />
        </div>
      </div>
    </div>
  )
}
