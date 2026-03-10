import LandingHeader from "@/components/LandingHeader";
import RNAFooter from "@/components/RNAFooter";
import ClientBody from "@/components/ClientBody";

export default function RNASequencingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientBody>
      <LandingHeader />
      <main>{children}</main>
      <RNAFooter />
    </ClientBody>
  );
}
