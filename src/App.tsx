import React, { useState } from 'react';
import Home from './pages/Home';
import Topics from './pages/Topics';
import CallebautTopics from './pages/CallebautTopics';
import Dicas from './pages/Dicas';
import VideoPlayer from './pages/VideoPlayer';
import QRCode from './pages/QRCode';
import NossaHistoria from './pages/NossaHistoria';
import Sustentabilidade from './pages/Sustentabilidade';
import Embalagens from './pages/Embalagens';
import DeOndeVem from './pages/DeOndeVem';
import './styles/global.css'

type PageType = 'home' | 'topics' | 'callebaut' | 'dicas' | 'video' | 'qrcode' | 'historia' | 'sustentabilidade' | 'embalagens' | 'origem';

interface VideoInfo {
  title: string;
  source: string;
}

const App: React.FC = () => {
  const [pageHistory, setPageHistory] = useState<PageType[]>(['home']);
  const [soundOption, setSoundOption] = useState<'com-som' | 'sem-som'>('com-som');
  const [currentVideo, setCurrentVideo] = useState<VideoInfo | null>(null);
  const [isFromHome, setIsFromHome] = useState(false);

  const currentPage = pageHistory[pageHistory.length - 1];

  const navigateTo = (page: PageType) => {
    setPageHistory(prev => [...prev, page]);
  };

  const handleBack = () => {
    if (pageHistory.length > 1) {
      setPageHistory(prev => prev.slice(0, -1));
      setIsFromHome(false);
    }
  };

  const handleHome = () => {
    setPageHistory(['home', 'topics']);
    setIsFromHome(false);
  };

  const handleNext = (option: 'com-som' | 'sem-som') => {
    setSoundOption(option);
    setIsFromHome(true);
    navigateTo('topics');
  };

  const handleTopicSelect = (topic: string) => {
    if (topic === 'Callebaut') {
      navigateTo('callebaut');
    } else if (topic === 'Dicas') {
      navigateTo('dicas');
    }
  };

  const handleVideoSelect = (title: string, videoSource: string) => {
    setCurrentVideo({ title, source: videoSource });
    navigateTo('video');
  };

  const handleVideoEnd = () => {
    navigateTo('qrcode');
  };

  const handleCallebautTopicSelect = (topic: string) => {
    switch (topic) {
      case 'Nossa história':
        navigateTo('historia');
        break;
      case 'Sustentabilidade':
        navigateTo('sustentabilidade');
        break;
      case 'Embalagens':
        navigateTo('embalagens');
        break;
      case 'De onde vem o chocolate':
        navigateTo('origem');
        break;
    }
  };

  const handleDicasTopicSelect = (topic: string) => {

    console.log('Dica selecionada:', topic);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNext={handleNext} />;
      case 'topics':
        return (
          <Topics 
            onBack={handleBack} 
            onSelectTopic={handleTopicSelect} 
            soundPreference={soundOption}
            onVideoEnd={handleVideoEnd}
            fromHome={isFromHome}
          />
        );
      case 'callebaut':
        return <CallebautTopics onBack={handleBack} onSelectTopic={handleCallebautTopicSelect} onHome={handleHome} />;
      case 'dicas':
        return <Dicas soundPreference={soundOption} onBack={handleBack} onSelectTopic={handleDicasTopicSelect} onHome={handleHome} />;
      case 'video':
        return currentVideo ? (
          <VideoPlayer
            onBack={handleBack}
            onHome={handleHome}
            videoTitle={currentVideo.title}
            videoSource={currentVideo.source}
            isMuted={soundOption === 'sem-som'}
            onVideoEnd={handleVideoEnd}
          />
        ) : null;
      case 'qrcode':
        return <QRCode onBack={handleBack} onHome={handleHome} />;
      case 'historia':
        return <NossaHistoria onBack={handleBack} onHome={handleHome} />;
      case 'sustentabilidade':
        return <Sustentabilidade onBack={handleBack} onHome={handleHome} />;
      case 'embalagens':
        return <Embalagens onBack={handleBack} onHome={handleHome} />;
      case 'origem':
        return <DeOndeVem onBack={handleBack} onHome={handleHome} />;
      default:
        return <Home onNext={handleNext} />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
};

export default App;
