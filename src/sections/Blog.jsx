import { blogPosts } from "../data/blogPosts";
import BlogCard from "../components/BlogCard";

export default function Blog() {
  return (
    <section id="blog" className="section container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">IDEAS PARA SEGUIR CRECIENDO</p>
          <h2>Un poco de inspiración para tu camino</h2>
        </div>
        <span className="section-note">El blog de CGL</span>
      </div>
      <div className="three-column">
        {blogPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </section>
  );
}
