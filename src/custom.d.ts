/*
 * Namespace 'React' has no exported member 'StatelessComponent'
 * in formik, react-mapbox-gl
 */
declare namespace React {
  type StatelessComponent<P> = React.FunctionComponent<P>;
}

/*
 * Don't care about the typings of external libraries.
 * All libraries without typings will be imported as `any`.
*/
declare module '*' { }

declare module '*.svg' {
  const content: string;
  export default content;
}
