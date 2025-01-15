import PostForm from "@/components/post-form";
import { createPost } from "@/lib/actions";

export default function NewPostPage() {
  return <PostForm action={createPost} />;
}
