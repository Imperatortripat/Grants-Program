import React from 'react';

// Minimal stand-in for Docusaurus' @docusaurus/Link that renders an anchor.
export default function Link({to, href, children, ...rest}) {
  return (
    <a href={to || href} {...rest}>
      {children}
    </a>
  );
}
