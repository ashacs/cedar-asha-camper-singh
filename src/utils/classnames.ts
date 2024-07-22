export default function classnames(...names: (string | undefined)[]) {
  const truthyNames = names.filter(Boolean);
  return truthyNames.join(" ");
}
