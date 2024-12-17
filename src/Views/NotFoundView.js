import { Link } from "react-router-dom";
export default function NotFoundView() {
  return (
    <div class="text-center">
      404 Not Found
      <br />
      <Link to="/">Go Home</Link>
    </div>
  );
}
