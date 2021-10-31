import { buildImageUrl } from "cloudinary-build-url";
import Card from "../components/Card"

const pic1 = buildImageUrl("kybervystava_Dani/1_igx6br", { cloud: { cloudName: "jandelmar" } });
const pic2 = buildImageUrl("kybervystava_Dani/2_kyrnb2", { cloud: { cloudName: "jandelmar" } });
const pic3 = buildImageUrl("kybervystava_Dani/3_pgn69r", { cloud: { cloudName: "jandelmar" } });
const pic4 = buildImageUrl("kybervystava_Dani/4_legnfq", { cloud: { cloudName: "jandelmar" } });
const pic5 = buildImageUrl("kybervystava_Dani/5_iwqve1", { cloud: { cloudName: "jandelmar" } });
const pic6 = buildImageUrl("kybervystava_Dani/6_lflpvz", { cloud: { cloudName: "jandelmar" } });

export default function Gallery() {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <Card front={pic1} back={pic4} title="title 1" />
          <Card front={pic2} back={pic5} title="title 2"/>
          <Card front={pic3} back={pic6} title="title 3"/>
          <Card front={pic4} back={pic3} title="title 4"/>
          <Card front={pic5} back={pic2} title="title 5"/>
        </div>
        <div className="row">
          <Card front={pic3} back={pic5} title="title 6"/>
          <Card front={pic2} back={pic6} title="title 7"/>
          <Card front={pic4} back={pic1} title="title 8"/>
          <Card front={pic5} back={pic2} title="title 9"/>
          <Card front={pic6} back={pic3} title="title 10"/>
        </div>
        <div className="row">
          <Card front={pic1} back={pic4} title="title 11"/>
          <Card front={pic2} back={pic5} title="title 12"/>
          <Card front={pic3} back={pic6} title="title 13"/>
          <Card front={pic4} back={pic3} title="title 14"/>
          <Card front={pic5} back={pic2} title="title 15"/>
        </div>
      </div>
    </main>
  );
}
