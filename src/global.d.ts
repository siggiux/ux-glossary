/*
 * Type declarations for CSS Modules and plain CSS imports.
 * Lets TypeScript accept `import styles from './Foo.module.css'`.
 */

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.css';
