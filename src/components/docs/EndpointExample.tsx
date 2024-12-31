import React from 'react';
import { CodeBlock } from './CodeBlock';

interface EndpointExampleProps {
  method: string;
  path: string;
  description: string;
  request?: string;
  response: string;
  queryParams?: Array<{ name: string; description: string; }>;
}

export function EndpointExample({ 
  method, 
  path, 
  description, 
  request, 
  response,
  queryParams 
}: EndpointExampleProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-md">
      <p className="font-mono text-sm mb-2">{method} {path}</p>
      <p className="mb-4">{description}</p>
      
      {queryParams && (
        <>
          <h4>Query Parameters</h4>
          <ul className="mb-4">
            {queryParams.map(param => (
              <li key={param.name}>
                <code>{param.name}</code> - {param.description}
              </li>
            ))}
          </ul>
        </>
      )}

      {request && (
        <>
          <h4>Request</h4>
          <CodeBlock code={request} />
        </>
      )}

      <h4 className="mt-4">Response</h4>
      <CodeBlock code={response} language="json" />
    </div>
  );
}