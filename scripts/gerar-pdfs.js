import PDFDocument from 'pdfkit'
import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outputDir = resolve(__dirname, '..', 'pdf-apresentacao')

const GOLD = '#d4af37'
const DARK = '#1a1a1a'
const WHITE = '#ffffff'
const GRAY = '#888888'

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true })
}

function header(doc, title) {
  doc.rect(0, 0, doc.page.width, 120).fill(DARK)
  doc.fontSize(28).font('Helvetica-Bold').fillColor(GOLD)
  doc.text('FÁBIO TONELLI', 50, 30, { align: 'center' })
  doc.fontSize(11).font('Helvetica').fillColor(GRAY)
  doc.text('NUTRICIONISTA CLÍNICO', 50, 65, { align: 'center' })
  doc.moveTo(50, 95).lineTo(doc.page.width - 50, 95).strokeColor(GOLD).lineWidth(1).stroke()
  doc.fontSize(18).font('Helvetica-Bold').fillColor(WHITE)
  doc.text(title, 50, 108, { align: 'center' })
}

function footer(doc) {
  const y = doc.page.height - 40
  doc.fontSize(8).font('Helvetica').fillColor(GRAY)
  doc.text('Fábio Tonelli • Nutricionista Clínico', 50, y, { align: 'center' })
  doc.text('fabiotonelli.nutri@hotmail.com • (11) 97364-3442', 50, y + 12, { align: 'center' })
}

function separator(doc, y) {
  doc.moveTo(50, y).lineTo(doc.page.width - 50, y).strokeColor(GOLD).lineWidth(0.5).stroke()
}

function save(doc, path) {
  return new Promise((resolve, reject) => {
    const chunks = []
    doc.on('data', (chunk) => chunks.push(chunk))
    doc.on('end', () => {
      writeFileSync(path, Buffer.concat(chunks))
      resolve()
    })
    doc.on('error', reject)
    doc.end()
  })
}

// ─── PDF 1: Boas-Vindas ───────────────────────────────
async function gerarBoasVindas() {
  const doc = new PDFDocument({ size: 'A4', margins: { top: 140, bottom: 60, left: 50, right: 50 } })

  header(doc, 'Boas-Vindas')

  doc.fontSize(14).font('Helvetica-Bold').fillColor(WHITE)
  doc.text('Quem é Fábio Tonelli?', 50, 160)

  doc.fontSize(10.5).font('Helvetica').fillColor(GRAY)
  doc.text([
    'Fábio Tonelli é Nutricionista Clínico, com Pós-Graduação em Nutrição Clínica e formado pela Faculdade de Medicina do ABC.',
    '',
    'Sua abordagem é centrada no paciente, com um olhar atento às necessidades individuais de cada pessoa. Acredita que a nutrição deve ser acessível, sustentável e adaptada à rotina de cada um — não o contrário.',
    '',
    'Ao longo dos anos, tem acompanhado pacientes que buscam emagrecimento, ganho de massa muscular e melhora da saúde de modo geral, sempre com estratégias práticas e aplicáveis ao dia a dia.',
  ].join('\n'), 50, 185, { align: 'left', lineGap: 4 })

  separator(doc, 310)

  doc.fontSize(13).font('Helvetica-BoldOblique').fillColor(GOLD)
  doc.text('"A nutrição precisa se adaptar à sua vida, e não o contrário."', 50, 330, { align: 'center' })

  separator(doc, 370)

  doc.fontSize(11).font('Helvetica-Bold').fillColor(WHITE)
  doc.text('Especialidades', 50, 390)

  doc.fontSize(10).font('Helvetica').fillColor(GRAY)
  doc.text([
    '• Emagrecimento',
    '• Doenças Crônicas',
    '• Obesidade',
    '• Nutrição Clínica',
    '• Reeducação Alimentar',
    '• Performance',
    '• Saúde & Bem-Estar',
  ].join('\n'), 50, 415, { lineGap: 4 })

  doc.fontSize(11).font('Helvetica-Bold').fillColor(WHITE)
  doc.text('Contato', 50, 570)

  doc.fontSize(10).font('Helvetica').fillColor(GOLD)
  doc.text('WhatsApp: (11) 97364-3442', 50, 595)
  doc.text('E-mail: fabiotonelli.nutri@hotmail.com', 50, 615)
  doc.text('Instagram: @ftonelli_', 50, 635)

  footer(doc)
  await save(doc, resolve(outputDir, '01-boas-vindas.pdf'))
}

