import * as React from "react";

import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";

export async function getServerSideProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "posts?populate=*");
  const posts = await res.json();
  console.log(posts);

  return {
    props: { posts },
  };
}

export default function HomePage({ posts }: any) {
  console.log(posts);

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo templateTitle="Home Page" />

      <main>
        home page
        <div>
          {posts.data.map((post: any) => {
            return (
              <div className="container mx-auto" key={post.id}>
                <ul>
                  <li>
                    <h2>{post.attributes.title}</h2>
                    <span>{post.attributes.content}</span>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}
