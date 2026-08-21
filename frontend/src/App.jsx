import { useEffect, useState } from 'react';
import { checkBackendConnection } from './services/api';

function App() {
  const [backendStatus, setBackendStatus] = useState('Checking...');

  useEffect(() => {
    const checkHealth = async () => {
      const data = await checkBackendConnection();
      if (data && data.status === 'UP') {
        setBackendStatus('Connected');
      } else {
        setBackendStatus('Disconnected');
      }
    };
    checkHealth();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 font-sans">
      <h1 className="text-4xl font-bold mb-4 text-blue-400">Automated Incident Triage</h1>
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center border border-gray-700">
         <p className="text-xl">
           Backend: <span className={backendStatus === 'Connected' ? 'text-green-500 font-semibold' : 'text-red-500 font-semibold'}>
             {backendStatus}
           </span>
         </p>
      </div>
    </div>
  );
}

export default App;
