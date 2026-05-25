export default function Home() {
  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      textAlign: 'center', 
      padding: '50px', 
      backgroundColor: '#f9fafb', 
      minHeight: '100vh' 
    }}>
      <h1 style={{ fontSize: '3rem', color: '#111827', marginBottom: '20px' }}>
        AI Shorts Batch Generator
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#4b5563', maxWidth: '600px', margin: '0 auto 30px' }}>
        Convert your long-form videos into viral TikTok, Reels, and YouTube Shorts instantly using our powerful AI-driven batch processing tool.
      </p>
      
      <a 
        href="https://huggingface.co/spaces/amiaMoTaha/AI-Shorts-Generator" 
        style={{ 
          backgroundColor: '#4f46e5', 
          color: 'white', 
          padding: '15px 30px', 
          borderRadius: '50px', 
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: 'bold'
        }}
      >
        Launch AI Shorts Generator
      </a>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '60px' }}>
        {['Smart Auto-Cropping', 'Fast Subtitles', 'Batch Workflow'].map((title) => (
          <div key={title} style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '10px', backgroundColor: 'white' }}>
            <h3 style={{ fontWeight: 'bold' }}>{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}