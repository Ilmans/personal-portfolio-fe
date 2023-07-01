type Article = {
  title: string;
  slug: string;
  body: string;
  author: {
    full_name: string;
  };
  category: {
    name: string;
  };
  createdAt: string;
  updatedAt: string;
};
