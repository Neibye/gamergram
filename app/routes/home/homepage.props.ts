export interface Post {
  id: string;
  mediaUrl: string;
  mediaType: string;
  likes: number;
  description: string;
}

export interface HomepageProps {
  posts: Post[];
}
