import { Link } from "react-router-dom";
import { useTitle } from "../components/useTitle";

export default function NotFound() {
  useTitle("Page not found");
  return (
    <section className="section-y">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1 className="display mt-8">This page <span className="text-primary">moved.</span></h1>
        <div className="mt-16 max-w-md border-t">
          <Link to="/" className="row-link group">Home</Link>
          <Link to="/work" className="row-link group">Work</Link>
        </div>
      </div>
    </section>
  );
}
