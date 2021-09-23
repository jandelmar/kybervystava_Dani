import Card from '../components/Card'
import pic1 from '../public/img/1.jpg'
import pic2 from '../public/img/2.jpg'
import pic3 from '../public/img/3.jpg'
import pic4 from '../public/img/4.jpg'
import pic5 from '../public/img/5.jpg'
import pic6 from '../public/img/6.jpg'

export default function Gallery() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <Card front={pic1} back={pic4} />
          <Card front={pic2} back={pic5} />
          <Card front={pic3} back={pic6} />
        </div>
        <div className="row">
          <Card front={pic4} back={pic1} />
          <Card front={pic5} back={pic2} />
          <Card front={pic6} back={pic3} />
        </div>
      </div>
    </main>
  );
}
