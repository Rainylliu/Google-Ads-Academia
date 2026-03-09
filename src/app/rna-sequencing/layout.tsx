import LandingHeader from "@/components/LandingHeader";
import ClientBody from "@/components/ClientBody";
import ChatWidget from "@/components/ChatWidget";

export default function RNASequencingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientBody>
      <LandingHeader />
      <main>{children}</main>
      <ChatWidget />
    </ClientBody>
  );
}
