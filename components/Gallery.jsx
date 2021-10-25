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
          <Card front={pic1} back={pic4} />
          <Card front={pic2} back={pic5} />
          <Card front={pic3} back={pic6} />
          <Card front={pic4} back={pic3} />
          <Card front={pic5} back={pic2} />
        </div>
        <div className="row">
          <Card front={pic3} back={pic5} />
          <Card front={pic2} back={pic6} />
          <Card front={pic4} back={pic1} />
          <Card front={pic5} back={pic2} />
          <Card front={pic6} back={pic3} />
        </div>
        <div className="row">
          <Card front={pic1} back={pic4} />
          <Card front={pic2} back={pic5} />
          <Card front={pic3} back={pic6} />
          <Card front={pic4} back={pic3} />
          <Card front={pic5} back={pic2} />
        </div>
      </div>
    </main>
  );
}
