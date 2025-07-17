import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime'

const client = new BedrockRuntimeClient({ region: import.meta.env.VITE_AWS_REGION })
const modelId = import.meta.env.VITE_MODEL_ID || 'amazon.titan-tg1-large'

export async function invokeBedrock(prompt: string) {
  const command = new InvokeModelCommand({
    modelId,
    contentType: 'application/json',
    accept: 'application/json',
    body: JSON.stringify({ prompt })
  })

  const response = await client.send(command)
  const text = new TextDecoder().decode(response.body)
  return JSON.parse(text)
}
