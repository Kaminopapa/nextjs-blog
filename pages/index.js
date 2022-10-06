import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Alert from "../components/Alert";
import { useState } from "react";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  const [type, setType] = useState("success");
  return (
    // ! 这个Home props会传递给Layout ，是个boolean.根据这个值更改照片的大小
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>这玩意让我感觉，之前学的Reat废了</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <Alert type={type}>
        <button
          onClick={() =>
            type === "success" ? setType("error") : setType("success")
          }
        >
          alert
        </button>
      </Alert>
      {/* this is scoped style in js, make it global add global between style and jsx */}
      <style jsx>
        {`
          button {
            border-radius: 60px;
            border: 1px solid white;
            background: rgba(255, 255, 255, 0.7);
            box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
          }
          button:hover {
            background: lightpink;
            color: white;
          }
        `}
      </style>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData &&
            allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  );
}

//! 这里会执行预加载，这里会告诉页面说：这个页面有数据依赖，当你要执行预加载的时候记得解决这个问题先
//!在开发过程中这个函数会在每次请求的时候执行，但是上线后只在build time的时候执行
//! this function can only be exported from a page
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
