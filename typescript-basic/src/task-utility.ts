type Post = {
 id: number;          // id
 title: string;       // タイトル
 body: string;        // 本文
 published: boolean;  // 公開済みかどうか
};

type Edit = Partial<Post>;

type PostPreview = Pick<Post, 'id' | 'title'>;

type Postreadonly = Readonly<Post>;