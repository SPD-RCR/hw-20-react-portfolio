import React from 'react';

function Footer({}) {
  return (
    <footer class="text-center text-white" style="background-color: #f1f1f1;">
      <div class="container pt-4">
        <section class="mb-4">
          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.linkedin.com/in/robert-george-0186a213/"
            role="button"
            data-mdb-ripple-color="dark"
            ><i class="fab fa-linkedin"></i
          ></a>
          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com/SPD-RCR"
            role="button"
            data-mdb-ripple-color="dark"
            ><i class="fab fa-github"></i
          ></a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
