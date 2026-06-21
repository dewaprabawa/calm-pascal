import type { Metadata } from 'next'

import config from '@/payload.config'
import { generatePageMetadata, RootPage } from '@payloadcms/next/views'
import type { ServerFunctionClient } from 'payload'
import { handleServerFunctions } from '@payloadcms/next/layouts'
import React from 'react'

import { importMap } from '../importMap.js'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({ config, params, searchParams })

const serverFunction: ServerFunctionClient = async function (args) {
  'use server'
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

const Page = ({ params, searchParams }: Args) => (
  <RootPage config={config} importMap={importMap} serverFunction={serverFunction} params={params} searchParams={searchParams} />
)

export default Page
