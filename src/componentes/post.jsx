import Css from "./Post.module.css";
import { Comment } from "./comment";
import { Avatar } from "./Avatar";

export function Post(props) {
  const date = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    timeStyles: "full",
  });

  return (
    <article className={Css.post}>
      <header>
        <div className={Css.author}>
          <Avatar hostborder={true} src={props.autor.avatarUrl} />
          <div className={Css.authorinfo}>
            <strong>{props.autor.name}</strong>
            <span>{props.autor.role}</span>
          </div>
        </div>
        <time>{props.data.toString()}</time>
      </header>
      <div className={Css.conteudo}>
        {props.conteudo.map((cont) => {
          return <p>{cont.conteudo}</p>;
        })}
      </div>
      <form className={Css.form}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu comentario"></textarea>

        <button>Publicar</button>
      </form>
      <dir className={Css.commentlist}>
        <Comment />
        <Comment />
        <Comment />
      </dir>
    </article>
  );
}
