import React from "react";
import { FileText } from "lucide-react"; // Icon-Bibliothek
import profilePic from "/public/assets/profile.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center p-6">
      {/* Header */}
      <header className="max-w-4xl w-full bg-white rounded-2xl shadow-sm p-6 flex gap-6 items-center">
        <img
          src={profilePic}
          alt="Profilbild Alexis Stanimiroudis"
          className="w-28 h-28 rounded-full object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold">Alexis Stanimiroudis</h1>
          <h2 className="text-lg text-gray-600">
            Qualitätsmanagementbeauftragter (QMB) und Publizist
          </h2>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            Studierte Rechts- und Regionalwissenschaften mit China-Schwerpunkt.
            Heute Qualitätsmanagementbeauftragter in Shenzhen und freiberuflicher Publizist
            zur chinesischen Wirtschaft.
          </p>
        </div>
      </header>

      <main className="max-w-4xl w-full mt-8 space-y-8">
        {/* Über mich */}
        <section className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-2xl font-semibold mb-3">Über mich</h3>
          <p className="leading-relaxed text-gray-700">
            Geboren in Göttingen, Studium in Göttingen, Berlin und Hangzhou.
            Vertiefte Mandarin und interkulturelle Kompetenzen an der
            Zhejiang-Universität. Heute tätig als QMB in Shenzhen und als Publizist mit
            Schwerpunkt chinesische Digitalwirtschaft, Regulierung und Politik.
          </p>
        </section>

        {/* Publikationen */}
        <section className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-2xl font-semibold mb-6">Publikationen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Karte 1 */}
            <a
              href="/pdfs/24-1+11_Rodenwald+Stanimiroudis_186-194.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-50 hover:bg-gray-100 rounded-xl p-4 shadow-sm transition"
            >
              <div className="flex items-center gap-3">
                <FileText size={22} className="text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Tourismusbeziehungen China–Taiwan
                  </h4>
                  <p className="text-sm text-gray-600">ASIEN 170/171, 2024</p>
                </div>
              </div>
            </a>

            {/* Karte 2 */}
            <a
              href="/pdfs/(eng) ASIEN 2025 - Tourismus China Taiwan englische Version.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-50 hover:bg-gray-100 rounded-xl p-4 shadow-sm transition"
            >
              <div className="flex items-center gap-3">
                <FileText size={22} className="text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Tourism Relations China–Taiwan
                  </h4>
                  <p className="text-sm text-gray-600">
                    ASIEN 2025 (englische Version)
                  </p>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Kontakt */}
        <section className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-2xl font-semibold mb-3">Kontakt</h3>
          <ul className="space-y-1 text-gray-700">
            <li>
              Email:{" "}
              <a
                href="mailto:tristani_81@yahoo.de"
                className="text-blue-600 hover:underline"
              >
                tristani_81@yahoo.de
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                LinkedIn-Profil
              </a>
            </li>
            <li>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/al_els/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                @al_els
              </a>
            </li>
            <li>
              Facebook:{" "}
              <a
                href="https://www.facebook.com/alexis.stanimiroudis/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>WeChat: ZZbao00</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
