import Link from "next/link";

export default function PoliticaPrivacidadePage() {
    return (
        <div className="min-h-screen bg-gray-50 p-8 pb-20 sm:p-20 font-geist-sans">
            <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md border border-gray-300 ">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Política de Privacidade</h1>

                <div className="prose">
                    <h2 className="text-xl font-semibold mt-4 text-gray-700">Introdução</h2>
                    <p className="text-gray-600">A atual Política de Privacidade encontra-se já adaptada à nova regulamentação europeia sobre a Proteção de Dados, que substitui a lei de proteção de dados em vigor. O Regulamento Geral de Proteção de Dados (RGPD), com entrada em vigor a 25 de Maio de 2018, vem consolidar algumas das boas práticas que a ACRD Chave já vinha implementando e que agora se materializam numa maior transparência com todos os nossos utilizadores.</p>
                    <p className="text-gray-600">
  O Regulamento Geral de Proteção de Dados – Regulamento (UE) 2016/679 de 27 de abril, considera que são dados pessoais a &quot;informação relativa a uma pessoa singular identificada ou identificável. É considerada identificável uma pessoa singular que possa ser identificada, direta ou indiretamente, em especial por referência a um identificador, como por exemplo um nome, um número de identificação, dados de localização, identificadores por via eletrónica ou a um ou mais elementos específicos da identidade física, fisiológica, genética, mental, económica, cultural ou social dessa pessoa singular&quot;.
</p>

                    <p className="text-gray-600">Esta política de privacidade será aplicada por todos os funcionários e colaboradores da ACRD Chave, assim como aos organizadores dos eventos e fornecedores subcontratados. Qualquer incumprimento ao RGPD será tratado de acordo com os procedimentos disciplinares internos e com os acordos estabelecidos entre partes. Caso essa atuação revele contornos de ilícito criminal, serão tomadas as medidas necessárias, como sejam o encaminhamento dos processos para as autoridades competentes. Os parceiros, fornecedores e quaisquer entidades terceiras que nalgum momento tenham acesso a dados pessoais, deverão ter tomado conhecimento desta política e respeitá-la integralmente.</p>
                    <p className="text-gray-600">Por ser tão importante para nós, recomendamos que leia com atenção as condições constantes do presente documento, no qual informamos sobre a forma como procedemos ao tratamento de dados pessoais, as suas finalidades, os meios e condições da comunicação dos mesmos, mas também, os seus direitos enquanto titular dos dados.</p>

                    <h2 className="text-xl font-semibold mt-6 text-gray-700">Política de Privacidade da ACRD Chave</h2>
                    <p className="text-gray-600">Esta Política de Privacidade aplica-se ao website da ACRD Chave e a todos os serviços prestados aos clientes finais. Incluem-se nesta política a linha de suporte e todos os meios necessários para a cronometragem de eventos. Não é esta política de privacidade aplicada a websites e serviços da ACRD Chave que não apresentam ou não contenham hiperligações para este documento ou que possuam declarações de privacidade próprias.</p>
                    <p className="text-gray-600">A ACRD Chave defende a total transparência nas suas plataformas e serviços desde que se constituiu como empresa, submetendo as suas bases de dados pessoais à autorização da Comissão Nacional de Proteção de Dados e aplicando as melhores práticas de segurança nas áreas das TI.</p>

                    <h2 className="text-xl font-semibold mt-6 text-gray-700">Informação Recolhida</h2>
                    <p className="text-gray-600">A ACRD Chave recolhe diversos tipos de informação para operar com eficiência e fornecer-lhe os melhores produtos, serviços e boas experiências na utilização dos mesmos. A maioria destes dados são-nos fornecidos diretamente pelos utilizadores. Outros poderão ser disponibilizados por outras fontes, nomeadamente pelos organizadores de eventos, para que possamos prestar os serviços de cronometragem e apresentar resultados finais (principalmente aplicável quando os dados de inscrição são recolhidos por outras plataformas alheias à ACRD Chave).</p>
                    <p className="text-gray-600">Independentemente da fonte, julgamos importante tratar essa informação com cuidado e ajudá-lo a manter a sua privacidade.</p>
                    <p className="text-gray-600">O que recolhemos por defeito nos formulários de inscrição da ACRD Chave e que constituem dados fundamentais para a prestação dos serviços:</p>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Nome;</li>
                        <li>Data de Nascimento;</li>
                        <li>Endereço de e-mail;</li>
                        <li>Género;</li>
                        <li>Nacionalidade;</li>
                        <li>BI/CC/Passaporte;</li>
                        <li>Contacto telefónico pessoal;</li>
                        <li>Número de Identificação Fiscal;</li>
                        <li>Contacto telefónico em caso de SOS (quando aplicável);</li>
                        <li>Localidade/Morada (quando aplicável);</li>
                        <li>Nome da equipa (quando aplicável);</li>
                        <li>Grupo sanguíneo (quando aplicável).</li>
                    </ul>
                    <p className="text-gray-600">Os dados pessoais recolhidos não serão partilhados, enviados, alugados ou vendidos a terceiros, nem serão cedidos para a promoção de marcas, produtos ou serviços de outras empresas.</p>
                    <p className="text-gray-600">Utilizamos habitualmente o e-mail de cada contacto para o envio de newsletters que servem o propósito da divulgação dos eventos da agenda ACRD Chave, aplicando-se envios controlados, quer para toda a base de dados, quer para segmentos da base de dados estabelecidos por critérios que otimizam o número de e-mails que enviamos para cada contacto.</p>
                    <p className="text-gray-600">Todos os dados relativos à recolha por equipamentos de cronometragem (por chip ou por recetor GNSS) não poderão ser considerados dados pessoais, na medida que os mesmos não possuem qualquer referência aos dados pessoais dos participantes.</p>
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