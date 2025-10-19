import React, { useState } from "react";
import { Mail, Linkedin, Instagram, Facebook, MessageCircle, FileText, Download, Languages } from "lucide-react";
import profilePic from "./assets/profile.jpg";

export default function App() {
  const [language, setLanguage] = useState('de'); // 'de', 'en' oder 'zh'

  const content = {
    de: {
      title: "Alexis Stanimiroudis",
      subtitle: "Regionalwissenschaftler & Publizist",
      description: "Studierte Rechts- und Regionalwissenschaften mit China-Schwerpunkt in Göttingen, Berlin und Hangzhou. Zurzeit wohnhaft in Berlin.",
      about: "Über mich",
      aboutText: "Geboren in Göttingen, Studium in Göttingen, Berlin und Hangzhou. Vertiefte Mandarin und interkulturelle Kompetenzen an der Zhejiang-Universität. Heute tätig als Publizist mit Schwerpunkt chinesische Polit-Ökonomie und Kultur.",
      cv: "Lebenslauf",
      cvView: "Lebenslauf ansehen",
      cvDownload: "Lebenslauf herunterladen",
      cvNote: "Der Lebenslauf wird in einem neuen Tab geöffnet oder direkt heruntergeladen.",
      publications: "Publikationen",
      publication1: "Tourismusbeziehungen China–Taiwan",
      publication1Sub: "ASIEN Aktuell",
      publication2: "Tourism Relations China–Taiwan",
      publication2Sub: "CrossAsia (englische Version)",
      contact: "Kontakt",
      email: "Email",
      wechat: "WeChat: ZZbao00"
    },
    en: {
      title: "Alexis Stanimiroudis",
      subtitle: "Regional Scientist & Publicist",
      description: "Studied law and regional sciences with a China focus in Göttingen, Berlin, and Hangzhou. Currently residing in Berlin.",
      about: "About Me",
      aboutText: "Born in Göttingen, studied in Göttingen, Berlin, and Hangzhou. Enhanced Mandarin and intercultural competencies at Zhejiang University. Currently working as a publicist with a focus on Chinese political economy and culture.",
      cv: "Curriculum Vitae",
      cvView: "View CV",
      cvDownload: "Download CV",
      cvNote: "The CV will open in a new tab or download directly.",
      publications: "Publications",
      publication1: "Tourism Relations China–Taiwan",
      publication1Sub: "ASIEN Aktuell (German)",
      publication2: "Tourism Relations China–Taiwan",
      publication2Sub: "CrossAsia (English Version)",
      contact: "Contact",
      email: "Email",
      wechat: "WeChat: ZZbao00"
    },
    zh: {
      title: "Alexis Stanimiroudis",
      subtitle: "区域科学家 & 出版人",
      description: "在哥廷根、柏林和杭州学习法律和区域科学，主攻中国研究。目前居住在柏林。",
      about: "关于我",
      aboutText: "出生于哥廷根，在哥廷根、柏林和杭州学习。在浙江大学提升了普通话和跨文化能力。目前担任专注于中国政治经济和文化的出版人。",
      cv: "简历",
      cvView: "查看简历",
      cvDownload: "下载简历",
      cvNote: "简历将在新标签页中打开或直接下载。",
      publications: "出版物",
      publication1: "中国-台湾旅游关系",
      publication1Sub: "ASIEN Aktuell (德语)",
      publication2: "Tourism Relations China–Taiwan",
      publication2Sub: "CrossAsia (英文版)",
      contact: "联系方式",
      email: "电子邮件",
      wechat: "微信: ZZbao00"
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Language Switcher */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-end">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setLanguage('de')}
              className={`px-3 py-1 rounded-md transition ${
                language === 'de' 
                  ? 'bg-blue-600 text-white shadow' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              DE
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-md transition ${
                language === 'en' 
                  ? 'bg-blue-600 text-white shadow' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('zh')}
              className={`px-3 py-1 rounded-md transition ${
                language === 'zh' 
                  ? 'bg-blue-600 text-white shadow' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              中文
            </button>
            <Languages size={16} className="text-gray-400 mx-1" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src={profilePic}
              alt={`Profile picture ${t.title}`}
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
            <h1 className="text-4xl font-bold">{t.title}</h1>
            <h2 className="text-lg text-blue-600 mt-2">
              {t.subtitle}
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {t.description}
            </p>
            {/* CV Download Button in Header */}
            <div className="mt-6">
              <a
                href="/assets/lebenslauf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md"
              >
                <Download size={20} />
                {language === 'de' ? 'Lebenslauf (PDF)' : 
                 language === 'en' ? 'Curriculum Vitae (PDF)' : '简历 (PDF)'}
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* CV Section */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-6">{t.cv}</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/assets/lebenslauf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition shadow-md"
            >
              <FileText size={20} />
              {t.cvView}
            </a>
            <a
              href="/assets/lebenslauf.pdf"
              download={
                language === 'de' ? "Lebenslauf_Alexis_Stanimiroudis.pdf" : 
                language === 'en' ? "CV_Alexis_Stanimiroudis.pdf" : 
                "简历_Alexis_Stanimiroudis.pdf"
              }
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md"
            >
              <Download size={20} />
              {t.cvDownload}
            </a>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            {t.cvNote}
          </p>
        </section>

        {/* About Me */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-4">{t.about}</h3>
          <p className="leading-relaxed text-gray-700">
            {t.aboutText}
          </p>
        </section>

        {/* Publications */}
        <section>
          <h3 className="text-2xl font-semibold mb-6">{t.publications}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Publication 1 */}
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
                    {t.publication1}
                  </h4>
                  <p className="text-sm text-gray-600">{t.publication1Sub}</p>
                </div>
              </div>
            </a>

            {/* Publication 2 */}
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
                    {t.publication2}
                  </h4>
                  <p className="text-sm text-gray-600">{t.publication2Sub}</p>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-6">{t.contact}</h3>
          <div className="flex flex-wrap gap-6 text-gray-700">
            <a href="mailto:tristani_81@yahoo.de" className="flex items-center gap-2 hover:text-blue-600">
              <Mail size={20} /> {t.email}
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
              <MessageCircle size={20} /> {t.wechat}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
