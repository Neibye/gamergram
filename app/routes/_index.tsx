import type { V2_MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";
import { Post } from "./home/homepage.props";
import HomepageTemplate from "./home/homepage.template";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [followedUsers, setFollowedUsers] = useState<string[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:8080/posts");
      const data: Post[] = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchFollowedUsers = async () => {
      const response = await fetch("http://localhost:8080/followedUsers");
      const data: string[] = await response.json();
      setFollowedUsers(data);
    };
    fetchFollowedUsers();
  }, []);

  return <HomepageTemplate posts={posts} />;
}
