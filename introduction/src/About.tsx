const About = () => {
  return (
    <div style={{ padding: '2rem', lineHeight: '1.6' }}>
      <h1>Dokumentáció & Projekt Info</h1>
      <section>
        <h2>A projektről</h2>
        <p>Ez egy modern React alkalmazás, amely a gyorsaságra és a típusbiztonságra épül.</p>
      </section>
      
      <section>
        <h2>Technológiai Stack</h2>
        <ul>
          <li><strong>Framework:</strong> React 18 (Vite-tel)</li>
          <li><strong>Nyelv:</strong> TypeScript</li>
          <li><strong>Csomagkezelő:</strong> pnpm</li>
          <li><strong>CI/CD:</strong> GitHub Actions</li>
        </ul>
      </section>

      <section>
        <h2>Build folyamat</h2>
        <p>A projekt minden push esetén átesik egy automatikus tesztelési és fordítási (Build) fázison.</p>
      </section>
    </div>
  );
};

export default About;
