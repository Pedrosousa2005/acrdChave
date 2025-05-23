"use client";
import { useState } from "react";
import Link from "next/link";
import { enviarInscricao } from "@/lib/enviarInscricao";
import { Metadata } from "next";

type FormData = {
  nome: string;
  email: string;
  telefone: string;
  dataNascimento: string;
  genero: string;
  identificacao: string;
  tipoPercurso: string;
  observacoes: string;
  aceitaRegulamento: boolean;
  aceitaPolitica: boolean;
  jaPagou: number;
};


export const metadata: Metadata = {
  title: "Inscrição | Acrd Chave",
};


export default function Home() {

  const [formData, setFormData] = useState<FormData>({
      nome: "",
      email: "",
      telefone: "",
      dataNascimento: "",
      genero: "",
      identificacao: "",
      tipoPercurso: "45 KM",
      observacoes: "",
      aceitaRegulamento: false,
      aceitaPolitica: false,
      jaPagou: 0,
    });
  
    const [formErrors, setFormErrors] = useState({
      aceitaRegulamento: false,
      aceitaPolitica: false,
    });
  
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const { name, value, type } = e.target as HTMLInputElement;
      const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
  
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
  
      // Limpa erros quando o usuário interage
      if (name === 'aceitaRegulamento' || name === 'aceitaPolitica') {
        setFormErrors(prev => ({
          ...prev,
          [name]: false,
        }));
      }
    };
  
    const validateForm = () => {
      const errors = {
        aceitaRegulamento: !formData.aceitaRegulamento,
        aceitaPolitica: !formData.aceitaPolitica,
      };
  
      setFormErrors(errors);
      return !errors.aceitaRegulamento && !errors.aceitaPolitica;
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!validateForm()) {
    return; 
  }
  
    try {
      const id = await enviarInscricao(formData);
      console.log("Inscrição salva com ID:", id);
      alert("Inscrição enviada com sucesso!Verifique o seu email para efetuar o pagamento");
      // Reset do formulário...
    } catch (error) {
      console.error("Erro:", error);
      alert("Ocorreu um erro. Tente novamente.");
    }
  
         await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      
    };



  return (
    <div className="min-h-screen bg-gray-50 p-8 pb-20 sm:p-20 font-geist-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <main className="w-full max-w-2xl space-y-8">
          <h1 className="text-4xl font-bold text-center sm:text-left text-gray-900">
            Inscrição para o Passeio de Bicicleta
          </h1>
          <form
      onSubmit={handleSubmit}
      className="w-full bg-white p-8 rounded-xl shadow-md border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {/* Seção de Informações Pessoais */}
      <div className="md:col-span-2">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
          Informações Pessoais
        </h2>
      </div>

      <FormField label="Nome*">
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
          className="form-input text-gray-700"
        />
      </FormField>

      <FormField label="Email*">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input text-gray-700"
        />
      </FormField>

      <FormField label="Telefone*">
        <input
          type="tel"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
          className="form-input text-gray-700"
        />
      </FormField>

      <FormField label="Data de Nascimento*">
        <input
          type="date"
          name="dataNascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
          required
          className="form-input text-gray-700"
        />
      </FormField>

      <FormField label="Género*">
        <select
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          required
          className="form-input text-gray-700"
        >
          <option value="">Selecione...</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro / Prefiro não dizer</option>
        </select>
      </FormField>

      <FormField label="Identificação (BI/CC/Passaporte)*">
        <input
          type="text"
          name="identificacao"
          value={formData.identificacao}
          onChange={handleChange}
          required
          className="form-input text-gray-700"
        />
      </FormField>

      {/* Seção de Informações do Passeio */}
      <div className="md:col-span-2 mt-4">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
          Informações do Passeio
        </h2>
      </div>

      <FormField label="Que percuros esta preparado para fazer ?">
        <select
          name="tipoPercurso"
          value={formData.tipoPercurso}
          onChange={handleChange}
          className="form-input text-gray-700"
          required
        >
          <option value="45 KM">45 KM</option>
          <option value="65 KM">65 KM</option>
        </select>
      </FormField>



      <div className="md:col-span-2">
        <FormField label="Observações">
          <textarea
            name="observacoes"
            value={formData.observacoes}
            onChange={handleChange}
            rows={4}
            className="form-input text-gray-700"
          />
        </FormField>
      </div>

      <div className="md:col-span-2">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
          Termos e Condições
        </h2>
      </div>

      <div className="md:col-span-2">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="aceitaRegulamento"
              name="aceitaRegulamento"
              type="checkbox"
              checked={formData.aceitaRegulamento}
              onChange={handleChange}
              className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="aceitaRegulamento" className="font-semibold text-gray-500">
              Li e aceito o{' '}
              <Link href="/regulamento" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                Regulamento do Evento
              </Link>
            </label>
            {formErrors.aceitaRegulamento && (
              <p className="mt-1 text-red-600 dark:text-red-400">É obrigatório aceitar o regulamento</p>
            )}
          </div>
        </div>
      </div>

      <div className="md:col-span-2">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="aceitaPolitica"
              name="aceitaPolitica"
              type="checkbox"
              checked={formData.aceitaPolitica}
              onChange={handleChange}
              className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="aceitaPolitica" className="font-semibold text-gray-500">
              Li e aceito as{' '}
              <Link href="/politica-privacidade" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                Políticas de Privacidade
              </Link>
            </label>
            {formErrors.aceitaPolitica && (
              <p className="mt-1 text-red-600 dark:text-red-400">É obrigatório aceitar a política de privacidade</p>
            )}
          </div>
        </div>
      </div>

      <div className="md:col-span-2 mt-4">
        <button
          type="submit"
          disabled={!formData.aceitaRegulamento || !formData.aceitaPolitica}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg ${(!formData.aceitaRegulamento || !formData.aceitaPolitica) ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          Enviar Inscrição
        </button>
      </div>
    </form>
        </main>
      </div>
    </div>
  );
}

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="font-medium text-sm text-gray-700">{label}</label>
      {children}
    </div>
  );
}
