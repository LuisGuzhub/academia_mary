import { ArrowRight } from "lucide-react";

export default function BlogCard({ post, index }) {
  return (
    <article className="blog-card">
      <div className="blog-card-top">
        <span className="eyebrow">{post.category}</span>
        <span className="article-number">0{index + 1}</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <details>
        <summary>
          Leer artículo <ArrowRight size={17} />
        </summary>
        <div className="article-text">
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </details>
    </article>
  );
}
