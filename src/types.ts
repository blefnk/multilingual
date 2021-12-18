/**
 * Shared types.
 */

import { Rewrite } from 'next/dist/lib/load-custom-routes';

/**
 * Rewrites (type is not available in Next.js)
 *
 * @see https://github.com/vercel/next.js/blob/d130f63c416b21adc67dc3c755ad6e1a707e2cc8/packages/next/build/webpack/plugins/build-manifest-plugin.ts#L41
 */
export type Rewrites = {
  /**
   * These rewrites are checked after headers/redirects and before all files including _next/public files which
   * allows overriding page files.
   */
  beforeFiles: Rewrite[];
  /** These rewrites are checked after pages/public files are checked but before dynamic routes. */
  afterFiles: Rewrite[];
  /** These rewrites are checked after both pages/public files and dynamic routes are checked. */
  fallback: Rewrite[];
};
