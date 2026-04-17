export const registryConfig = {
  /**
   * Registry namespace identifier for shadcn CLI
   * @example "@najmul-haque-talukder" - Users can install components with: `npx shadcn add @najmul-haque-talukder/wheel-picker`
   * @see https://ui.shadcn.com/docs/registry/namespace#overview
   */
  namespace: process.env.NEXT_PUBLIC_REGISTRY_NAMESPACE || "@najmul-haque-talukder",
  /**
   * URL pattern for resolving namespaced components
   * The {name} placeholder will be replaced with the component name
   * @example "https://najmul-haque-talukder.vercel.app/r/{name}.json" resolves to "https://najmul-haque-talukder.vercel.app/r/wheel-picker.json"
   * This tells shadcn CLI where to fetch component definitions when installing with namespace prefix
   * @see https://ui.shadcn.com/docs/registry/namespace#url-pattern-system
   */
  namespaceUrl:
    process.env.NEXT_PUBLIC_REGISTRY_NAMESPACE_URL ||
    "https://najmul-haque-talukder.vercel.app/r/{name}.json",
}