// ─── PDF 2: Como Funciona ─────────────────────────────
async function gerarComoFunciona() {
  const doc = new PDFDocument({ size: 'A4', margins: { top: 140, bottom: 60, left: 50, right: 50 } })

  header(doc, 'Como Funciona o Acompanhamento')

  const steps = [
    { num: '01', title: 'Agendamento', text: 'Você entra em contato pelo WhatsApp e agendamos a sua consulta online. Sem filas de espera, sem deslocamento.' },
    { num: '02', title: 'Avaliação', text: 'Fazemos uma avaliação completa dos seus hábitos, rotina, exames e objetivos. Tudo é levado em consideração.' },
    { num: '03', title: 'Plano Personalizado', text: 'Você recebe um plano alimentar feito sob medida, adaptado à sua realidade, com alimentos que você gosta e tem acesso.' },
    { num: '04', title: 'Acompanhamento', text: 'Suporte contínuo com check-ins periódicos para ajustes e evolução. Você não fica sozinho em nenhuma etapa.' },
  ]

  let y = 170
  steps.forEach((step) => {
    doc.roundedRect(50, y, doc.page.width - 100, 90, 8).fillAndStroke('#111111', '#333333')

    doc.fontSize(28).font('Helvetica-Bold').fillColor(GOLD)
    doc.text(step.num, 70, y + 12)

    doc.fontSize(13).font('Helvetica-Bold').fillColor(WHITE)
    doc.text(step.title, 120, y + 15)

    doc.fontSize(10).font('Helvetica').fillColor(GRAY)
    doc.text(step.text, 120, y + 40, { width: doc.page.width - 200 })

    y += 105
  })

  separator(doc, y + 10)

  doc.fontSize(11).font('Helvetica-Bold').fillColor(WHITE)
  doc.text('Diferenciais do acompanhamento:', 50, y + 30)

  doc.fontSize(10).font('Helvetica').fillColor(GRAY)
  doc.text([
    '✓ Consultas 100% online — no conforto da sua casa',
    '✓ Plano alimentar individualizado — nada de dietas prontas',
    '✓ Suporte integral via WhatsApp durante todo o período',
    '✓ Ajustes periódicos baseados no seu progresso real',
    '✓ Foco em hábitos sustentáveis, não em restrições radicais',
  ].join('\n'), 50, y + 55, { lineGap: 4 })

  footer(doc)
  await save(doc, resolve(outputDir, '02-como-funciona.pdf'))
}

// ─── PDF 3: Planos ────────────────────────────────────
async function gerarPlanos() {
  const doc = new PDFDocument({ size: 'A4', margins: { top: 140, bottom: 60, left: 50, right: 50 } })

  header(doc, 'Planos e Investimento')

  const planos = [
    {
      nome: 'Avulsa',
      bgColor: '#1a1814',
      borderColor: '#cd7f32',
      valor: '1 consulta',
      items: [
        '1 consulta online',
        'Plano alimentar personalizado',
        'Suporte integral por 30 dias',
        'Check-in quinzenal para feedbacks',
        'Material de apoio + eBook de receitas',
      ],
    },
    {
      nome: 'Trimestral',
      bgColor: '#161617',
      borderColor: '#c0c0c0',
      valor: '3 meses',
      items: [
        '3 consultas online',
        'Plano alimentar personalizado',
        'Suporte integral por 90 dias',
        'Check-in quinzenal para feedbacks',
        'Material de apoio + eBook de receitas',
        'Avaliação física periódica',
        'Descontos em parceiros',
      ],
    },
    {
      nome: 'Semestral',
      bgColor: '#1a180e',
      borderColor: GOLD,
      destaque: 'MAIS ESCOLHIDO',
      valor: '6 meses',
      items: [
        '6 consultas online',
        'Plano alimentar personalizado',
        'Suporte integral por 180 dias',
        'Check-in quinzenal para feedbacks',
        'Material de apoio + eBook de receitas',
        'Avaliação física periódica',
        'Descontos especiais em parceiros',
        'Prioridade no agendamento',
      ],
    },
  ]

  let y = 170
  planos.forEach((plano) => {
    const cardW = doc.page.width - 100
    const x = 50

    doc.roundedRect(x, y, cardW, 155, 8).fillAndStroke(plano.bgColor, plano.borderColor)

    if (plano.destaque) {
      doc.roundedRect(x + 20, y - 10, 120, 20, 10).fill('#ff6b35')
      doc.fontSize(8).font('Helvetica-Bold').fillColor(WHITE)
      doc.text(plano.destaque, x + 30, y - 7, { width: 100 })
    }

    doc.fontSize(14).font('Helvetica-Bold').fillColor(WHITE)
    doc.text(plano.nome, x + 20, y + (plano.destaque ? 20 : 12))

    doc.fontSize(12).font('Helvetica-Bold').fillColor(GOLD)
    doc.text(plano.valor, x + cardW - 100, y + (plano.destaque ? 20 : 12), { width: 90, align: 'right' })

    doc.fontSize(9).font('Helvetica').fillColor(GRAY)
    const itemsText = plano.items.join('  •  ')
    doc.text(itemsText, x + 20, y + 45, { width: cardW - 40, lineGap: 3 })

    y += 175
  })

  separator(doc, y + 10)

  doc.fontSize(10).font('Helvetica-Bold').fillColor(WHITE)
  doc.text('Pronto para começar?', 50, y + 30)

  doc.fontSize(10).font('Helvetica').fillColor(GRAY)
  doc.text('Entre em contato pelo WhatsApp e agende sua consulta.', 50, y + 55)

  doc.fontSize(12).font('Helvetica-Bold').fillColor(GOLD)
  doc.text('(11) 97364-3442', 50, y + 80)

  footer(doc)
  await save(doc, resolve(outputDir, '03-planos.pdf'))
}

// ─── Gerar todos ──────────────────────────────────────
console.log('Gerando PDFs...')
const docs = [gerarBoasVindas(), gerarComoFunciona(), gerarPlanos()]
Promise.all(docs).then(() => {
  console.log('✓ 01-boas-vindas.pdf')
  console.log('✓ 02-como-funciona.pdf')
  console.log('✓ 03-planos.pdf')
  console.log(`\nPDFs salvos em: ${outputDir}`)
})