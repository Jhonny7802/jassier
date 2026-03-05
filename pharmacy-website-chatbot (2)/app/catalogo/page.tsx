'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Chatbot } from '@/components/chatbot'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import {
  Shield,
  Target,
  Crosshair,
  Info,
  ChevronRight,
  Search,
  Filter,
} from 'lucide-react'

type Category = 'todas' | 'pistolas' | 'rifles' | 'escopetas' | 'deportivas'

interface Weapon {
  name: string
  caliber: string
  category: Category
  license: string
  licenseBadge: string
  description: string
  origin: string
  use: string
}

const weapons: Weapon[] = [
  // Pistolas y Revolveres - Licencia B
  {
    name: 'Glock 17 Gen5',
    caliber: '9x19mm Parabellum',
    category: 'pistolas',
    license: 'Licencia B',
    licenseBadge: 'bg-blue-600/20 text-blue-400 border-blue-600/30',
    description: 'Pistola semiautomatica de polimero, referencia mundial en fiabilidad y precision.',
    origin: 'Austria',
    use: 'Defensa personal / Tiro deportivo',
  },
  {
    name: 'Beretta 92FS',
    caliber: '9x19mm Parabellum',
    category: 'pistolas',
    license: 'Licencia B',
    licenseBadge: 'bg-blue-600/20 text-blue-400 border-blue-600/30',
    description: 'Pistola semiautomatica de acero, utilizada por fuerzas armadas de todo el mundo.',
    origin: 'Italia',
    use: 'Defensa personal / Tiro deportivo',
  },
  {
    name: 'CZ 75 SP-01',
    caliber: '9x19mm Parabellum',
    category: 'pistolas',
    license: 'Licencia B',
    licenseBadge: 'bg-blue-600/20 text-blue-400 border-blue-600/30',
    description: 'Pistola de acero con riel de accesorios, excelente ergonomia y control del retroceso.',
    origin: 'Republica Checa',
    use: 'Tiro deportivo / Defensa',
  },
  {
    name: 'Smith & Wesson 686',
    caliber: '.357 Magnum',
    category: 'pistolas',
    license: 'Licencia B',
    licenseBadge: 'bg-blue-600/20 text-blue-400 border-blue-600/30',
    description: 'Revolver de acero inoxidable con tambor de 6 cartuchos, alta potencia y durabilidad.',
    origin: 'Estados Unidos',
    use: 'Tiro deportivo / Defensa',
  },
  {
    name: 'SIG Sauer P226',
    caliber: '9x19mm Parabellum',
    category: 'pistolas',
    license: 'Licencia B',
    licenseBadge: 'bg-blue-600/20 text-blue-400 border-blue-600/30',
    description: 'Pistola semiautomatica de servicio, conocida por su precision y ergonomia superior.',
    origin: 'Alemania/Suiza',
    use: 'Defensa personal / Fuerzas de seguridad',
  },
  {
    name: 'HK USP Compact',
    caliber: '9x19mm Parabellum',
    category: 'pistolas',
    license: 'Licencia B',
    licenseBadge: 'bg-blue-600/20 text-blue-400 border-blue-600/30',
    description: 'Pistola compacta de polimero con sistema de reduccion de retroceso patentado.',
    origin: 'Alemania',
    use: 'Defensa personal / Porte oculto',
  },

  // Rifles de Caza Mayor - Licencia D
  {
    name: 'Browning BAR MK3',
    caliber: '.30-06 Springfield',
    category: 'rifles',
    license: 'Licencia D',
    licenseBadge: 'bg-emerald-600/20 text-emerald-400 border-emerald-600/30',
    description: 'Rifle semiautomatico de caza con culata de nogal y sistema de gas fiable.',
    origin: 'Belgica',
    use: 'Caza mayor',
  },
  {
    name: 'Remington 700 SPS',
    caliber: '.308 Winchester',
    category: 'rifles',
    license: 'Licencia D',
    licenseBadge: 'bg-emerald-600/20 text-emerald-400 border-emerald-600/30',
    description: 'Rifle de cerrojo legendario, reconocido mundialmente por su precision excepcional.',
    origin: 'Estados Unidos',
    use: 'Caza mayor / Tiro de precision',
  },
  {
    name: 'Tikka T3x Lite',
    caliber: '.308 Winchester',
    category: 'rifles',
    license: 'Licencia D',
    licenseBadge: 'bg-emerald-600/20 text-emerald-400 border-emerald-600/30',
    description: 'Rifle de cerrojo ligero con accion suave y precision finlandesa garantizada.',
    origin: 'Finlandia',
    use: 'Caza mayor / Montana',
  },
  {
    name: 'Sako 85 Hunter',
    caliber: '.300 Win Mag',
    category: 'rifles',
    license: 'Licencia D',
    licenseBadge: 'bg-emerald-600/20 text-emerald-400 border-emerald-600/30',
    description: 'Rifle de cerrojo premium con fabricacion artesanal y acabados de alta calidad.',
    origin: 'Finlandia',
    use: 'Caza mayor / Larga distancia',
  },
  {
    name: 'Mauser M18',
    caliber: '.30-06 Springfield',
    category: 'rifles',
    license: 'Licencia D',
    licenseBadge: 'bg-emerald-600/20 text-emerald-400 border-emerald-600/30',
    description: 'Rifle de cerrojo aleman con excelente relacion calidad-precio y gran robustez.',
    origin: 'Alemania',
    use: 'Caza mayor',
  },

  // Escopetas - Licencia E
  {
    name: 'Beretta 686 Silver Pigeon',
    caliber: 'Calibre 12',
    category: 'escopetas',
    license: 'Licencia E',
    licenseBadge: 'bg-amber-600/20 text-amber-400 border-amber-600/30',
    description: 'Escopeta superpuesta de referencia con grabados elegantes y mecanica excelente.',
    origin: 'Italia',
    use: 'Caza / Tiro al plato',
  },
  {
    name: 'Browning Citori 725',
    caliber: 'Calibre 12',
    category: 'escopetas',
    license: 'Licencia E',
    licenseBadge: 'bg-amber-600/20 text-amber-400 border-amber-600/30',
    description: 'Escopeta superpuesta premium con canones back-bored y gatillo mecanico.',
    origin: 'Belgica/Japon',
    use: 'Tiro deportivo / Caza',
  },
  {
    name: 'Benelli M2 Comfort',
    caliber: 'Calibre 12',
    category: 'escopetas',
    license: 'Licencia E',
    licenseBadge: 'bg-amber-600/20 text-amber-400 border-amber-600/30',
    description: 'Escopeta semiautomatica con sistema inercial y sistema de reduccion de retroceso.',
    origin: 'Italia',
    use: 'Caza / Tiro al plato',
  },
  {
    name: 'Remington 870 Express',
    caliber: 'Calibre 12',
    category: 'escopetas',
    license: 'Licencia E',
    licenseBadge: 'bg-amber-600/20 text-amber-400 border-amber-600/30',
    description: 'Escopeta de corredera iconica, la mas vendida del mundo con mas de 11 millones de unidades.',
    origin: 'Estados Unidos',
    use: 'Caza / Uso general',
  },
  {
    name: 'Winchester SX4',
    caliber: 'Calibre 12',
    category: 'escopetas',
    license: 'Licencia E',
    licenseBadge: 'bg-amber-600/20 text-amber-400 border-amber-600/30',
    description: 'Escopeta semiautomatica con sistema Active Valve para ciclo ultrarapido.',
    origin: 'Estados Unidos',
    use: 'Caza / Competicion',
  },

  // Deportivas - Licencia Federativa
  {
    name: 'Walther GSP Expert',
    caliber: '.22 LR',
    category: 'deportivas',
    license: 'Licencia Federativa',
    licenseBadge: 'bg-rose-600/20 text-rose-400 border-rose-600/30',
    description: 'Pistola de competicion de alto rendimiento para tiro de precision olimpico.',
    origin: 'Alemania',
    use: 'Tiro olimpico',
  },
  {
    name: 'Pardini SP RF',
    caliber: '.22 LR',
    category: 'deportivas',
    license: 'Licencia Federativa',
    licenseBadge: 'bg-rose-600/20 text-rose-400 border-rose-600/30',
    description: 'Pistola de precision italiana disenada exclusivamente para competicion olimpica.',
    origin: 'Italia',
    use: 'Tiro olimpico',
  },
  {
    name: 'Feinwerkbau AW93',
    caliber: '.22 LR',
    category: 'deportivas',
    license: 'Licencia Federativa',
    licenseBadge: 'bg-rose-600/20 text-rose-400 border-rose-600/30',
    description: 'Pistola de competicion alemana con empunadura ergonomica ajustable y gatillo electronico.',
    origin: 'Alemania',
    use: 'Tiro olimpico / Precision',
  },
  {
    name: 'Anschutz 1913 Super Match',
    caliber: '.22 LR',
    category: 'deportivas',
    license: 'Licencia Federativa',
    licenseBadge: 'bg-rose-600/20 text-rose-400 border-rose-600/30',
    description: 'Rifle de precision olimpico, el estandar de referencia en competiciones internacionales.',
    origin: 'Alemania',
    use: 'Tiro olimpico / Biathlon',
  },
]

