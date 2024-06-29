import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="h-20 bg-black/85 p-2">
      <section>
        <div>
          <h1 className="text-white/50 font-semibold text-sm">Novel Creep</h1>
        </div>
        <div>
          <h2></h2>
          <h2></h2>
          <h2></h2>
        </div>
        <p className="text-white/50 font-normal text-sm">
          The best website for novels
        </p>
      </section>
    </footer>
  );
};

export default Footer;
