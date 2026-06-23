export default function MapSection() {
  return (
    <section className="bg-[#C8DDE9] py-14 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-[38%] shrink-0">
          <h2 className="font-serif text-[#1C3535] text-4xl md:text-5xl font-bold leading-tight mb-4">
            Our Backyard.<br />Our Expertise.
          </h2>
          <p className="text-[#2a3a3a] text-base leading-relaxed">
            We live here, we work here,<br />
            and we know this area<br />
            like the back of our hand.
          </p>
        </div>
        <div className="md:w-[62%] w-full">
          <MapIllustration />
        </div>
      </div>
    </section>
  )
}

function MapIllustration() {
  return (
    <svg viewBox="0 0 580 380" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M1,1 L4,7 L7,1" fill="none" stroke="#3a5040" strokeWidth="1.3" strokeLinejoin="round"/>
        </marker>
      </defs>

      {/* Water */}
      <rect width="580" height="380" fill="#a8cfe0" />

      {/* Ripple lines */}
      {[50,80,290,320,350].map((y,i)=>(
        <path key={i} d={`M15,${y} Q90,${y-7} 165,${y} Q240,${y+7} 315,${y} Q390,${y-7} 465,${y} Q520,${y+4} 565,${y}`}
          stroke="#90bcd4" strokeWidth="1" fill="none" opacity="0.65"/>
      ))}

      {/* ── Land mass: wide horizontal elongated shape ── */}
      <path
        d="M70,195 C65,155 82,112 118,86 C155,60 210,50 268,48 C326,46 382,56 422,80 C462,104 480,138 482,172 C484,208 468,242 438,262 C408,282 368,292 325,296 C280,300 235,296 196,280 C156,264 128,244 105,222 C84,200 75,235 70,195Z"
        fill="#c4d898"
        stroke="#98bc70"
        strokeWidth="2"
      />
      {/* Interior highlight */}
      <path
        d="M120,192 C118,162 132,134 158,116 C184,98 218,90 256,90 C294,90 330,102 352,124 C374,146 376,178 360,202 C344,226 312,238 278,242 C242,246 206,238 178,220 C150,202 122,222 120,192Z"
        fill="#cee0a0"
        opacity="0.4"
      />

      {/* ── Tree cluster (left side of land) ── */}
      {[
        [108,158],[124,146],[118,170],[98,164],[136,154],
        [104,150],[128,175],[142,162],[112,180],[130,143],
      ].map(([x,y],i)=>(
        <g key={i} transform={`translate(${x},${y})`}>
          <rect x="-2.5" y="6" width="5" height="7" fill="#6b4e2a"/>
          <polygon points="0,-13 -9,6 9,6" fill="#3a6830"/>
          <polygon points="0,-20 -6,-3 6,-3" fill="#4a7840"/>
        </g>
      ))}

      {/* ── City markers ── */}
      {/* Nassau Bay */}
      <circle cx="200" cy="205" r="5.5" fill="#C4622D"/><circle cx="200" cy="205" r="2.5" fill="white"/>
      <text x="200" y="192" textAnchor="middle" fontSize="8.5" fontWeight="700" letterSpacing="0.07em" fill="#1C3535" fontFamily="Inter,Arial,sans-serif">NASSAU BAY</text>
      {/* Clear Lake City */}
      <circle cx="295" cy="152" r="5.5" fill="#C4622D"/><circle cx="295" cy="152" r="2.5" fill="white"/>
      <text x="295" y="139" textAnchor="middle" fontSize="8.5" fontWeight="700" letterSpacing="0.07em" fill="#1C3535" fontFamily="Inter,Arial,sans-serif">CLEAR LAKE CITY</text>
      {/* Seabrook */}
      <circle cx="415" cy="182" r="5.5" fill="#C4622D"/><circle cx="415" cy="182" r="2.5" fill="white"/>
      <text x="415" y="169" textAnchor="middle" fontSize="8.5" fontWeight="700" letterSpacing="0.07em" fill="#1C3535" fontFamily="Inter,Arial,sans-serif">SEABROOK</text>
      {/* El Lago */}
      <circle cx="178" cy="238" r="5.5" fill="#C4622D"/><circle cx="178" cy="238" r="2.5" fill="white"/>
      <text x="172" y="254" textAnchor="middle" fontSize="8.5" fontWeight="700" letterSpacing="0.07em" fill="#1C3535" fontFamily="Inter,Arial,sans-serif">EL LAGO</text>
      {/* Taylor Lake Village */}
      <circle cx="272" cy="252" r="5.5" fill="#C4622D"/><circle cx="272" cy="252" r="2.5" fill="white"/>
      <text x="272" y="268" textAnchor="middle" fontSize="8.5" fontWeight="700" letterSpacing="0.07em" fill="#1C3535" fontFamily="Inter,Arial,sans-serif">TAYLOR</text>
      <text x="272" y="280" textAnchor="middle" fontSize="8.5" fontWeight="700" letterSpacing="0.07em" fill="#1C3535" fontFamily="Inter,Arial,sans-serif">LAKE VILLAGE</text>
      {/* Kemah */}
      <circle cx="408" cy="308" r="5.5" fill="#C4622D"/><circle cx="408" cy="308" r="2.5" fill="white"/>
      <text x="408" y="324" textAnchor="middle" fontSize="8.5" fontWeight="700" letterSpacing="0.07em" fill="#1C3535" fontFamily="Inter,Arial,sans-serif">KEMAH</text>

      {/* ── Dashed paths between cities ── */}
      <path d="M200,205 Q248,178 295,152" stroke="#7aa060" strokeWidth="1.4" fill="none" strokeDasharray="3,3" opacity="0.75"/>
      <path d="M295,152 Q355,164 415,182" stroke="#7aa060" strokeWidth="1.4" fill="none" strokeDasharray="3,3" opacity="0.75"/>
      <path d="M178,238 Q225,246 272,255" stroke="#7aa060" strokeWidth="1.4" fill="none" strokeDasharray="3,3" opacity="0.75"/>
      <path d="M272,255 Q340,282 408,308" stroke="#7aa060" strokeWidth="1.4" fill="none" strokeDasharray="3,3" opacity="0.75"/>
      <path d="M200,205 Q188,220 178,238" stroke="#7aa060" strokeWidth="1.4" fill="none" strokeDasharray="3,3" opacity="0.75"/>
      <path d="M295,152 Q284,202 272,255" stroke="#7aa060" strokeWidth="1.4" fill="none" strokeDasharray="3,3" opacity="0.75"/>

      {/* ── Lighthouse (near Seabrook) ── */}
      <g transform="translate(462,235)">
        <rect x="-5" y="-28" width="10" height="28" fill="#ede6d6" stroke="#a09068" strokeWidth="1.2"/>
        <polygon points="-5,-28 5,-28 3,-41 -3,-41" fill="#c03820"/>
        <rect x="-7.5" y="-33" width="15" height="5" fill="#a09068"/>
        <rect x="-3" y="-26" width="6" height="5" fill="#80c0d0" opacity="0.9"/>
      </g>

      {/* ── Sailboats ── */}
      <g transform="translate(505,330)">
        <line x1="0" y1="2" x2="0" y2="-28" stroke="#40606e" strokeWidth="1.5"/>
        <polygon points="0,-26 -18,-6 0,-6" fill="#d8eaf4" stroke="#40606e" strokeWidth="0.9"/>
        <line x1="-21" y1="2" x2="21" y2="2" stroke="#40606e" strokeWidth="1.8" strokeLinecap="round"/>
      </g>
      <g transform="translate(535,308)">
        <line x1="0" y1="1" x2="0" y2="-18" stroke="#40606e" strokeWidth="1.2"/>
        <polygon points="0,-17 -12,-4 0,-4" fill="#d8eaf4" stroke="#40606e" strokeWidth="0.7"/>
        <line x1="-14" y1="1" x2="14" y2="1" stroke="#40606e" strokeWidth="1.4" strokeLinecap="round"/>
      </g>

      {/* ── Annotation: Great parks & trails ── */}
      <text x="72" y="85" textAnchor="middle" fontSize="9.5" fontStyle="italic" fill="#2c4a38" fontFamily="Georgia,serif">Great parks</text>
      <text x="72" y="98" textAnchor="middle" fontSize="9.5" fontStyle="italic" fill="#2c4a38" fontFamily="Georgia,serif">&amp; trails</text>
      <path d="M88,102 C102,116 112,130 114,147" stroke="#3a5040" strokeWidth="1.3" fill="none" markerEnd="url(#arrowhead)"/>

      {/* ── Annotation: Waterfront dining ── */}
      <text x="495" y="102" textAnchor="middle" fontSize="9.5" fontStyle="italic" fill="#2c4a38" fontFamily="Georgia,serif">Waterfront</text>
      <text x="495" y="115" textAnchor="middle" fontSize="9.5" fontStyle="italic" fill="#2c4a38" fontFamily="Georgia,serif">dining</text>
      <path d="M478,118 C465,135 452,152 446,168" stroke="#3a5040" strokeWidth="1.3" fill="none" markerEnd="url(#arrowhead)"/>

      {/* ── Annotation: Small town feel ── */}
      <text x="180" y="342" textAnchor="middle" fontSize="9.5" fontStyle="italic" fill="#2c4a38" fontFamily="Georgia,serif">Small town feel</text>
      <text x="180" y="355" textAnchor="middle" fontSize="9.5" fontStyle="italic" fill="#2c4a38" fontFamily="Georgia,serif">on the water</text>
      <path d="M212,339 C238,322 256,307 266,290" stroke="#3a5040" strokeWidth="1.3" fill="none" markerEnd="url(#arrowhead)"/>
    </svg>
  )
}
