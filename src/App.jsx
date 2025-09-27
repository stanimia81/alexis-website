import React from "react";
import {
  Mail,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
  FileText,
} from "lucide-react";
import profilePic from "./assets/profile.jpg";

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Profilbild */}
          <div className="flex justify-center md:justify-start">
            <img
              src={profilePic}
              alt="Profilbild Alexis Stanimiroudis"
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
                border: "4px solid white",
              }}
            />
          </div>
          {/* Text */}
          <div>
            <h1 className="text-4xl font-bold mb-2">Alexis Stanimiroudis</h1>
            <h2 className="text-xl font-medium text-blue-100 mb-4">
              Qualitätsmanagementbeauftragter (QMB) & Publizist
            </h2>
            <p className="mb-6 text-blue-50 leading-relaxed">
              Spezialisiert auf chinesische Digitalwirtschaft, Regulierung
              und gesellschaftspolitische Analysen.
            </p>
            <a
              href="#publikationen"
              className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-full shadow hover:bg-blue-50 transition"
            >
              Publikationen ansehen
            </a>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Über mich */}
        <section className="bg-white rounded-2xl shadow p-8">
          <h3 className="text-2xl font-semibold mb-4">Über mich</h3>
          <p className="leading-relaxed text-gray-700">
            Geboren in Göttingen, Studium in Göttingen, Berlin und Hangzhou.
            Vertiefte Mandarin und interkulturelle Kompetenzen an der
            Zhejiang-Universität. Heute tätig als QMB in Shenzhen und als
            Publizist mit Schwerpunkt chinesische Digitalwirtschaft,
            Regulierung und Politik.
          </p>
        </section>

        {/* Publikationen */}
        <section id="publikationen">
          <h3 className="text-2xl font-semibold mb-6">Publikationen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Publikation 1 */}
            <a
              href="/pdfs/Asien_Aktuell.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 p-6"
            >
              <div className="flex items-start gap-4">
                <FileText className="text-blue-600" size={32} />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-1">
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
              className="block bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 p-6"
            >
              <div className="flex items-start gap-4">
                <FileText className="text-blue-600" size={32} />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-1">
                    Tourism Relations China–Taiwan
                  </h4>
                  <p className="text-sm text-gray-600">
                    CrossAsia (englische Version)
                  </p>
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>

      {/* Kontakt */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold mb-6">Kontakt</h3>
          <div className="flex flex-wrap justify-center gap-6 text-gray-700">
            <a
              href="mailto:tristani_81@yahoo.de"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <Mail size={20} /> Email
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/al_els/"
              target="_blank"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <Instagram size={20} /> Instagram
            </a>
            <a
              href="https://www.facebook.com/alexis.stanimiroudis/"
              target="_blank"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <Facebook size={20} /> Facebook
            </a>
            <div className="flex items-center gap-2">
              <MessageCircle size={20} /> WeChat: ZZbao00
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}



