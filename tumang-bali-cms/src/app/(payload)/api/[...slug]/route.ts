import { REST_GET, REST_OPTIONS, REST_PATCH, REST_POST, REST_DELETE } from '@payloadcms/next/routes'
import configPromise from '@/payload.config'

export const GET = REST_GET(configPromise)
export const POST = REST_POST(configPromise)
export const DELETE = REST_DELETE(configPromise)
export const PATCH = REST_PATCH(configPromise)
export const OPTIONS = REST_OPTIONS(configPromise)

type RouteContext = { params: Promise<{ slug: string[] }> }

/**
 * Payload's REST route does not handle HEAD for `/api/media/file/*`, so Next
 * synthesizes a handler that returns 404 while GET returns 200. Ahrefs (and
 * other crawlers) probe assets with HEAD and then flag false "broken image"
 * errors. Proxy HEAD through GET and drop the body (RFC 9110 §9.3.2).
 */
export const HEAD = async (request: Request, args: RouteContext) => {
  const getRequest = new Request(request.url, {
    method: 'GET',
    headers: request.headers,
  })
  const response = await GET(getRequest, args)
  return new Response(null, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  })
}
