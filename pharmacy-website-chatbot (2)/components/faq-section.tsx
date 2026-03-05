'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Que tipos de licencias de armas existen?',
    answer: 'Existen varias categorias: Licencia A (armas de guerra, restringida), Licencia B (armas cortas para defensa personal), Licencia C (armas de vigilantes de seguridad), Licencia D (armas largas rayadas para caza mayor), Licencia E (armas largas de anima lisa como escopetas), y Licencia Federativa (armas deportivas para tiradores federados).',
  },
  {
    question: 'Que requisitos necesito para obtener una licencia?',
    answer: 'Los requisitos generales incluyen: ser mayor de edad, no tener antecedentes penales, superar un examen medico y psicologico (certificado de aptitud psicofisica), realizar un curso de formacion o prueba de aptitud segun el tipo de licencia, y justificar la necesidad en algunos casos (como la Licencia B).',
  },
  {
    question: 'Cuanto tiempo tarda el proceso de obtencion?',
    answer: 'El tiempo varia segun el tipo de licencia. Generalmente, las licencias E (escopetas) pueden obtenerse en 2-4 semanas. Las licencias D (rifles) en 3-6 semanas. Las licencias B (armas cortas) pueden tardar mas debido a la necesidad de justificacion. En PSILVAMEDIC agilizamos al maximo cada proceso.',
  },
  {
    question: 'En que consisten los examenes medicos?',
    answer: 'Los examenes incluyen una evaluacion medica general (vision, audicion, capacidad motora) y una evaluacion psicologica (estabilidad emocional, capacidad de juicio, ausencia de trastornos). Ambos son realizados en nuestro centro autorizado y el certificado tiene una validez de 3 meses para la solicitud.',
  },
  {
    question: 'Cada cuanto se renueva la licencia de armas?',
    answer: 'La periodicidad de renovacion depende del tipo: Las licencias B, C y D se renuevan cada 3 anos. Las licencias E se renuevan cada 5 anos. Las licencias federativas se renuevan anualmente. En todos los casos es necesario superar nuevamente el reconocimiento psicofisico.',
  },
  {
    question: 'Puedo tener mas de un tipo de licencia?',
    answer: 'Si, es posible tener varias licencias simultaneamente siempre que se cumplan los requisitos de cada una. Por ejemplo, un cazador puede tener licencia D y E, y un tirador deportivo puede tener ademas una licencia federativa.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <Badge className="mb-4">Preguntas Frecuentes</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Resolvemos tus Dudas
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Las preguntas mas comunes sobre licencias y permisos de armas
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg bg-card overflow-hidden transition-shadow hover:shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-card-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
