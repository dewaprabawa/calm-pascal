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
    <div className="fixed bottom-6 z-[1600] flex flex-col items-start gap-2 pointer-events-auto left-4 sm:left-auto sm:right-6 sm:items-end">
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
