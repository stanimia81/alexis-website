import React from "react";
import { Mail, Linkedin, Instagram, Facebook, MessageCircle, FileText } from "lucide-react";
import profilePic from "./assets/profile.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src={profilePic}
              alt="Profilbild Alexis Stanimiroudis"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block"
              }}
            />
          </div>
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold">Alexis Stanimiroudis</h1>
            <h2 className="text-lg text-blue-600 mt-2">
              Qualitätsmanagementbeauftragter (QMB) & Publizist
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Studierte Rechts- und Regionalwissenschaften mit China-Schwerpunkt in Göttingen,
              Berlin und Hangzhou. Heute QMB in Shenzhen und Publizist zur chinesischen
              Digitalwirtschaft, Regulierung und Politik.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Über mich */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-4">Über mich</h3>
          <p className="leading-relaxed text-gray-700">
            Geboren in Göttingen, Studium in Göttingen, Berlin und Hangzhou.
            Vertiefte Mandarin und interkulturelle Kompetenzen an der Zhejiang-Universität.
            Heute tätig als QMB in Shenzhen und als Publizist mit Schwerpunkt
            chinesische Digitalwirtschaft, Regulierung und Politik.
          </p>
        </section>

        {/* Publikationen */}
        <section>
          <h3 className="text-2xl font-semibold mb-6">Publikationen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Publikation 1 */}
            <a
              href="/pdfs/Asien_Aktuell.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl shadow p-6 hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <FileText className="text-blue-600" size={28} />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Tourismusbeziehungen China–Taiwan
                  </h4>
                  <p className="text-sm text-gray-600">ASIEN Aktuell</p>
                </div>
              </div>
            </a>

            {/* Publikation 2 */}
            <a
              href="/pdfs/CrossAsia.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl shadow p-6 hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <FileText className="text-blue-600" size={28} />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Tourism Relations China–Taiwan
                  </h4>
                  <p className="text-sm text-gray-600">CrossAsia (englische Version)</p>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Kontakt */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-6">Kontakt</h3>
          <div className="flex flex-wrap gap-6 text-gray-700">
            <a href="mailto:tristani_81@yahoo.de" className="flex items-center gap-2 hover:text-blue-600">
              <Mail size={20} /> Email
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank" className="flex items-center gap-2 hover:text-blue-600">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://www.instagram.com/al_els/" target="_blank" className="flex items-center gap-2 hover:text-blue-600">
              <Instagram size={20} /> Instagram
            </a>
            <a href="https://www.facebook.com/alexis.stanimiroudis/" target="_blank" className="flex items-center gap-2 hover:text-blue-600">
              <Facebook size={20} /> Facebook
            </a>
            <div className="flex items-center gap-2">
              <MessageCircle size={20} /> WeChat: ZZbao00
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
