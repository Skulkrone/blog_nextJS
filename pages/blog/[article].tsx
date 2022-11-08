import React from "react";

export default function article(props: any) {
  // console.log(props);

  return (
    <div className="container px-4 pt-5">
      <h1 className="text-center mb-4 text-capitalize">
        {props.article.title}
      </h1>
      <p className="text-center">{props.article.body}</p>
    </div>
  );
}

export async function getStaticProps(context: any) {
  const id = context.params.article;

  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const article = await data.json();

  if (!article) {
    return {
      NotFound: true,
    };
  }

  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles = await data.json();

  const paths = articles.map((item: any) => ({
    params: { article: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
