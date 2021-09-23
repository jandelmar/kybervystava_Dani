import Card from '../components/Card'

const images = [
  "https://images.unsplash.com/photo-1632134346410-fb65b96d6595?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1631992781019-d21eace7d3cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1631995191030-1e3c9bb9e528?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1463681457836-cc9f3f99608b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1576679833928-f6c778b4a864?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1631478409245-d8f0e2c7d680?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
]

export default function Gallery() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <Card front={images[0]} back={images[3]} />
          <Card front={images[1]} back={images[4]} />
          <Card front={images[2]} back={images[5]} />
        </div>
        <div className="row">
          <Card front={images[3]} back={images[0]} />
          <Card front={images[4]} back={images[1]} />
          <Card front={images[5]} back={images[2]} />
        </div>
      </div>
    </main>
  );
}
