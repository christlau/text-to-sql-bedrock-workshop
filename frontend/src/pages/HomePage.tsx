import { useState } from 'react';
import { invokeBedrock } from '../services/bedrock';

export default function HomePage() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await invokeBedrock(prompt);
      setResponse(JSON.stringify(data));
    } catch {
      setResponse('Error invoking Bedrock');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bedrock Demo</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full border p-2"
          rows={4}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
      {response && (
        <pre className="mt-4 p-2 bg-gray-100 border rounded">{response}</pre>
      )}
    </div>
  );
}
