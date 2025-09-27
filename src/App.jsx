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
      <section className="min-h-screen bg-gradient-to-b from-blue-600 to-indigo-700 text-white flex flex-col items-center justify-center text-center px-6">
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
        <h1 className="mt-6 text-5xl font-bold">Alexis Stanimiroudis</h1>
        <h2 className="mt-2 text-xl text-blue-100">
          Qualitätsmanagementbeauftragter (QMB) & Publizist
        </h2>
        <p className="mt-4 max-w-xl text-blue-50 leading-relaxed">
          Spezialisiert auf chinesische Digitalwirtschaft, Regulierung und
          gesellschaftspolitische Analysen.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#about"
            className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-50 transition"
          >
            Über mich
          </a>
          <a
            href="#publikationen"
            className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-400 transition"
          >
            Publikationen
          </a>
        </div>
      </section>

      {/* Über mich */}
      <section id="about" className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Über mich</h3>
          <p className="leading-relaxed text-gray-700">
            Geboren in Göttingen, Studium in Göttingen, Berlin und Hangzhou.
            Vertiefte Mandarin und interkulturelle Kompetenzen an der
            Zhejiang-Universität. Heute tätig als QMB in Shenzhen und als
            Publizist mit Schwerpunkt chinesische Digitalwirtschaft,
            Regulierung und Politik.
          </p>
        </div>
      </section>

      {/* Publikationen */}
      <section id="publikationen" className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-10">
            Publikationen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Publikation 1 */}
            <a
              href="/pdfs/Asien_Aktuell.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 p-6"
            >
              <div className="flex items-start gap-4">
                <FileText className="text-blue-600" size={36} />
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
                <FileText className="text-blue-600" size={36} />
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
        </div>
      </section>

      {/* Kontakt */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-8">Kontakt</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="mailto:tristani_81@yahoo.de"
              className="flex items-center gap-2 hover:text-blue-400"
            >
              <Mail size={22} /> Email
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              className="flex items-center gap-2 hover:text-blue-400"
            >
              <Linkedin size={22} /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/al_els/"
              target="_blank"
              className="flex items-center gap-2 hover:text-blue-400"
            >
              <Instagram size={22} /> Instagram
            </a>
            <a
              href="https://www.facebook.com/alexis.stanimiroudis/"
              target="_blank"
              className="flex items-center gap-2 hover:text-blue-400"
            >
              <Facebook size={22} /> Facebook
            </a>
            <div className="flex items-center gap-2">
              <MessageCircle size={22} /> WeChat: ZZbao00
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
