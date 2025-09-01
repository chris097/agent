import Banner from "@/components/web/banner";
import Footer from "@/components/web/footer";
import HowItWorks from "@/components/web/howitworks";
import Property from "@/components/web/property";
import Image from "next/image";
import videoclip from '../../public/images/video_clip.png';
import PlayIcon from "../../public/svgs/playIcon";
import PropertyClip from "@/components/web/propertyclip";

export default function Home() {

  return (
    <div className="overflow-x-hidden">
      {/* Banner */}
      <Banner />
      {/* Property section */}
      <Property />
      {/* How it works */}
      <HowItWorks />
      {/* Property video clip */}
      <PropertyClip />
      {/* Footer */}
      <Footer />
    </div>
  );
}
