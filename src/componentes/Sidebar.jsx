import Css from "./Sidebar.module.css";
import Img from "../icon/CapaFotoNoite.jpg";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={Css.sidebar}>
      <img src={Img} className={Css.cover} alt="" />
      <div className={Css.profile}>
        <Avatar hostborder={true} src="https://github.com/diego3g.png" />

        <strong>Amanda Karen</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
}
