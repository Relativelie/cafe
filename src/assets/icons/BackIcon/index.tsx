type IconProps = {
  className?: string;
};

const Icon: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      width='582.000000pt'
      height='595.000000pt'
      viewBox='0 0 582.000000 595.000000'
      preserveAspectRatio='xMidYMid meet'
    >
      <g
        transform='translate(0.000000,595.000000) scale(0.100000,-0.100000)'
        fill='#000000'
        stroke='none'
      >
        <path
          d='M2870 5937 c-90 -20 -159 -62 -256 -155 -50 -48 -516 -507 -1035
-1021 -519 -514 -1018 -1002 -1109 -1084 -207 -189 -298 -283 -357 -371 -154
-229 -145 -431 29 -660 29 -38 534 -556 1123 -1150 588 -595 1117 -1130 1175
-1190 187 -193 306 -273 439 -296 177 -30 366 54 443 197 41 75 75 208 89 344
12 127 10 244 -13 608 -11 180 -11 194 5 206 10 7 64 18 120 25 122 15 842 9
1254 -11 488 -24 712 21 863 173 101 103 149 232 171 463 10 104 9 182 -6 455
-15 289 -16 381 -6 747 12 427 4 751 -21 853 -54 224 -231 340 -565 369 -69 7
-464 11 -955 11 -658 0 -839 3 -845 13 -4 6 -6 246 -5 532 3 338 0 547 -7 598
-23 162 -115 272 -275 327 -74 25 -186 33 -256 17z m1082 -2477 c148 -46 252
-158 274 -298 l7 -43 -108 3 -108 3 -14 42 c-39 117 -198 169 -324 106 -106
-54 -153 -157 -154 -333 0 -229 91 -352 263 -354 119 -1 193 54 222 162 l11
42 106 0 106 0 -6 -52 c-9 -72 -58 -167 -113 -218 -179 -165 -520 -154 -678
21 -145 161 -179 467 -77 686 99 211 348 309 593 233z m-2120 -1 c76 -16 119
-41 170 -97 101 -113 90 -256 -26 -345 l-44 -33 54 -42 c77 -60 107 -110 112
-187 6 -85 -17 -151 -74 -214 -85 -95 -162 -111 -530 -111 l-244 0 0 520 0
520 265 0 c157 0 285 -5 317 -11z m1190 -494 c98 -275 180 -508 184 -517 5
-16 -5 -18 -109 -18 l-115 0 -34 103 -35 102 -198 0 -199 0 -35 -100 -36 -100
-114 -3 c-89 -2 -112 0 -109 10 3 7 84 229 181 493 96 264 180 493 186 508
l11 28 122 -3 122 -3 178 -500z m1600 284 l3 -221 200 220 200 221 128 0 c71
1 127 -3 125 -8 -1 -5 -94 -104 -206 -221 -111 -118 -201 -217 -200 -221 2 -4
104 -135 228 -290 124 -156 227 -286 228 -291 2 -4 -54 -8 -126 -8 l-129 0
-174 229 -174 229 -52 -51 -53 -51 -2 -175 -3 -176 -110 0 -110 0 -3 518 -2
517 115 0 115 0 2 -221z'
        />
        <path
          d='M1470 3176 l0 -116 138 0 c75 0 154 5 175 11 90 25 104 158 20 199
-18 9 -79 15 -180 18 l-153 4 0 -116z'
        />
        <path
          d='M1470 2745 l0 -138 163 5 c128 4 169 8 195 22 56 29 79 115 47 176
-28 54 -62 63 -242 68 l-163 4 0 -137z'
        />
        <path
          d='M2652 3033 c-33 -98 -63 -186 -67 -195 -7 -17 3 -18 129 -18 75 0
136 2 136 4 0 8 -130 379 -134 383 -2 2 -31 -76 -64 -174z'
        />
      </g>
    </svg>
  );
};

export default Icon;
