import type { FC } from 'react';

export const Home: FC = () => {
  return (
    <div>
      {/* <Image src="" alt="hero" width={1920} height={1080} /> */}
      <img src="https://picsum.photos/1920/500" alt="hero" />
      <h1>Life again for again.</h1>

      <section>
        <h2>Nomad Teacher</h2>
      </section>
      <section>
        <h2>Web Engineer</h2>
      </section>
      <section>
        <h2>Mathematic Teacher（数学の先生）</h2>
      </section>
    </div>
  );
};
