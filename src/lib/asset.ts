/**
 * Monta a URL de um arquivo da pasta public/ respeitando o `base` do Vite.
 * Assim o site funciona tanto na raiz do dominio quanto em um subcaminho
 * (ex.: natalia716.github.io/apmachado/).
 */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
