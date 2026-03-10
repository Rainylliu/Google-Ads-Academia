import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - biostate.AI",
  description:
    "Learn how Biostate AI collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <h1>Privacy Policy</h1>
      <p className="legal-effective">Effective Date: January 1, 2025</p>

      <h2>1. Introduction</h2>
      <p>
        Biostate AI is committed to protecting your privacy. This Privacy Policy
        outlines how we collect, use, disclose, and safeguard personal
        information when you interact with us through our website, social media
        platforms, forms, or other digital and offline channels.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          <strong>Personal Information:</strong> Name, email address, phone
          number, job title, and organization.
        </li>
        <li>
          <strong>Professional Information:</strong> Research interests, industry
          affiliation, and engagement with our content.
        </li>
        <li>
          <strong>Technical Data:</strong> IP address, browser type, device
          details, and interaction data from our digital platforms.
        </li>
        <li>
          <strong>Communication Data:</strong> Correspondence, inquiries, and
          feedback provided to us.
        </li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use collected information for the following purposes:</p>
      <ul>
        <li>
          Providing insights and updates on total RNA sequencing and related
          services.
        </li>
        <li>
          Engaging with researchers, medical professionals, and industry
          experts.
        </li>
        <li>
          Improving our content, user experience, and outreach strategies.
        </li>
        <li>
          Responding to inquiries, requests, and collaboration opportunities.
        </li>
        <li>Complying with legal and regulatory requirements.</li>
      </ul>

      <h3>Lead Collection and Consent</h3>
      <p>
        When you provide your information through forms, we will clearly specify
        how your data will be used. You will have the option to provide explicit
        consent for each use case via disclosure checkboxes on our forms. These
        checkboxes ensure that we collect and use your data only for the
        purposes you have agreed to.
      </p>
      <p>
        If you wish to modify your consent preferences after submission, you can
        contact us at{" "}
        <a href="mailto:contact@biostate.ai">contact@biostate.ai</a>.
      </p>

      <h2>4. Information Sharing</h2>
      <p>
        We do not sell or rent personal information. However, we may share it
        with:
      </p>
      <ul>
        <li>
          <strong>Service Providers:</strong> Third-party vendors supporting our
          operations, analytics, and communications.
        </li>
        <li>
          <strong>Legal Authorities:</strong> When required by law or to protect
          our rights and interests.
        </li>
      </ul>

      <h2>5. Data Security</h2>
      <p>
        We implement strict security measures to protect your data. However, no
        system is entirely secure, and we advise users to exercise caution when
        sharing personal information online.
      </p>

      <h2>6. Your Rights</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul>
        <li>Access and review your personal data.</li>
        <li>Request corrections or deletion of inaccurate data.</li>
        <li>Withdraw consent for certain data uses.</li>
      </ul>
      <p>
        To exercise these rights, contact us at{" "}
        <a href="mailto:partnerships@biostate.ai">partnerships@biostate.ai</a>.
      </p>

      <h2>7. Third-Party Links</h2>
      <p>
        Our digital platforms may contain links to external websites. We are not
        responsible for their privacy practices and recommend reviewing their
        policies before sharing personal data.
      </p>

      <h2>8. Updates to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Any changes will be
        posted on our official platforms.
      </p>

      <h2>9. Contact Us</h2>
      <p>For any privacy-related inquiries, please contact:</p>
      <address className="legal-address">
        <strong>Biostate AI</strong>
        <br />
        7505 Fannin St., Suite 610
        <br />
        Houston, TX 77054
        <br />
        <a href="mailto:partnerships@biostate.ai">partnerships@biostate.ai</a>
        <br />
        +1 713-489-9827
      </address>
    </div>
  );
}