const categoryTabs: { key: Category; label: string; icon: React.ElementType }[] = [
  { key: 'todas', label: 'Todas', icon: Filter },
  { key: 'pistolas', label: 'Pistolas y Revolveres', icon: Shield },
  { key: 'rifles', label: 'Rifles de Caza', icon: Crosshair },
  { key: 'escopetas', label: 'Escopetas', icon: Target },
  { key: 'deportivas', label: 'Armas Deportivas', icon: Target },
]

const licenseInfo: Record<string, { title: string; description: string }> = {
  'Licencia B': {
    title: 'Licencia B - Armas Cortas',
    description: 'Para defensa personal y armas cortas. Requiere justificacion documentada, examen psicofisico y prueba de aptitud.',
  },
  'Licencia D': {
    title: 'Licencia D - Armas Largas Rayadas',
    description: 'Para rifles de caza mayor con canon estriado. Requiere licencia de caza vigente y examen psicofisico.',
  },
  'Licencia E': {
    title: 'Licencia E - Armas Largas de Anima Lisa',
    description: 'Para escopetas de caza y tiro deportivo. Requiere examen psicofisico y formacion basica.',
  },
  'Licencia Federativa': {
    title: 'Licencia Federativa - Armas Deportivas',
    description: 'Para tiradores federados. Requiere pertenencia a un club de tiro y licencia federativa vigente.',
  },
}

