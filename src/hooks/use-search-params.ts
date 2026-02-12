import React from 'react';

export function useSearchParams() {
  const [params] = React.useState(() => new URLSearchParams(window.location.search));

  return params;
}
