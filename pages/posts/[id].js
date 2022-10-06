//! 以[]命名的文件，在next.js是动态路由
import Layout from "../../components/layout";
import { getAllpostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

//! Next.js会自动进行代码拆分，因此每个页面值加载该页面所需要的内容
//! react-router?去你妈的
//! 如果需要链接外部链接，用a而不是link
//! 只需要在pages文件夹下创建新的js文件，文件目录会自动变成url路径
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

//Todo: return a list of possible values for 'id'
// ! The array of possible values for id must be the value of the paths key of the returned object. This is exactly what getAllPostIds() returns.
//! fallback: when it is false then any paths not returned by 'getStaticPaths' will result in a 404
//! when it is true the do the changes
export async function getStaticPaths() {
  const paths = getAllpostIds();
  return {
    paths,
    fallback: false,
  };
}
//Todo: pre-rendering, fetch data for the blog post with a given id
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
