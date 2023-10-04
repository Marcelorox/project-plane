import imagemEquipe from "../../assets/equipe.jpg";
import colaborador1 from "../../assets/imagem1.jpg";
import colaborador2 from "../../assets/imagem2.jpg";
import colaborador3 from "../../assets/imagem3.jpg";
import FooterPages from "../../components/Footer/FooterPages";
import { Header } from "../../components/Header";

function AboutPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100">
        <section className="py-16 text-white bg-black">
          <div className="container mx-auto text-center">
            <h1 className="mb-4 mt-[72px] text-5xl font-bold">About Us</h1>
            <h2 className="font-light mt-4 text-xl">Learn more about Eleve, the most esteemed luxury flight company in South America</h2>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <img
                  src={imagemEquipe}
                  alt="Aeronave de luxo"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="mb-4 text-3xl font-bold">Nossa História</h2>
                <p className="text-lg text-black">
                  Fundada em 20XX, somos uma empresa apaixonada por tecnologia e
                  aviação. Desde o início, nosso compromisso tem sido fornecer aos
                  nossos clientes as soluções mais avançadas e eficazes para suas
                  necessidades aeronáuticas. Acreditamos que a tecnologia é o
                  motor do progresso e da inovação.
                </p>
                <p className="mt-4 text-lg text-black">
                  Nossa missão é proporcionar uma experiência única nos céus,
                  combinando luxo e conforto em cada detalhe das aeronaves que
                  oferecemos. Desde os interiores elegantemente projetados até as
                  mais recentes inovações em tecnologia de aviação, cada aeronave
                  em nosso catálogo é selecionada com um critério rigoroso,
                  garantindo que você desfrute não apenas do voo, mas de um estilo
                  de vida elevado.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white text-black">
          <div className="container mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-center">Nossa Equipe</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="text-center">
                <img
                  src={colaborador1}
                  alt="Membro da Equipe 1"
                  className="w-32 h-32 mx-auto mb-4 rounded-full"
                />
                <p className="font-semibold">Gustavo</p>
                <p className="text-gray-600">Senior</p>
              </div>
              <div className="text-center">
                <img
                  src={colaborador2}
                  alt="Membro da Equipe 2"
                  className="w-32 h-32 mx-auto mb-4 rounded-full"
                />
                <p className="font-semibold">Marcelo</p>
                <p className="text-gray-600">CO-Fundador</p>
              </div>
              <div className="text-center">
                <img
                  src={colaborador3}
                  alt="Membro da Equipe 2"
                  className="w-32 h-32 mx-auto mb-4 rounded-full"
                />
                <p className="font-semibold">Miguel</p>
                <p className="text-gray-600">CEO</p>
              </div>
            </div>
          </div>
        </section>
        <div className="">
          <FooterPages />
        </div>
      </div>
    </>
  );
}

export default AboutPage;
