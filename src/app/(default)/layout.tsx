import LandingHeader from "@/components/LandingHeader";
import RNAFooter from "@/components/RNAFooter";
import ChatWidget from "@/components/ChatWidget";
import ClientBody from "@/components/ClientBody";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientBody>
      <LandingHeader />
      <main>{children}</main>
      <ChatWidget />
      <RNAFooter />
    </ClientBody>
  );
}