export default function CatalogoPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('todas')
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = weapons.filter((w) => {
    const matchCategory = activeCategory === 'todas' || w.category === activeCategory
    const matchSearch =
      searchTerm === '' ||
      w.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.caliber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

  // Group by license for display
  const grouped = filtered.reduce<Record<string, Weapon[]>>((acc, w) => {
    if (!acc[w.license]) acc[w.license] = []
    acc[w.license].push(w)
    return acc
  }, {})

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative bg-primary py-16 px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.1),transparent_60%)]" />
          <div className="max-w-7xl mx-auto relative">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 hover:bg-accent/30">
              Catalogo de Armas
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              Armas para las que Gestionamos tus Permisos
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-3xl text-pretty leading-relaxed">
              Consulta nuestro catalogo completo de armas organizadas por tipo de licencia.
              Te asesoramos y gestionamos todos los tramites necesarios para cada una de ellas.
            </p>

            {/* Search */}
            <div className="mt-8 max-w-lg">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar por nombre, calibre..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="sticky top-16 z-40 bg-background border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
              {categoryTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === tab.key
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm text-muted-foreground mb-8">
              Mostrando {filtered.length} {filtered.length === 1 ? 'arma' : 'armas'}
              {activeCategory !== 'todas' ? ` en ${categoryTabs.find(t => t.key === activeCategory)?.label}` : ''}
            </p>

            {Object.entries(grouped).length === 0 ? (
              <Card className="py-16">
                <CardContent className="text-center">
                  <div className="inline-flex h-20 w-20 rounded-full bg-muted items-center justify-center mb-4">
                    <Search className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No se encontraron resultados</h3>
                  <p className="text-muted-foreground">Prueba con otros terminos de busqueda</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-12">
                {Object.entries(grouped).map(([license, items]) => (
                  <div key={license}>
                    {/* License Group Header */}
                    <div className="mb-6 p-4 rounded-lg bg-card border">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Info className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-card-foreground">
                            {licenseInfo[license]?.title || license}
                          </h2>
                          <p className="text-sm text-muted-foreground mt-1">
                            {licenseInfo[license]?.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Weapons Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {items.map((weapon, idx) => (
                        <Card
                          key={idx}
                          className="group hover:shadow-lg transition-all duration-300 hover:border-primary/30 overflow-hidden"
                        >
                          {/* Color bar top */}
                          <div className="h-1.5 bg-gradient-to-r from-primary to-accent" />
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between gap-3 mb-4">
                              <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-lg text-card-foreground group-hover:text-primary transition-colors">
                                  {weapon.name}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-0.5">{weapon.origin}</p>
                              </div>
                              <Badge
                                variant="outline"
                                className={`text-xs flex-shrink-0 ${weapon.licenseBadge}`}
                              >
                                {weapon.license}
                              </Badge>
                            </div>

                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                              {weapon.description}
                            </p>

                            <div className="space-y-2 mb-5">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Calibre</span>
                                <span className="font-medium text-card-foreground">{weapon.caliber}</span>
                              </div>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Uso</span>
                                <span className="font-medium text-card-foreground text-right">{weapon.use}</span>
                              </div>
                            </div>

                            <Link href="/contacto">
                              <Button
                                variant="outline"
                                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                              >
                                Consultar Tramite
                                <ChevronRight className="ml-1 h-4 w-4" />
                              </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-primary">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary-foreground text-balance">
              No encuentras el arma que buscas?
            </h2>
            <p className="text-lg text-primary-foreground/80 text-pretty">
              Gestionamos permisos para cualquier tipo de arma. Contactanos y te asesoramos
              sobre los requisitos y tramites necesarios.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/contacto">
                <Button size="lg" variant="secondary">
                  Contactar Ahora
                </Button>
              </Link>
              <Link href="/servicios">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Ver Servicios
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground text-background py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">PSILVAMEDIC</h3>
            <p className="opacity-80 mb-4">Tu licencia de armas, nuestra especialidad</p>
            <p className="text-sm opacity-60">2026 PSILVAMEDIC. Todos los derechos reservados.</p>
          </div>
        </footer>

        <Chatbot />
      </main>
    </>
  )
}
