import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-movie-primary">
      <Header />
      <div className="flex flex-col items-center justify-center"></div>
      <Footer />
    </div>
  );
}
