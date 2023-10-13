import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export default function Home({ children }: any) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
