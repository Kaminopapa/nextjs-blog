import "../styles/globals.css";

//!只能在这里导入全局全局样式
//!这个和是顶级组件
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
