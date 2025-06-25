function Globe(){
    return(
        <div className="w-full max-w-lg">
                            {/* === SVG Globe Tetap Dipertahankan === */}
                            <svg 
                                viewBox="0 0 400 400" 
                                className="w-full h-auto text-white opacity-90 animate-bounce"
                                style={{ animationDuration: '4s' }}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g className="animate-spin" style={{transformOrigin: '200px 200px', animationDuration: '20s'}}>
                                    <circle cx="200" cy="200" r="80" fill="url(#globeGradient)" stroke="currentColor" strokeWidth="2" opacity="0.9" />
                                    <ellipse cx="200" cy="200" rx="80" ry="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                                    <ellipse cx="200" cy="200" rx="80" ry="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                                    <ellipse cx="200" cy="200" rx="80" ry="60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                                    <ellipse cx="200" cy="200" rx="20" ry="80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                                    <ellipse cx="200" cy="200" rx="40" ry="80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                                    <ellipse cx="200" cy="200" rx="60" ry="80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                                    <path d="M 160 180 Q 180 170 200 180 Q 220 175 240 185 Q 230 195 210 200 Q 190 195 160 180" fill="currentColor" opacity="0.7" />
                                    <path d="M 150 210 Q 170 200 190 210 Q 210 205 230 215 Q 220 225 200 230 Q 180 225 150 210" fill="currentColor" opacity="0.6" />
                                    <path d="M 180 150 Q 200 140 220 150 Q 210 160 190 165 Q 170 160 180 150" fill="currentColor" opacity="0.5" />
                                </g>

                                <g className="animate-spin" style={{transformOrigin: '200px 200px', animationDuration: '15s', animationDirection: 'reverse'}}>
                                    <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeDasharray="8,8" />
                                    <circle cx="320" cy="200" r="6" fill="currentColor" opacity="0.8">
                                        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite"/>
                                    </circle>
                                    <circle cx="200" cy="80" r="5" fill="currentColor" opacity="0.6">
                                        <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2.5s" repeatCount="indefinite"/>
                                    </circle>
                                    <circle cx="80" cy="200" r="4" fill="currentColor" opacity="0.7">
                                        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2s" repeatCount="indefinite"/>
                                    </circle>
                                </g>

                                <g className="animate-spin" style={{transformOrigin: '200px 200px', animationDuration: '25s'}}>
                                    <circle cx="200" cy="200" r="160" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="12,12" />
                                    <circle cx="360" cy="200" r="4" fill="currentColor" opacity="0.5">
                                        <animate attributeName="r" values="4;6;4" dur="4s" repeatCount="indefinite"/>
                                    </circle>
                                    <circle cx="200" cy="40" r="3" fill="currentColor" opacity="0.4">
                                        <animate attributeName="r" values="3;5;3" dur="3.5s" repeatCount="indefinite"/>
                                    </circle>
                                </g>

                                <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.6">
                                    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite"/>
                                </circle>
                                <circle cx="350" cy="80" r="1.5" fill="currentColor" opacity="0.5">
                                    <animate attributeName="opacity" values="0.5;0.1;0.5" dur="3s" repeatCount="indefinite"/>
                                </circle>
                                <circle cx="80" cy="350" r="2" fill="currentColor" opacity="0.7">
                                    <animate attributeName="opacity" values="0.7;0.3;0.7" dur="5s" repeatCount="indefinite"/>
                                </circle>
                                <circle cx="320" cy="320" r="1" fill="currentColor" opacity="0.4">
                                    <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2.5s" repeatCount="indefinite"/>
                                </circle>
                                <circle cx="30" cy="180" r="1.5" fill="currentColor" opacity="0.6">
                                    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3.5s" repeatCount="indefinite"/>
                                </circle>
                                <circle cx="370" cy="250" r="2" fill="currentColor" opacity="0.5">
                                    <animate attributeName="opacity" values="0.5;0.1;0.5" dur="4.5s" repeatCount="indefinite"/>
                                </circle>
                                <line x1="200" y1="200" x2="320" y2="200" stroke="currentColor" strokeWidth="1" opacity="0.3">
                                    <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite"/>
                                </line>
                                <line x1="200" y1="200" x2="200" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.2">
                                    <animate attributeName="opacity" values="0.2;0.05;0.2" dur="2.5s" repeatCount="indefinite"/>
                                </line>
                                <defs>
                                    <radialGradient id="globeGradient" cx="0.3" cy="0.3">
                                        <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                                        <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
                                        <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>
    )
}
export default Globe;