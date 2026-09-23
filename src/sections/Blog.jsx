import { site } from "../data/site";
import { blogPosts } from "../data/blogPosts";
import BlogCard from "../components/BlogCard";

export default function Blog() {
  return (
    <section id="blog" className="section container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">IDEAS PARA SEGUIR CRECIENDO</p>
          <h1 className="section-title">
            Un poco de inspiración para tu camino
          </h1>
        </div>
        <span className="section-note">El blog de {site.brandName}</span>
      </div>
      <div className="three-column">
        {blogPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </section>
  );
}
