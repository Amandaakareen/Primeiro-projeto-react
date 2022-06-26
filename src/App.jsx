import { Post } from "./componentes/post";
import Css from "./App.module.css";
import { Header } from "./componentes/Header";
import "./Global.css";
import { Sidebar } from "./componentes/Sidebar.jsx";

const posts = [
  {
    id: 1,
    autor: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO",
    },
    conteudo: [
      {
        type: "paragrafo",
        conteudo:
          "“O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis”",
      },
      {
        type: "paragrafo",
        conteudo: "– José de Alencar",
      },
    ],
    data: new Date("2022-06-14 14:44:15"),
  },
  {
    id: 2,
    autor: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "mayk brito",
      role: "web devoloper",
    },
    conteudo: [
      {
        type: "paragrafo",
        conteudo:
          "“O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis”",
      },
      { type: "paragrafo", conteudo: "– José de Alencar" },
    ],
    data: new Date("2022-06-14 14:44:15"),
  },
];
export function App() {
  return (
    <div>
      <Header />
      <div className={Css.Wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                autor={post.autor}
                conteudo={post.conteudo}
                data={post.data}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
