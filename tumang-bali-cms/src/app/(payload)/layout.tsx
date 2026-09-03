import config from '@/payload.config'
import '@payloadcms/next/css'
import type { ServerFunctionClient } from 'payload'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import React from 'react'

import { importMap } from './admin/importMap.js'

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
    <div className="fixed left-2 top-1/2 -translate-y-1/2 z-[1600] flex flex-col items-center gap-2 pointer-events-auto">
      <div className="block">
        <div className="rounded-full bg-orange-600/95 text-white text-[10px] sm:text-[11px] font-bold px-2 py-0.5 sm:px-3 sm:py-1 shadow-lg border border-orange-500/40">
          Ask anything
        </div>
      </div>
      <ZapierChatbotEmbed
        is-popup="true"
        chatbot-id="cmtlla8tc0084rm7xj52d7m6w"
      />
    </div>
    {children}
  </RootLayout>
)

export default Layout
