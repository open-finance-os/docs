import { useEffect } from "react";

const Carousel = () => {
  useEffect(() => {
    // Preserve query params and hash
    const params = window.location.search; // ?foo=bar
    const hash = window.location.hash;     // #section
    window.location.href = `http://localhost:1411/client/callback${params}${hash}`;
  }, []);

  return (
    <p>
      Redirecting… if you are not redirected automatically,{" "}
      <a href={`http://localhost:1411/client/callback${window.location.search}${window.location.hash}`}>
        click here
      </a>.
    </p>
  );
}

export default Carousel;