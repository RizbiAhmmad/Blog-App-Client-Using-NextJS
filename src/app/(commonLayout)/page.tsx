import BlogCard from "@/components/modules/homepage/BlogCard";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";
// import { userService } from "@/services/user.service";

export default async function Home() {
  // const { data } = await userService.getSession();
  // console.log(data);

  const { data } = await blogService.getBlogPosts(
    {
      isFeatured: false,
      // search:""
    },
    {
      cache: "no-store",
      // revalidate:10
    },
  );
  console.log(data);

  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-5">
      {data?.data?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
