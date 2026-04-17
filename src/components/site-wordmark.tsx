export function SiteWordmark({
  className,
  ...props
}: React.ComponentProps<"img">) {
  return (
    <>
      <img
        src="/najmul/najmul-light.svg"
        alt="najmul Wordmark"
        className={`${className || ""} hidden dark:block`}
        {...props}
      />
      <img
        src="/najmul/najmul-dark.svg"
        alt="najmul Wordmark"
        className={`${className || ""} block dark:hidden`}
        {...props}
      />
    </>
  )
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100"><text x="100" y="50" fill="${color}">najmul</text></svg>`
}
