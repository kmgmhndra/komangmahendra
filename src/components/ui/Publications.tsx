import React, { useState } from 'react';
import { Calendar, ExternalLink, Tag, Search, Filter } from 'lucide-react';

interface Publication {
  id: number;
  title: string;
  abstract: string;
  journal: string;
  date: string;
  tags: string[];
  url: string;
  impact: string;
  status: 'published' | 'in-press' | 'submitted';
}

const PublicationsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  // Sample data - ganti dengan data publikasi Anda
  const publications: Publication[] = [
    {
      id: 1,
      title: "Optimizing Learning Materials With DeepSeek Transformer In diEvaluasi System",
      abstract: "Most digital learning media presented learning materials uniformly, ignoring individual student needs and learning profiles. This study aimed to develop and evaluate diEvaluasi, an adaptive learning system based on the DeepSeek Transformer model. The system adapted content delivery using student profiles derived from pre-test scores, interaction history, and cognitive patterns. A quasi-experimental method was applied to 60 eleventh-grade high school students divided into experimental and control groups. The DeepSeek model was fine-tuned using ICT learning materials and student interaction data. The results showed a 40.2% improvement in post-test scores in the experimental group, compared to 20.4% in the control group. Students in the experimental group also recorded longer learning times and higher repetition rates. These findings indicated that the diEvaluasi system effectively improved academic performance and engagement through personalized material sequencing. The system provided a practical approach to implementing AI-powered adaptive learning in secondary education, especially in ICT contexts.",
      journal: "SINTECH (Science and Information Technology) Journal",
      date: "2025-08-31",
      tags: ["Adaptive Learning", "DeepSeek Transformer", "Personalized Education", "ICT", "Educational Technology"],
      url: "https://ejournal.instiki.ac.id/index.php/sintechjournal/article/view/1903",
      impact: "Sinta 3",
      status: "published"
    },
    {
      id: 2,
      title: "Rekayasa Sistem Informasi DiEvaluasi berbasis Model Waterfall: Eksperimen Keandalan Black-Box dan Optimalisasi UX melalui UEQ",
      abstract: "Kebutuhan akan sistem tryout yang adaptif dan berbasis data semakin meningkat seiring dengan berkembangnya kompetisi dalam dunia pendidikan dan ketenagakerjaan. Penelitian ini merancang dan membangun diEvaluasi, sebuah sistem informasi berbasis web yang berfungsi sebagai platform tryout daring dengan pendekatan evaluatif yang komprehensif. Pengembangan sistem dilakukan menggunakan metode Waterfall, dimulai dari analisis kebutuhan, desain sistem, implementasi, pengujian, hingga pemeliharaan. Fitur utama yang disediakan mencakup registrasi pengguna, pemilihan dan pembelian paket tryout, pengerjaan soal berbasis waktu, penilaian otomatis, serta pelaporan hasil dan progres peserta. Sistem juga dilengkapi dengan fitur manajemen soal dan validasi oleh admin serta validator. Pengujian sistem dilakukan menggunakan metode black box dan User Experience Questionnaire (UEQ). Hasilnya menunjukkan bahwa seluruh fungsionalitas berjalan sesuai spesifikasi dan sistem mendapatkan tanggapan sangat positif dari pengguna, khususnya pada aspek efisiensi, kemudahan penggunaan, dan daya tarik antarmuka. Dengan pendekatan berbasis sistem informasi yang terstruktur, diEvaluasi mampu menyediakan layanan tryout yang lebih efektif, akurat, dan responsif terhadap kebutuhan peserta. Sistem ini berpotensi menjadi solusi digital dalam penyelenggaraan simulasi ujian berbasis analisis performa yang real-time dan terukur.",
      journal: "KARMAPATI (Kumpulan Artikel Mahasiswa Pendidikan Teknik Informatika)",
      date: "2025-07-01",
      tags: ["Tryout Platform", "UX-Optimized", "Waterfall Method", "Black-Box Testing", "User Experience Questionnaire"],
      url: "https://ejournal.undiksha.ac.id/index.php/KP/article/view/99344",
      impact: "Sinta 4",
      status: "published"
    },
    {
      id: 3,
      title: "REKOMENDASI PEMILIHAN WISATA KULINER KHAS BALI DENGAN METODE ARAS",
      abstract: "Penelitian ini membahas penerapan metode Additive Ratio Assessment (ARAS) dalam merekomendasikan tempat kuliner khas Bali. Dengan pesatnya perkembangan industri pariwisata di Bali, wisatawan sering mengalami kesulitan dalam memilih tempat kuliner yang sesuai dengan preferensi mereka, sehingga diperlukan pendekatan yang objektif dan akurat. Penelitian ini bertujuan untuk mengevaluasi efektivitas metode ARAS dalam proses pemilihan tempat kuliner berdasarkan beberapa kriteria yang telah ditentukan. Metode yang digunakan meliputi studi literatur, pengumpulan data, serta analisis menggunakan metode ARAS dengan mempertimbangkan enam kriteria utama, yaitu waktu operasional, harga, fasilitas, suasana, lokasi, dan rating maps. Dari 15 alternatif yang dianalisis, hasil penelitian menunjukkan bahwa wisata kuliner Lesehan Sari Baruna memiliki nilai tertinggi sebesar 0,9139 dan direkomendasikan sebagai pilihan terbaik. Temuan ini membuktikan bahwa metode ARAS dapat secara efektif meranking tempat kuliner khas Bali berdasarkan multi-kriteria, sehingga dapat membantu wisatawan dalam pengambilan keputusan yang lebih efisien. Penerapan metode ARAS di bidang pariwisata kuliner ini diharapkan dapat berkontribusi pada pengembangan penelitian di masa depan dan menjadi referensi dalam penerapan metode pengambilan keputusan multi-kriteria pada sektor lainnya.",
      journal: "JATI (Jurnal Mahasiswa Teknik Informatika)",
      date: "2025-03-31",
      tags: ["Additive Ratio Assessment", "Wisata Kuliner", "Multi-kriteria", "Pengambilan Keputusan"],
      url: "https://ejournal.itn.ac.id/jati/article/view/13232",
      impact: "Sinta 4",
      status: "published"
    },
    {
      id: 4,
      title: "Pengembangan Sistem Informasi Monitoring dan Pengarsipan Administrasi Keuangan Menggunakan Framework Laravel pada BPS Buleleng",
      abstract: "Proses pengarsipan administrasi keuangan di Badan Pusat Statistik (BPS) Buleleng masih dilakukan dengan metode manual, yang menyebabkan kesulitan dalam melakukan monitoring administrasi secara real-time dan berkolaborasi antar pegawai dalam mengelola arsip administrasi keuangan. Oleh karena itu, penelitian ini bertujuan untuk mengembangkan sistem informasi manajemen untuk pengarsipan dan monitoring administrasi keuangan dengan menerapkan pendekatan Agile Development dan framework Laravel. Pendekatan Agile Development dipilih untuk memastikan fleksibilitas dan kolaborasi dalam proses pengembangan, sehingga sistem dapat disesuaikan dengan kebutuhan pengguna. Penggunaan framework Laravel memberikan keuntungan signifikan, seperti kemudahan dalam pengelolaan basis data, autentikasi pengguna, dan interaksi basis data yang efisien melalui fitur Object-Relational Mapping (ORM), serta arsitektur Model-View-Controller (MVC) yang memisahkan tampilan, logika bisnis, dan pengolahan data. Pengujian dengan metode Black Box Testing menunjukkan bahwa sistem berfungsi sesuai harapan. Dengan demikian, pengembangan sistem informasi ini telah berhasil memberikan solusi yang lebih efektif dan efisien bagi BPS Buleleng dalam proses pengarsipan dan monitoring administrasi keuangan.",
      journal: "INFOMATEK (Jurnal Informatika, Managemen dan Teknologi)",
      date: "2024-07-18",
      tags: ["Administrasi Keuangan", "Agile Development", "Laravel", "Sistem Monitoring dan Pengarsipan"],
      url: "https://journal.unpas.ac.id/index.php/infomatek/article/view/19231",
      impact: "Sinta 4",
      status: "published"
    },
    {
      id: 5,
      title: "Sistem Informasi Perpustakaan Menggunakan Framework BootstrapDengan PHP Native dan Database MySQL Berbasis Web Pada SMPNegeri 2 Dawan",
      abstract: "SMP N 2 Dawan is one of the educational institutions located in Dawan District, Klungkung Regency, Bali. In thedevelopment of the current institution, especially in the field of libraries, it is a service to visitors or students who need fast, easy, andefficient service methods, because of the process of managing visitors, administration, borrowing and managing books is still manualso that it often causes various obstacles to the service process such as slow administration, inaccurate search information, potentiallylost borrowing process data and data discrepancies in archived book management. In the current era, technological advances providegreat opportunities to support the smooth running of tasks and human activities in various fields, including in the field of libraries. Oneof the innovations that can be developed is by designing a web-based digital library. In this study, web design using the BootstrapFramework with PHP Native and MySQL Database from this design method produces a web-based digital library software which isexpected to be an alternative innovation in the field of library services and be the answer to problems and problems when accessinginformation at the library. With this, access to information becomes easier, information is accurate, data management is good with alow error rate and access anytime and anywhere via the internet.",
      journal: "Jurnal Teknologi Ilmu Komputer",
      date: "2023-01-06",
      tags: ["Information System", "Library", "Framework", "Bootstrap", "Website"],
      url: "https://ejurnal.bangunharapanbangsa.id/index.php/jtik/article/view/31",
      impact: "Garuda",
      status: "published"
    },
    {
      id: 6,
      title: "Sistem Informasi Perpustakaan Menggunakan Framework BootstrapDengan PHP Native dan Database MySQL Berbasis Web Pada SMPNegeri 2 Dawan",
      abstract: "Perkembangan teknologi informasi yang semakin pesat, website merupakan alat media informasi dan komunikasi yang sangat penting. Seiring dengan hal itu tentunya keamanan pada website diperhatikan sehingga diperlukan analisis celah keamanannya. Dalam melakukan analisis celah keamanan pada suatu website biasanya dihadapkan dengan berbagai pilihan metodologi analisis keamanan pada website yang sangat beragam. Penelitian yang digunakan penulis adalah metode Vulnerability Scanner, dengan membandingkan tools Arachni, Skipfish, dan Wapiti, yang bertujuan untuk mengetahui tools mana yang lebih efektif dalam mengetahui celah keamanan pada website. Berdasarkan penelitian didapatkan hasil bahwa tool Arachni mendapatkan laporan kerentanan keamanan yang lebih banyak dibandingkan tools Skipfish dan Wapiti serta menjadi salah satu tools yang menggunakan GUI.",
      journal: "JurTI: Jurnal Teknologi Informasi",
      date: "2022-04-12",
      tags: ["Information System", "Library", "Framework", "Bootstrap", "Website"],
      url: "https://ejurnal.bangunharapanbangsa.id/index.php/jtik/article/view/31",
      impact: "Sinta 5",
      status: "published"
    }
  ];

  const allTags = Array.from(new Set(publications.flatMap(pub => pub.tags)));
  const statuses = ['published', 'in-press', 'submitted'];

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || pub.tags.includes(selectedTag);
    const matchesStatus = !selectedStatus || pub.status === selectedStatus;

    return matchesSearch && matchesTag && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'in-press': return 'bg-sky-100 text-sky-800 border-sky-200';
      case 'submitted': return 'bg-amber-100 text-amber-800 border-amber-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-gray-950 min-h-screen">
      <div className="container mx-auto px-15">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 border-2 border-gray-700 rounded-full mb-6">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-8xl font-black text-gray-50 mb-6 tracking-tight">
            Publications
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore my research contributions and academic publications across various fields of technology and innovation.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Tag Filter */}
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
              >
                <option value="" className="bg-gray-800 text-gray-400">All Tags</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag} className="bg-gray-800 text-gray-200">{tag}</option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
              >
                <option value="" className="bg-gray-800 text-gray-400">All Status</option>
                {statuses.map(status => (
                  <option key={status} value={status} className="bg-gray-800 text-gray-200 capitalize">{status}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {filteredPublications.map((publication, index) => (
            <div
              key={publication.id}
              className="group bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-700/20"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Status Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(publication.status)}`}>
                  {publication.status === 'in-press' ? 'In Press' : publication.status.charAt(0).toUpperCase() + publication.status.slice(1)}
                </span>
                <span className="text-gray-400 text-sm font-medium bg-gray-700/50 px-3 py-1 rounded-full">
                  {publication.impact}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-50 mb-4 group-hover:text-sky-400 transition-colors duration-300 leading-tight">
                {publication.title}
              </h3>

              {/* Journal & Date */}
              <div className="flex items-center text-gray-400 mb-4 space-x-4">
                <span className="font-medium">{publication.journal}</span>
                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(publication.date)}</span>
                </div>
              </div>

              {/* Abstract */}
              <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                {publication.abstract}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {publication.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-700/50 text-gray-400 rounded-full text-sm border border-gray-600 hover:border-sky-500 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More Button */}
              <div className="flex justify-end">
                <a
                  href={publication.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium"
                >
                  <span>Read Paper</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPublications.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-50 mb-4">No publications found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
          </div>
        )}

        {/* Stats Footer */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-gray-50 mb-2">{publications.length}</div>
            <div className="text-gray-400">Total Publications</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-gray-50 mb-2">{publications.filter(p => p.status === 'published').length}</div>
            <div className="text-gray-400">Published</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-gray-50 mb-2">{allTags.length}</div>
            <div className="text-gray-400">Research Areas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;