import React, { useState } from 'react';
import './i18n';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t, i18n } = useTranslation();
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <header className="p-4 flex justify-between">
        <h1 className="text-xl font-bold">{t('heroTitle')}</h1>
        <div className="flex gap-2">
          <button onClick={() => i18n.changeLanguage('de')}>DE</button>
          <button onClick={() => i18n.changeLanguage('en')}>EN</button>
          <button onClick={() => setDark(!dark)}>🌓</button>
        </div>
      </header>
      <main className="p-4">
        <section className="text-center">
          <img src="/assets/profile.jpg" alt="Profil" className="w-40 h-40 mx-auto rounded-full mb-4" />
          <h2 className="text-2xl">{t('heroSubtitle')}</h2>
        </section>

        <section id="about">
          <h3 className="mt-6 text-lg font-semibold">{t('aboutTitle')}</h3>
          <p>{t('aboutText')}</p>
        </section>

        <section id="projects">
          <h3 className="mt-6 text-lg font-semibold">{t('projectsTitle')}</h3>
          <ul><li>{t('project1')}</li></ul>
        </section>

        <section id="publications">
          <h3 className="mt-6 text-lg font-semibold">{t('publicationsTitle')}</h3>
          <ul className="list-disc list-inside">
            <li>
              <a href="/pdfs/24-1+11_Rodenwald+Stanimiroudis_186-194.pdf" target="_blank" className="underline">
                {t('publication1')}
              </a>
              <div className="ml-4">
                <a href="https://asien.asienforschung.de/asien-170-171-januar-april-2024/" target="_blank" className="underline">🌐 Online</a> |
                <a href="https://hasp.ub.uni-heidelberg.de/journals/asien/article/view/28385" target="_blank" className="underline"> DOI</a>
              </div>
            </li>
            <li>
              <a href="/pdfs/(eng) ASIEN 2025 - Tourismus China Taiwan englische Version.pdf" target="_blank" className="underline">
                {t('publication2')}
              </a>
            </li>
          </ul>
        </section>

        <section id="contact">
          <h3 className="mt-6 text-lg font-semibold">{t('contactTitle')}</h3>
          <p>{t('contactEmail')}</p>
        </section>
      </main>
    </div>
  );
}
