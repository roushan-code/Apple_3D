import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import * as Sentry from "@sentry/react";

// Sentry.init({
//   dsn: "https://d9209f76c99a0122f4c9170561b82183@o4508258133671936.ingest.us.sentry.io/4508258136358912",
//   integrations: [
//     Sentry.browserTracingIntegration(),

//     Sentry.reactRouterV6BrowserTracingIntegration({
//       useEffect: React.useEffect
//     }),
//     Sentry.replayIntegration(),
//   ],
//   tracesSampleRate: 1.0, 
//   tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  
//   replaysSessionSampleRate: 0.1, 
//   replaysOnErrorSampleRate: 1.0, 
// });


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
