import { Avatar } from "./Avatar";
import Css from "./comment.module.css";

export function Comment() {
  return (
    <div className={Css.comment}>
      <Avatar hostborder={false} src="https://github.com/diego3g.png" />

      <div className={Css.commentbox}>
        <div className={Css.commentcontent}>
          <header>
            <div className={Css.author}>
              <strong>Diego</strong>
              <time dateTime="2022-06-14 14:44:15">Cerca de 1h atras</time>
            </div>
            <button title="deletar">Deletar</button>
          </header>
          <p>Demais!!!!</p>
        </div>
        <footer>
          <button>
            {" "}
            Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
