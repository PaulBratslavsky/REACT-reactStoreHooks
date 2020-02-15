import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>I can see that you are lost.</h1>
        <Link to="/" className="btn btn-primary">
          Take Me Home
        </Link>
      </div>
    </section>
  );
}
