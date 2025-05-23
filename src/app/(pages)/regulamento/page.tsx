import Link from "next/link";

export default function RegulamentoPage() {
    return (
        <div className="min-h-screen bg-gray-50 p-8 pb-20 sm:p-20 font-geist-sans">
            <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md border border-gray-300 ">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Regulamento do Evento</h1>

                <div className="prose">
                    <h2 className="text-xl font-semibold mt-4 text-gray-700">1. Organização</h2>
                    <p className="text-gray-600">O evento é organizado pela Acrd Chave, e será realizado no dia 5 de Julho, com partida às [hora] no [local].</p>

                    <h2 className="text-xl font-semibold mt-6 text-gray-700">2. Provas</h2>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Passeio de BTT guiado por GPS individual</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6 text-gray-700">3. Inscrições</h2>
                    <p className="text-gray-600">As inscrições podem ser realizadas até [data limite] através do [meio de inscrição].</p>
                    <p className="text-gray-600">Os participantes menores de 18 anos necessitam de autorização dos pais ou responsável legal, que deverá ser entregue no ato da inscrição. O documento de autorização estará disponível [link].</p>
                    <p className="text-gray-600">O ato da inscrição implica a aceitação plena deste regulamento.</p>

                    <h2 className="text-xl font-semibold mt-6 text-gray-700">4. Direitos de Imagem</h2>
                    <p className="text-gray-600">Ao inscrever-se, o participante autoriza automaticamente a organização a utilizar livremente imagens captadas durante o evento (fotografias, vídeos, etc.), para fins de divulgação e promoção, sem que disso resulte qualquer compensação financeira.</p>

                    <h2 className="text-xl font-semibold mt-6 text-gray-700">5. Participantes Menores de 18 Anos</h2>
                    <p className="text-gray-600">Os menores de 18 anos só poderão participar mediante a entrega de um termo de responsabilidade, assinado pelos pais ou responsável legal, no qual autorizam a participação no evento.</p>
                    <p className="text-gray-600">A autorização parental deverá incluir o consentimento para o uso de imagens do menor durante a participação no evento, nos termos indicados na cláusula 4.</p>

                    <h2 className="text-xl font-semibold mt-6 text-gray-700">6. Segurança e Equipamentos</h2>
                    <p className="text-gray-600">É obrigatório o uso de capacete para todos os participantes do passeio de BTT.</p>
                    <p className="text-gray-600">A organização não se responsabiliza por quaisquer acidentes ou incidentes que possam ocorrer durante o evento, sendo a responsabilidade individual de cada participante.</p>

                    <h2 className="text-xl font-semibold mt-6 text-gray-700">7. Responsabilidades</h2>
                    <p className="text-gray-600">Cada participante é responsável pela sua condição física e capacidade para completar o percurso escolhido.</p>
                    <p className="text-gray-600">A organização fornecerá apoio logístico, como pontos de abastecimento e assistência médica ao longo dos percursos.</p>

                    <h2 className="text-xl font-semibold mt-6 text-gray-700">8. Cancelamento ou Alterações</h2>
                    <p className="text-gray-600">A organização reserva-se o direito de alterar o percurso, horários ou cancelar o evento por razões de segurança ou imprevistos.</p>
                    <p className="text-gray-600">Em caso de cancelamento, os participantes serão notificados com antecedência e informados sobre as condições de reembolso, se aplicável.</p>

                    <h2 className="text-xl font-semibold mt-6 text-gray-700">9. Disposições Finais</h2>
                    <p className="text-gray-600">A participação no evento implica a aceitação de todos os termos deste regulamento.</p>
                    <p className="text-gray-600">Qualquer situação omissa será resolvida pela organização.</p>
                </div>

                <div className="mt-8">
                    <Link href="/" className="text-blue-600 hover:text-blue-800">
                        ← Voltar ao formulário de inscrição
                    </Link>
                </div>
            </div>
        </div>

    );
}