import Css from "./Avatar.module.css";

export function Avatar({ hostborder = true, src }) {
  return (
    <img className={hostborder ? Css.avatarhostborder : Css.avatar} src={src} />
  );
}
