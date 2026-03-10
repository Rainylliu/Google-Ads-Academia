import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ClientBody from "@/components/ClientBody";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientBody>
      <Header />
      <main>{children}</main>
      <Footer />
      <ChatWidget />
    </ClientBody>
  );
}
