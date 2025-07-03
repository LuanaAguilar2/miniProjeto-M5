import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import LocationCard from "@/components/LocalCard";
import ReviewCard from "@/components/AvaliacaoCard";
import { fetchLocal, fetchlocalMaisAvaliado, fetchRecentAvaliacao } from "@/utils/api";
import { Local } from "@/interfaces/Local";
import { Avaliacao } from "@/interfaces/Avaliacao";

export default async function HomePage() {
  let locals: Local[] = [];
  let avaliacoes: Avaliacao[] = [];
  let localMelhorAvaliado: Local[] = [];
  let error: string | null = null;

  try {
    [locals, avaliacoes, localMelhorAvaliado] = await Promise.all([
      fetchLocal(),
      fetchRecentAvaliacao(),
      fetchlocalMaisAvaliado(),
    ]);
  } catch (err: any) {
    console.error("Erro ao buscar dados para a Landing Page:", err);
    error = err.message || "Erro desconhecido ao carregar os dados.";
  }

  const safeLocations = locals || [];
  const safeRecentReviews = avaliacoes || [];
  const safelocalMaisAvaliado = localMelhorAvaliado || [];

  return (
    <Layout>
      {error ? (
        <section className="py-20 text-center text-red-600 bg-red-50 rounded-lg mx-auto max-w-xl p-8 shadow-md mt-20">
          <h2 className="text-3xl font-bold mb-4">Ops! Algo deu errado.</h2>
          <p className="text-lg mb-4">Não foi possível carregar os dados da API.</p>
          <p className="text-md font-mono text-red-700">{error}</p>
          <p className="mt-6">
            Por favor, verifique se a URL da sua API está correta e se a API está funcionando.
          </p>
        </section>
      ) : (
        <>
          {/* Seção Hero */}
          <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-28 md:py-36 text-center shadow-inner">
            <div className="container mx-auto px-6">
              <h1 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight animate-fadeInUp">
                Locais Acessíveis para Todos
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 opacity-90 animate-fadeInUp delay-200">
                Encontre, avalie e compartilhe lugares com acessibilidade para uma comunidade mais inclusiva.
              </p>
              <a
                href="#locais"
                className="inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-full shadow-xl hover:bg-blue-100 hover:scale-105 transition-all duration-300 ease-in-out text-lg"
              >
                Comece a Explorar!
              </a>
            </div>
          </section>

          {/* Seção 1: Locais em Destaque */}
          <section id="locais" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <SectionTitle
                title="Locais em Destaque"
                subtitle="Conheça alguns dos espaços mais bem avaliados e com recursos de acessibilidade."
              />
              {safeLocations.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {safeLocations.map((local) => (
                    <LocationCard key={local.id} local={local} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-xl text-gray-600 mt-10">
                  Nenhum local disponível no momento. Volte em breve!
                </p>
              )}
            </div>
          </section>

          {/* Seção 2: Avaliações Recentes */}
          <section id="avaliacoes" className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <SectionTitle
                title="O Que as Pessoas Estão Dizendo"
                subtitle="Leia as avaliações mais recentes da nossa comunidade sobre acessibilidade."
              />
              {safeRecentReviews.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {safeRecentReviews.map((avaliacao, index) => (
                    <ReviewCard key={index} avaliacao={avaliacao} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-xl text-gray-600 mt-10">
                  Ainda não há avaliações recentes. Seja o primeiro a avaliar!
                </p>
              )}
            </div>
          </section>

          {/* Seção 3: Ranking de Locais */}
          <section id="ranking" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <SectionTitle
                title="Top Locais Acessíveis"
                subtitle="Confira os locais mais bem avaliados pela comunidade."
              />
              {safelocalMaisAvaliado.length > 0 ? (
                <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">
                    Nossos Destaques por Nota
                  </h3>
                  {safelocalMaisAvaliado.map((local, index) => (
                    <div
                      key={local.id}
                      className="flex items-center justify-between border-b border-gray-200 py-3 last:border-b-0"
                    >
                      <span className="text-lg font-semibold text-gray-800">
                        {index + 1}. {local.nome}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-xl text-gray-600 mt-10">
                  Nenhum local no ranking ainda. Avalie e ajude a construir nosso ranking!
                </p>
              )}
            </div>
          </section>
        </>
      )}
    </Layout>
  );
}