import React from 'react';

// Minimal stand-in for Docusaurus' @theme/Layout. It renders the page title
// and description (when provided) plus any children so tests can assert on them.
export default function Layout({title, description, children}) {
  return (
    <div data-testid="layout" data-title={title} data-description={description}>
      {children}
    </div>
  );
}
