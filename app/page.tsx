"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Clock3,
  FileText,
  MapPin,
  MessageCircle,
  Radio,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "O cidadão relata",
    description:
      "Uma mensagem pelo WhatsApp ou formulário web basta para registrar uma necessidade na cidade.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "A IA faz a triagem",
    description:
      "A inteligência artificial identifica o tema, resume o relato e o encaminha à equipa responsável.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "A gestão resolve",
    description:
      "Com prioridades claras e informação organizada, a Prefeitura acompanha cada solicitação até à solução.",
  },
];

const benefits = [
  {
    icon: Clock3,
    eyebrow: "Para os munícipes",
    title: "A cidade escuta, a qualquer hora.",
    description:
      "Registe uma demanda em poucos passos, sem filas e sem precisar saber qual setor procurar.",
    bullets: ["Atendimento 24/7", "WhatsApp ou web", "Acompanhamento transparente"],
  },
  {
    icon: BarChart3,
    eyebrow: "Para a equipa da Prefeitura",
    title: "Decisões públicas com contexto.",
    description:
      "Transforme relatos em dados organizados para entender prioridades e agir onde mais importa.",
    bullets: ["Triagem com inteligência artificial", "Mapa de calor por região", "Visão unificada das demandas"],
  },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Conexão Municipal — início">
      <span className="flex size-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
        <Radio className="size-5" aria-hidden="true" />
      </span>
      <span className={`text-base font-bold tracking-tight ${light ? "text-white" : "text-slate-900"}`}>
        Conexão Municipal
      </span>
    </Link>
  );
}

function ProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-2xl pb-12 pr-9 pt-4 sm:pb-16 sm:pr-16">
      <div className="overflow-hidden rounded-3xl border border-slate-200/60 bg-white/70 shadow-[0_32px_100px_-28px_rgba(15,23,42,0.24),0_12px_35px_-18px_rgba(37,99,235,0.24)] backdrop-blur-md">
        <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4">
          <span className="size-2.5 rounded-full bg-rose-300" />
          <span className="size-2.5 rounded-full bg-amber-300" />
          <span className="size-2.5 rounded-full bg-emerald-300" />
          <span className="ml-3 text-xs font-medium text-slate-400">Painel de demandas</span>
        </div>
        <div className="grid gap-5 p-5 sm:grid-cols-[1fr_1.1fr] sm:p-7">
          <div>
            <p className="text-sm font-semibold text-slate-800">Visão da cidade</p>
            <p className="mt-1 text-xs text-slate-400">Resumo das solicitações recentes</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-blue-100/70 bg-blue-50/80 p-4">
                <p className="text-xs text-blue-700">Recebidas hoje</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">128</p>
                <p className="mt-1 text-xs text-emerald-600">+12% esta semana</p>
              </div>
              <div className="rounded-2xl border border-emerald-100/70 bg-emerald-50/80 p-4">
                <p className="text-xs text-emerald-700">Resolvidas</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">86</p>
                <p className="mt-1 text-xs text-slate-500">67% do total</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-slate-100 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700">Solicitações por região</span>
                <MapPin className="size-4 text-blue-500" />
              </div>
              <div className="mt-4 flex h-20 items-end gap-2" aria-label="Gráfico ilustrativo de solicitações por região">
                {[38, 58, 44, 76, 52, 88, 65, 48, 70, 56, 82, 61].map((height, index) => (
                  <span
                    key={index}
                    className={`flex-1 rounded-t-md ${index === 5 ? "bg-blue-600" : "bg-blue-200"}`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-700">Triagem inteligente</p>
              <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-semibold text-blue-700">IA ativa</span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                ["Buraco na Rua das Flores", "Infraestrutura", "Alta prioridade"],
                ["Lâmpada apagada na Praça Central", "Iluminação", "Em análise"],
                ["Coleta atrasada no Bairro Novo", "Limpeza urbana", "Encaminhada"],
              ].map(([title, category, status], index) => (
                <div key={title} className="rounded-xl border border-slate-100/80 bg-white/80 p-3 shadow-sm backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <span className={`mt-1 flex size-7 shrink-0 items-center justify-center rounded-lg ${index === 0 ? "bg-amber-50 text-amber-600" : "bg-blue-50 text-blue-600"}`}>
                      <FileText className="size-3.5" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold text-slate-800">{title}</p>
                      <p className="mt-1 text-[10px] text-slate-400">{category}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-[10px] font-medium text-blue-600">{status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-44 overflow-hidden rounded-[2rem] border-[5px] border-slate-900 bg-white/85 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.5)] backdrop-blur-md transition-transform duration-500 hover:-translate-y-1 sm:w-52">
        <div className="flex items-center justify-center bg-slate-900 py-2">
          <span className="h-1 w-10 rounded-full bg-slate-700" />
        </div>
        <div className="bg-[#f6f7f8] p-3 pb-5">
          <div className="flex items-center gap-2 rounded-xl bg-emerald-600 p-2.5 text-white">
            <MessageCircle className="size-4" />
            <span className="text-[10px] font-semibold">Conexão Municipal</span>
          </div>
          <div className="mt-4 max-w-[90%] rounded-2xl rounded-tl-sm bg-white p-3 shadow-sm">
            <p className="text-[10px] leading-relaxed text-slate-600">Olá! Como podemos ajudar a sua cidade hoje?</p>
          </div>
          <div className="ml-auto mt-3 max-w-[90%] rounded-2xl rounded-tr-sm bg-emerald-100 p-3">
            <p className="text-[10px] leading-relaxed text-slate-700">Há um buraco na Rua das Flores.</p>
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[9px] text-slate-400">
            Escreva a sua mensagem...
            <ArrowUpRight className="ml-auto size-3 text-emerald-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main
      className="min-h-screen bg-[#fbfcfe] text-slate-800"
      style={{ fontFamily: 'Inter, "Segoe UI", Arial, sans-serif' }}
    >
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Navegação principal">
          <Brand />
          <div className="hidden items-center gap-8 md:flex">
            <a href="#como-funciona" className="text-sm font-medium text-slate-600 transition hover:text-blue-700">Como funciona</a>
            <a href="#beneficios" className="text-sm font-medium text-slate-600 transition hover:text-blue-700">Benefícios</a>
            <a href="#sobre" className="text-sm font-medium text-slate-600 transition hover:text-blue-700">Sobre a plataforma</a>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/login" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:text-blue-700">
              Entrar
            </Link>
            <Link href="/register" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-blue-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg">
              Cadastrar
            </Link>
          </div>
        </nav>
      </header>

      <section id="sobre" className="relative isolate scroll-mt-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/80 via-transparent to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22] [background-image:radial-gradient(#64748b_0.75px,transparent_0.75px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-48 top-24 -z-10 size-[32rem] rounded-full bg-blue-300/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-[0.9fr_1.1fr] md:gap-5 lg:gap-4 lg:py-28">
          <div className="max-w-xl">
            <span className="relative inline-flex rounded-full bg-gradient-to-r from-blue-300/80 via-sky-200 to-indigo-300 p-px shadow-[0_0_28px_rgba(59,130,246,0.16)]">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-xs font-semibold tracking-wide text-blue-800 backdrop-blur-md">
                <Sparkles className="size-3.5 text-blue-600" /> Inteligência que aproxima
              </span>
            </span>
            <h1 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Uma cidade melhor começa com uma <span className="text-blue-600">boa conversa.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
              Conecte cidadãos e Prefeitura num só lugar. Os relatos chegam com facilidade, a IA organiza cada demanda e a gestão acompanha a resolução.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/register" className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25">
                Comece agora <ArrowRight className="size-4" />
              </Link>
              <a href="#como-funciona" className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-6 text-sm font-medium text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white">
                Conheça a plataforma
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
              <span className="flex -space-x-2" aria-hidden="true">
                <span className="size-8 rounded-full border-2 border-white bg-blue-300" />
                <span className="size-8 rounded-full border-2 border-white bg-emerald-300" />
                <span className="size-8 rounded-full border-2 border-white bg-violet-300" />
              </span>
              <span>Mais conexão entre pessoas e gestão pública</span>
            </div>
          </div>
          <ProductPreview />
        </div>
      </section>

      <section id="como-funciona" className="scroll-mt-24 border-y border-slate-100 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-blue-600">Simples para todos</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Da escuta à solução, sem ruído.</h2>
            <p className="mt-4 leading-7 text-slate-600">Um fluxo direto para transformar participação cidadã em ação pública.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-6 md:grid-rows-2">
            {steps.map(({ number, icon: Icon, title, description }, index) => (
              <Card
                key={number}
                className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${
                  index === 0
                    ? "border-blue-200/70 bg-gradient-to-br from-blue-700 via-blue-700 to-indigo-800 text-white shadow-lg shadow-blue-900/10 md:col-span-3 md:row-span-2"
                    : "border-slate-200/80 bg-gradient-to-br from-white to-slate-50 text-slate-900 shadow-sm hover:border-blue-200 hover:shadow-blue-900/10 md:col-span-3"
                }`}
              >
                {index === 0 && <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full border border-white/10 transition-transform duration-500 group-hover:scale-110" />}
                <CardHeader className={`relative z-10 ${index === 0 ? "flex h-full flex-col justify-between p-7 sm:p-9" : "p-6 sm:p-7"}`}>
                  <div className="flex items-center justify-between">
                    <span className={`flex size-12 items-center justify-center rounded-2xl ${index === 0 ? "bg-white/15 text-white ring-1 ring-white/20 backdrop-blur" : "bg-blue-50 text-blue-700 ring-1 ring-blue-100"}`}>
                      <Icon className="size-5 transition-transform duration-300 group-hover:scale-110" />
                    </span>
                    <span className={`text-4xl font-bold tracking-tight ${index === 0 ? "text-white/25" : "text-slate-200"}`}>{number}</span>
                  </div>
                  <div className={index === 0 ? "mt-12" : "mt-5"}>
                    <CardTitle className={`text-xl font-semibold tracking-tight ${index === 0 ? "text-white sm:text-2xl" : "text-slate-900"}`}>{title}</CardTitle>
                    <CardDescription className={`mt-2 max-w-md text-sm leading-6 ${index === 0 ? "text-blue-100" : "text-slate-600"}`}>{description}</CardDescription>
                  </div>
                  {index === 0 && (
                    <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                      <span className="flex size-9 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-200"><MessageCircle className="size-4" /></span>
                      <div>
                        <p className="text-xs font-semibold text-white">WhatsApp ou web</p>
                        <p className="mt-0.5 text-[11px] text-blue-100">Participar é simples e acessível</p>
                      </div>
                    </div>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="beneficios" className="scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-end gap-5 md:grid-cols-[1fr_0.7fr]">
            <div>
              <p className="text-sm font-semibold text-blue-600">Uma conexão, muitos avanços</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Tecnologia pública com impacto na vida real.</h2>
            </div>
            <p className="leading-7 text-slate-600">Uma experiência pensada para quem vive a cidade e para quem trabalha todos os dias para melhorá-la.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {benefits.map(({ icon: Icon, eyebrow, title, description, bullets }) => (
              <Card key={eyebrow} className="rounded-3xl border-slate-100 bg-white shadow-lg shadow-blue-500/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/10">
                <CardContent className="p-7 sm:p-9">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"><Icon className="size-5" /></span>
                  <p className="mt-6 text-xs font-bold uppercase tracking-wider text-blue-600">{eyebrow}</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">{title}</h3>
                  <p className="mt-3 max-w-lg leading-7 text-slate-600">{description}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-sm text-slate-600"><Check className="size-4 shrink-0 text-emerald-600" />{bullet}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl bg-blue-700 px-7 py-10 text-white shadow-xl shadow-blue-700/15 sm:flex-row sm:items-center sm:px-12 sm:py-12">
          <div>
            <p className="text-sm font-semibold text-blue-200">A sua cidade pode conectar-se melhor.</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Vamos aproximar pessoas e gestão?</h2>
          </div>
          <Link href="/register" className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-medium text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-lg">
            Conheça a plataforma <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200/70 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <Brand />
          <p className="text-sm text-slate-500">Inteligência que aproxima.</p>
          <div className="flex gap-5 text-sm text-slate-500">
            <Link href="/login" className="transition hover:text-blue-700">Entrar</Link>
            <Link href="/register" className="transition hover:text-blue-700">Cadastrar</Link>
          </div>
          <p className="text-xs text-slate-400">© 2026 Conexão Municipal. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
