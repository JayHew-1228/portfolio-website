import { motion as framerMotion } from 'framer-motion';

export const motion = framerMotion;
export const m = {
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  p: motion.p,
  span: motion.span,
  a: motion.a,
  button: motion.button,
  img: motion.img,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  nav: motion.nav,
  header: motion.header,
  footer: motion.footer,
  section: motion.section,
  article: motion.article,
  aside: motion.aside,
  main: motion.main,
  form: motion.form,
  input: motion.input,
  textarea: motion.textarea,
  label: motion.label,
  select: motion.select,
  option: motion.option,
  svg: motion.svg,
  path: motion.path,
  circle: motion.circle,
  rect: motion.rect,
  line: motion.line,
  g: motion.g,
  polygon: motion.polygon,
  polyline: motion.polyline,
  defs: motion.defs,
  clipPath: motion.clipPath,
  linearGradient: motion.linearGradient,
  radialGradient: motion.radialGradient,
  stop: motion.stop,
} as const;

export default motion;
