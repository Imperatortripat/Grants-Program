// Minimal stand-in for @docusaurus/useDocusaurusContext returning a siteConfig
// with the same fields the pages under test read.
export default function useDocusaurusContext() {
  return {
    siteConfig: {
      title: 'Web3 Foundation Grants Program',
      tagline: 'Test tagline',
    },
  };
}
