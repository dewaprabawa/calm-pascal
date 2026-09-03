import config from '@/payload.config'
import '@payloadcms/next/css'
import type { ServerFunctionClient } from 'payload'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import React from 'react'

import { importMap } from './admin/importMap.js'
import ZapierChatbotPositioner from '@/app/(app)/components/ZapierChatbotPositioner'

// Zapier custom element (web component) doesn't exist in JSX intrinsic types by default.
// Typing it as `any` keeps Next/TS builds passing.
const ZapierChatbotEmbed = 'zapier-interfaces-chatbot-embed' as any;

type Args = {
  children: React.ReactNode
}

const serverFunction: ServerFunctionClient = async function (args) {
  'use server'
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

const Layout = ({ children }: Args) => (
  <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
    {/* Zapier chatbot embed (site-wide / admin too) */}
    <script
      async
      type="module"
      src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
    />
    <div className="fixed left-4 bottom-6 z-[1600] flex flex-col items-start gap-2 pointer-events-auto">
      <div className="flex flex-col items-start gap-1">
        <div className="w-9 h-9 rounded-full bg-orange-600/95 flex items-center justify-center shadow-lg border border-orange-500/40">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-white"
            aria-hidden="true"
          >
            <path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1-5a4 4 0 0 1-1-3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
          </svg>
        </div>
        <div className="rounded-full bg-orange-600/95 text-white text-[10px] font-bold px-2 py-0.5 sm:px-3 sm:py-1 shadow-lg border border-orange-500/40 whitespace-nowrap">
          Ask AI agent here
        </div>
      </div>
      <ZapierChatbotEmbed
        is-popup="true"
        chatbot-id="cmtlla8tc0084rm7xj52d7m6w"
      />
    </div>
    <ZapierChatbotPositioner />
    {children}
  </RootLayout>
)

export default Layout
