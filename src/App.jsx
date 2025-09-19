import React from "react";
import profilePic from "/public/assets/profile.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center p-6">
      <header className="max-w-3xl text-center">
        <img
          src={profilePic}
          alt="Profilbild Alexis Stanimiroudis"
          className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
        />
        <h1 className="text-3xl font-bold">Alexis Stanimiroudis</h1>
        <h2 className="text-lg text-gray-600">
          Qualitätsmanagementbeauftragter (QMB) und Publizist
        </h2>
        <p className="mt-4">
          Alexis Stanimiroudis studierte Rechts- und Regionalwissenschaften mit
          China-Schwerpunkt und arbeitet heute als
          Qualitätsmanagementbeauftragter in Shenzhen sowie freiberuflich als
          Publizist zur chinesischen Digitalwirtschaft.
        </p>
      </header>

      <main className="max-w-3xl mt-8 space-y-12">
        {/* Über mich */}
        <section>
          <h3 className="text-2xl font-semibold mb-2">Über mich</h3>
          <p>
            Alexis Stanimiroudis wurde in Göttingen geboren und studierte
            Rechts- und Regionalwissenschaften (Schwerpunkt China) in Göttingen,
            Berlin und Hangzhou. Während seines Austauschs an der
            Zhejiang-Universität vertiefte er seine Mandarin-Kenntnisse und
            interkulturelle Kompetenzen. Heute arbeitet er als
            Qualitätsmanagementbeauftragter bei der Shenzhen World
            Standardization Certification & Testing Group und publiziert
            freiberuflich zu Themen der chinesischen Digitalwirtschaft,
            regulatorischen Fragestellungen und gesellschaftspolitischen
            Analysen.
          </p>
        </section>

        {/* Publikationen */}
        <section>
          <h3 className="text-2xl font-semibold mb-2">Publikationen</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a
                href="/pdfs/24-1+11_Rodenwald+Stanimiroudis_186-194.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Gemeinsamer Artikel zu Tourismusbeziehungen (ASIEN 170/171, 2024)
              </a>
            </li>
            <li>
              <a
                href="/pdfs/(eng) ASIEN 2025 - Tourismus China Taiwan englische Version.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Tourism Relations between China and Taiwan (ASIEN 2025, englische Version)
              </a>
            </li>
            <li>
              <a
                href="https://asien.asienforschung.de/tourismus-zwischen-taiwan-und-china-bruecke-oder-hindernis-fuer-kulturellen-und-politischen-dialog/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Online-Artikel: Tourismus zwischen Taiwan und China
              </a>
            </li>
            <li>
              <a
                href="https://hasp.ub.uni-heidelberg.de/journals/asien/article/view/28385"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Publikation in ASIEN (Heidelberg University)
              </a>
            </li>
          </ul>
        </section>

        {/* Kontakt */}
        <section>
          <h3 className="text-2xl font-semibold mb-2">Kontakt</h3>
          <ul>
            <li>Email: <a href="mailto:tristani_81@yahoo.de" className="text-blue-600 hover:underline">tristani_81@yahoo.de</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/feed/" target="_blank" className="text-blue-600 hover:underline">LinkedIn-Profil</a></li>
            <li>Instagram: <a href="https://www.instagram.com/al_els/" target="_blank" className="text-blue-600 hover:underline">@al_els</a></li>
            <li>Facebook: <a href="https://www.facebook.com/alexis.stanimiroudis/" target="_blank" className="text-blue-600 hover:underline">Facebook</a></li>
            <li>WeChat: ZZbao00</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
