// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//! Do Not Fetch an API Route from 'getStaticProps' or 'getStaticPaths'
//! instead weite your server-side code directly in them
export default function handler(req, res) {
  res.status(200).json({ text: "Hello" });
}
