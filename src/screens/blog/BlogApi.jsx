import { nodeUrl } from "@/constants/constants";
import BlogContent from "./BlogContent";

const fetcher = (id) =>
  fetch(`${nodeUrl}//blog/${id}`).then((res) => res.json());
const BlogApi = async ({ id }) => {
  const data = await fetcher(id);

  return <BlogContent blogDatas={data.data} />;
};

export default BlogApi;
