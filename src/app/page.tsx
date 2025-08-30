import CustomSelect from "@/components/custom/select";
import Banner from "@/components/web/banner";
import Footer from "@/components/web/footer";
import HowItWorks from "@/components/web/howitworks";
import Property from "@/components/web/property";
import Image from "next/image";

export default function Home() {

  return (
    <div>
      {/* Banner */}
      <Banner />
      {/* Property section */}
      <Property />
      {/* How it works */}
      <HowItWorks />
      {/* Footer */}
      <Footer />
    </div>
  );
}
