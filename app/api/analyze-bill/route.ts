import { generateText, Output } from 'ai'
import { z } from 'zod'

const billAnalysisSchema = z.object({
  utilityProvider: z.string().describe('The utility company name (e.g., SDG&E, PG&E, SCE)'),
  ratePlan: z.string().nullable().describe('The rate plan or tariff name if visible'),
  billingPeriod: z.string().nullable().describe('The billing period dates'),
  totalKwh: z.number().describe('Total kWh usage for the billing period'),
  totalAmount: z.number().describe('Total bill amount in dollars'),
  ratePerKwh: z.number().describe('Calculated or shown rate per kWh in cents'),
  accountNumber: z.string().nullable().describe('Account number (partially redacted for privacy)'),
  serviceAddress: z.string().nullable().describe('Service address city/region only'),
  peakUsage: z.number().nullable().describe('Peak usage kWh if shown'),
  offPeakUsage: z.number().nullable().describe('Off-peak usage kWh if shown'),
  estimatedAnnualUsage: z.number().describe('Estimated annual kWh based on this bill'),
  estimatedAnnualCost: z.number().describe('Estimated annual cost based on this bill'),
  solarRecommendation: z.object({
    systemSizeKw: z.number().describe('Recommended solar system size in kW'),
    estimatedMonthlySavings: z.number().describe('Estimated monthly savings with solar'),
    estimatedAnnualSavings: z.number().describe('Estimated annual savings with solar'),
    paybackYears: z.number().describe('Estimated payback period in years'),
    co2OffsetLbs: z.number().describe('Estimated annual CO2 offset in pounds'),
  }),
  insights: z.object({
    usage: z.array(z.string()).describe('2-3 insights about energy usage patterns'),
    financial: z.array(z.string()).describe('2-3 insights about costs and rate analysis'),
    solar: z.array(z.string()).describe('2-3 insights about solar potential and system recommendation'),
    environmental: z.array(z.string()).describe('1-2 insights about environmental impact'),
  }).describe('Categorized insights about the bill and potential savings'),
})

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return Response.json({ error: 'No file provided' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const base64 = Buffer.from(bytes).toString('base64')
    
    const mediaType = file.type || 'application/pdf'

    const { output } = await generateText({
      model: 'anthropic/claude-sonnet-4-5',
      output: Output.object({
        schema: billAnalysisSchema,
      }),
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `You are an expert utility bill analyzer for California solar consultations. Analyze this utility bill and extract all relevant information.

For the solar recommendation, use these assumptions:
- Average California solar production: 1,500 kWh per kW per year
- Average system cost: $2.80 per watt installed (before incentives)
- 30% federal tax credit applies
- California average sunshine: 5.5 peak sun hours
- Electricity rate inflation: 6% annually

Provide accurate estimates for solar system sizing and savings based on the bill's usage patterns. Be conservative in estimates.

If any information is not clearly visible in the bill, make reasonable estimates based on California utility averages and note this in insights.`,
            },
            {
              type: 'file',
              data: base64,
              mediaType: mediaType as 'application/pdf' | 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp',
              filename: file.name || 'utility-bill',
            },
          ],
        },
      ],
    })

    return Response.json({ analysis: output })
  } catch (error) {
    console.error('Bill analysis error:', error)
    return Response.json(
      { error: 'Failed to analyze bill. Please try again.' },
      { status: 500 }
    )
  }
}
