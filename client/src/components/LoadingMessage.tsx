import React from 'react';

const LoadingMessage = () => {
  return (
    <div className="flex justify-start px-1 py-2">
      <div className="max-w-[95%] lg:max-w-[80%]">
        <div className="flex items-start space-x-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 10a1 1 0 11-2 0 1 1 0 012 0z" />
              <path d="M15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a6 6 0 01-8.485 0l-.707-.707a1 1 0 00-1.414 1.414l.707.707a8 8 0 0010.899 0l.707-.707z" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="px-4 py-3 rounded-2xl bg-white border border-gray-100 text-gray-800 shadow-md hover:shadow-gray-300/50">
              <div className="flex items-center space-x-2 h-6">
                <svg width="24" height="24" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" version="1.1" className="animate-pulse">
                  {/* Dot 1 */}
                  <circle cx="25" cy="25" r="3" className="fill-purple-500" style={{ animation: 'dot-bounce 1.4s infinite 0s' }} />
                  
                  {/* Dot 2 */}
                  <circle cx="50" cy="25" r="3" className="fill-purple-500" style={{ animation: 'dot-bounce 1.4s infinite 0.2s' }} />
                  
                  {/* Dot 3 (Smile face) */}
                  <g style={{ animation: 'smile-appear 1.4s infinite 0.4s' }}>
                    {/* Dot */}
                    <circle cx="75" cy="25" r="3" className="fill-purple-500" />
                    
                    {/* Smile */}
                    <circle cx="75" cy="22" r="1.5" className="fill-purple-600" />
                    <circle cx="77" cy="22" r="1.5" className="fill-purple-600" />
                    <path d="M 74 25 Q 75 27 76 25" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" className="text-purple-600" />
                  </g>
                </svg>
              </div>
              <style>{`
                @keyframes dot-bounce {
                  0%, 80%, 100% {
                    opacity: 0.5;
                    transform: scale(1);
                  }
                  40% {
                    opacity: 1;
                    transform: scale(1.2);
                  }
                }
                
                @keyframes smile-appear {
                  0%, 100% {
                    opacity: 0;
                  }
                  40% {
                    opacity: 1;
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingMessage;
