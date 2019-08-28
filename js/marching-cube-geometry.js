function MarchinCubeGeoMetry(id)
{			
	var geometry = new THREE.Geometry();
	for(var i = 0; i < 5; i++)
	{
		var addedFace = false;
		for(var tri = 0; tri < 3; tri++)
		{
			var edgeCase = triangleTable[marchingIdx][3*i + tri];
			if (edgeCase == -1) break;
			addedFace = true;

			var vertStart = edgeVertexOffsets[edgeCase][0];
			var vertEnd   = edgeVertexOffsets[edgeCase][1];

			geometry.vertices.unshift(
				new THREE.Vector3(
					(vertStart.x+vertEnd.x)/2-0.5,
					(vertStart.y+vertEnd.y)/2-0.5,
					(vertStart.z+vertEnd.z)/2-0.5,
				)
			);
		}

		if(addedFace) geometry.faces.push( new THREE.Face3( i*3, i*3+1, i*3+2 ) );
		else break;
	}
	return geometry;
}

// data from https://gist.github.com/ttammear/a3cdc214023f8c92b1f0bf27e7cc08d1
var triangleTable = [
/*   0 */	[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
/*   1 */	[0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
/*   2 */	[0, 1, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
/*   3 */	[1, 8, 3, 9, 8, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
/*   4 */	[1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
/*   5 */	[0, 8, 3, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
/*   6 */	[9, 2, 10, 0, 2, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
/*   7 */	[2, 8, 3, 2, 10, 8, 10, 9, 8, -1, -1, -1, -1, -1, -1, -1],
/*   8 */	[3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
/*   9 */	[0, 11, 2, 8, 11, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
/*  10 */	[1, 9, 0, 2, 3, 11, -1],
/*  11 */	[1, 11, 2, 1, 9, 11, 9, 8, 11, -1],
/*  12 */	[3, 10, 1, 11, 10, 3, -1],
/*  13 */	[0, 10, 1, 0, 8, 10, 8, 11, 10, -1],
/*  14 */	[3, 9, 0, 3, 11, 9, 11, 10, 9, -1],
/*  15 */	[9, 8, 10, 10, 8, 11, -1],
/*  16 */	[4, 7, 8, -1],
/*  17 */	[4, 3, 0, 7, 3, 4, -1],
/*  18 */	[0, 1, 9, 8, 4, 7, -1],
/*  19 */	[4, 1, 9, 4, 7, 1, 7, 3, 1, -1],
/*  20 */	[1, 2, 10, 8, 4, 7, -1],
/*  21 */	[3, 4, 7, 3, 0, 4, 1, 2, 10, -1],
/*  22 */	[9, 2, 10, 9, 0, 2, 8, 4, 7, -1],
/*  23 */	[2, 10, 9, 2, 9, 7, 2, 7, 3, 7, 9, 4, -1],
/*  24 */	[8, 4, 7, 3, 11, 2, -1],
/*  25 */	[11, 4, 7, 11, 2, 4, 2, 0, 4, -1],
/*  26 */	[9, 0, 1, 8, 4, 7, 2, 3, 11, -1],
/*  27 */	[4, 7, 11, 9, 4, 11, 9, 11, 2, 9, 2, 1, -1],
/*  28 */	[3, 10, 1, 3, 11, 10, 7, 8, 4, -1],
/*  29 */	[1, 11, 10, 1, 4, 11, 1, 0, 4, 7, 11, 4, -1],
/*  30 */	[4, 7, 8, 9, 0, 11, 9, 11, 10, 11, 0, 3, -1],
/*  31 */	[4, 7, 11, 4, 11, 9, 9, 11, 10, -1],
/*  32 */	[9, 5, 4, -1],
/*  33 */	[9, 5, 4, 0, 8, 3, -1],
/*  34 */	[0, 5, 4, 1, 5, 0, -1],
/*  35 */	[8, 5, 4, 8, 3, 5, 3, 1, 5, -1],
/*  36 */	[1, 2, 10, 9, 5, 4, -1],
/*  37 */	[3, 0, 8, 1, 2, 10, 4, 9, 5, -1],
/*  38 */	[5, 2, 10, 5, 4, 2, 4, 0, 2, -1],
/*  39 */	[2, 10, 5, 3, 2, 5, 3, 5, 4, 3, 4, 8, -1],
/*  40 */	[9, 5, 4, 2, 3, 11, -1],
/*  41 */	[0, 11, 2, 0, 8, 11, 4, 9, 5, -1],
/*  42 */	[0, 5, 4, 0, 1, 5, 2, 3, 11, -1],
/*  43 */	[2, 1, 5, 2, 5, 8, 2, 8, 11, 4, 8, 5, -1],
/*  44 */	[10, 3, 11, 10, 1, 3, 9, 5, 4, -1],
/*  45 */	[4, 9, 5, 0, 8, 1, 8, 10, 1, 8, 11, 10, -1],
/*  46 */	[5, 4, 0, 5, 0, 11, 5, 11, 10, 11, 0, 3, -1],
/*  47 */	[5, 4, 8, 5, 8, 10, 10, 8, 11, -1],
/*  48 */	[9, 7, 8, 5, 7, 9, -1],
/*  49 */	[9, 3, 0, 9, 5, 3, 5, 7, 3, -1],
/*  50 */	[0, 7, 8, 0, 1, 7, 1, 5, 7, -1],
/*  51 */	[1, 5, 3, 3, 5, 7, -1],
/*  52 */	[9, 7, 8, 9, 5, 7, 10, 1, 2, -1],
/*  53 */	[10, 1, 2, 9, 5, 0, 5, 3, 0, 5, 7, 3, -1],
/*  54 */	[8, 0, 2, 8, 2, 5, 8, 5, 7, 10, 5, 2, -1],
/*  55 */	[2, 10, 5, 2, 5, 3, 3, 5, 7, -1],
/*  56 */	[7, 9, 5, 7, 8, 9, 3, 11, 2, -1],
/*  57 */	[9, 5, 7, 9, 7, 2, 9, 2, 0, 2, 7, 11, -1],
/*  58 */	[2, 3, 11, 0, 1, 8, 1, 7, 8, 1, 5, 7, -1],
/*  59 */	[11, 2, 1, 11, 1, 7, 7, 1, 5, -1],
/*  60 */	[9, 5, 8, 8, 5, 7, 10, 1, 3, 10, 3, 11, -1],
/*  61 */	[5, 7, 0, 5, 0, 9, 7, 11, 0, 1, 0, 10, 11, 10, 0, -1],
/*  62 */	[11, 10, 0, 11, 0, 3, 10, 5, 0, 8, 0, 7, 5, 7, 0, -1],
/*  63 */	[11, 10, 5, 7, 11, 5, -1],
/*  64 */	[10, 6, 5, -1],
/*  65 */	[0, 8, 3, 5, 10, 6, -1],
/*  66 */	[9, 0, 1, 5, 10, 6, -1],
/*  67 */	[1, 8, 3, 1, 9, 8, 5, 10, 6, -1],
/*  68 */	[1, 6, 5, 2, 6, 1, -1],
/*  69 */	[1, 6, 5, 1, 2, 6, 3, 0, 8, -1],
/*  70 */	[9, 6, 5, 9, 0, 6, 0, 2, 6, -1],
/*  71 */	[5, 9, 8, 5, 8, 2, 5, 2, 6, 3, 2, 8, -1],
/*  72 */	[2, 3, 11, 10, 6, 5, -1],
/*  73 */	[11, 0, 8, 11, 2, 0, 10, 6, 5, -1],
/*  74 */	[0, 1, 9, 2, 3, 11, 5, 10, 6, -1],
/*  75 */	[5, 10, 6, 1, 9, 2, 9, 11, 2, 9, 8, 11, -1],
/*  76 */	[6, 3, 11, 6, 5, 3, 5, 1, 3, -1],
/*  77 */	[0, 8, 11, 0, 11, 5, 0, 5, 1, 5, 11, 6, -1],
/*  78 */	[3, 11, 6, 0, 3, 6, 0, 6, 5, 0, 5, 9, -1],
/*  79 */	[6, 5, 9, 6, 9, 11, 11, 9, 8, -1],
/*  80 */	[5, 10, 6, 4, 7, 8, -1],
/*  81 */	[4, 3, 0, 4, 7, 3, 6, 5, 10, -1],
/*  82 */	[1, 9, 0, 5, 10, 6, 8, 4, 7, -1],
/*  83 */	[10, 6, 5, 1, 9, 7, 1, 7, 3, 7, 9, 4, -1],
/*  84 */	[6, 1, 2, 6, 5, 1, 4, 7, 8, -1],
/*  85 */	[1, 2, 5, 5, 2, 6, 3, 0, 4, 3, 4, 7, -1],
/*  86 */	[8, 4, 7, 9, 0, 5, 0, 6, 5, 0, 2, 6, -1],
/*  87 */	[7, 3, 9, 7, 9, 4, 3, 2, 9, 5, 9, 6, 2, 6, 9, -1],
/*  88 */	[3, 11, 2, 7, 8, 4, 10, 6, 5, -1],
/*  89 */	[5, 10, 6, 4, 7, 2, 4, 2, 0, 2, 7, 11, -1],
/*  90 */	[0, 1, 9, 4, 7, 8, 2, 3, 11, 5, 10, 6, -1],
/*  91 */	[9, 2, 1, 9, 11, 2, 9, 4, 11, 7, 11, 4, 5, 10, 6, -1],
/*  92 */	[8, 4, 7, 3, 11, 5, 3, 5, 1, 5, 11, 6, -1],
/*  93 */	[5, 1, 11, 5, 11, 6, 1, 0, 11, 7, 11, 4, 0, 4, 11, -1],
/*  94 */	[0, 5, 9, 0, 6, 5, 0, 3, 6, 11, 6, 3, 8, 4, 7, -1],
/*  95 */	[6, 5, 9, 6, 9, 11, 4, 7, 9, 7, 11, 9, -1],
/*  96 */	[10, 4, 9, 6, 4, 10, -1],
/*  97 */	[4, 10, 6, 4, 9, 10, 0, 8, 3, -1],
/*  98 */	[10, 0, 1, 10, 6, 0, 6, 4, 0, -1],
/*  99 */	[8, 3, 1, 8, 1, 6, 8, 6, 4, 6, 1, 10, -1],
/* 100 */	[1, 4, 9, 1, 2, 4, 2, 6, 4, -1],
/* 101 */	[3, 0, 8, 1, 2, 9, 2, 4, 9, 2, 6, 4, -1],
/* 102 */	[0, 2, 4, 4, 2, 6, -1],
/* 103 */	[8, 3, 2, 8, 2, 4, 4, 2, 6, -1],
/* 104 */	[10, 4, 9, 10, 6, 4, 11, 2, 3, -1],
/* 105 */	[0, 8, 2, 2, 8, 11, 4, 9, 10, 4, 10, 6, -1],
/* 106 */	[3, 11, 2, 0, 1, 6, 0, 6, 4, 6, 1, 10, -1],
/* 107 */	[6, 4, 1, 6, 1, 10, 4, 8, 1, 2, 1, 11, 8, 11, 1, -1],
/* 108 */	[9, 6, 4, 9, 3, 6, 9, 1, 3, 11, 6, 3, -1],
/* 109 */	[8, 11, 1, 8, 1, 0, 11, 6, 1, 9, 1, 4, 6, 4, 1, -1],
/* 110 */	[3, 11, 6, 3, 6, 0, 0, 6, 4, -1],
/* 111 */	[6, 4, 8, 11, 6, 8, -1],
/* 112 */	[7, 10, 6, 7, 8, 10, 8, 9, 10, -1],
/* 113 */	[0, 7, 3, 0, 10, 7, 0, 9, 10, 6, 7, 10, -1],
/* 114 */	[10, 6, 7, 1, 10, 7, 1, 7, 8, 1, 8, 0, -1],
/* 115 */	[10, 6, 7, 10, 7, 1, 1, 7, 3, -1],
/* 116 */	[1, 2, 6, 1, 6, 8, 1, 8, 9, 8, 6, 7, -1],
/* 117 */	[2, 6, 9, 2, 9, 1, 6, 7, 9, 0, 9, 3, 7, 3, 9, -1],
/* 118 */	[7, 8, 0, 7, 0, 6, 6, 0, 2, -1],
/* 119 */	[7, 3, 2, 6, 7, 2, -1],
/* 120 */	[2, 3, 11, 10, 6, 8, 10, 8, 9, 8, 6, 7, -1],
/* 121 */	[2, 0, 7, 2, 7, 11, 0, 9, 7, 6, 7, 10, 9, 10, 7, -1],
/* 122 */	[1, 8, 0, 1, 7, 8, 1, 10, 7, 6, 7, 10, 2, 3, 11, -1],
/* 123 */	[11, 2, 1, 11, 1, 7, 10, 6, 1, 6, 7, 1, -1],
/* 124 */	[8, 9, 6, 8, 6, 7, 9, 1, 6, 11, 6, 3, 1, 3, 6, -1],
/* 125 */	[0, 9, 1, 11, 6, 7, -1],
/* 126 */	[7, 8, 0, 7, 0, 6, 3, 11, 0, 11, 6, 0, -1],
/* 127 */	[7, 11, 6, -1],
/* 128 */	[7, 6, 11, -1],
/* 129 */	[3, 0, 8, 11, 7, 6, -1],
/* 130 */	[0, 1, 9, 11, 7, 6, -1],
/* 131 */	[8, 1, 9, 8, 3, 1, 11, 7, 6, -1],
/* 132 */	[10, 1, 2, 6, 11, 7, -1],
/* 133 */	[1, 2, 10, 3, 0, 8, 6, 11, 7, -1],
/* 134 */	[2, 9, 0, 2, 10, 9, 6, 11, 7, -1],
/* 135 */	[6, 11, 7, 2, 10, 3, 10, 8, 3, 10, 9, 8, -1],
/* 136 */	[7, 2, 3, 6, 2, 7, -1],
/* 137 */	[7, 0, 8, 7, 6, 0, 6, 2, 0, -1],
/* 138 */	[2, 7, 6, 2, 3, 7, 0, 1, 9, -1],
/* 139 */	[1, 6, 2, 1, 8, 6, 1, 9, 8, 8, 7, 6, -1],
/* 140 */	[10, 7, 6, 10, 1, 7, 1, 3, 7, -1],
/* 141 */	[10, 7, 6, 1, 7, 10, 1, 8, 7, 1, 0, 8, -1],
/* 142 */	[0, 3, 7, 0, 7, 10, 0, 10, 9, 6, 10, 7, -1],
/* 143 */	[7, 6, 10, 7, 10, 8, 8, 10, 9, -1],
/* 144 */	[6, 8, 4, 11, 8, 6, -1],
/* 145 */	[3, 6, 11, 3, 0, 6, 0, 4, 6, -1],
/* 146 */	[8, 6, 11, 8, 4, 6, 9, 0, 1, -1],
/* 147 */	[9, 4, 6, 9, 6, 3, 9, 3, 1, 11, 3, 6, -1],
/* 148 */	[6, 8, 4, 6, 11, 8, 2, 10, 1, -1],
/* 149 */	[1, 2, 10, 3, 0, 11, 0, 6, 11, 0, 4, 6, -1],
/* 150 */	[4, 11, 8, 4, 6, 11, 0, 2, 9, 2, 10, 9, -1],
/* 151 */	[10, 9, 3, 10, 3, 2, 9, 4, 3, 11, 3, 6, 4, 6, 3, -1],
/* 152 */	[8, 2, 3, 8, 4, 2, 4, 6, 2, -1],
/* 153 */	[0, 4, 2, 4, 6, 2, -1],
/* 154 */	[1, 9, 0, 2, 3, 4, 2, 4, 6, 4, 3, 8, -1],
/* 155 */	[1, 9, 4, 1, 4, 2, 2, 4, 6, -1],
/* 156 */	[8, 1, 3, 8, 6, 1, 8, 4, 6, 6, 10, 1, -1],
/* 157 */	[10, 1, 0, 10, 0, 6, 6, 0, 4, -1],
/* 158 */	[4, 6, 3, 4, 3, 8, 6, 10, 3, 0, 3, 9, 10, 9, 3, -1],
/* 159 */	[10, 9, 4, 6, 10, 4, -1],
/* 160 */	[4, 9, 5, 7, 6, 11, -1],
/* 161 */	[0, 8, 3, 4, 9, 5, 11, 7, 6, -1],
/* 162 */	[5, 0, 1, 5, 4, 0, 7, 6, 11, -1],
/* 163 */	[11, 7, 6, 8, 3, 4, 3, 5, 4, 3, 1, 5, -1],
/* 164 */	[9, 5, 4, 10, 1, 2, 7, 6, 11, -1],
/* 165 */	[6, 11, 7, 1, 2, 10, 0, 8, 3, 4, 9, 5, -1],
/* 166 */	[7, 6, 11, 5, 4, 10, 4, 2, 10, 4, 0, 2, -1],
/* 167 */	[3, 4, 8, 3, 5, 4, 3, 2, 5, 10, 5, 2, 11, 7, 6, -1],
/* 168 */	[7, 2, 3, 7, 6, 2, 5, 4, 9, -1],
/* 169 */	[9, 5, 4, 0, 8, 6, 0, 6, 2, 6, 8, 7, -1],
/* 170 */	[3, 6, 2, 3, 7, 6, 1, 5, 0, 5, 4, 0, -1],
/* 171 */	[6, 2, 8, 6, 8, 7, 2, 1, 8, 4, 8, 5, 1, 5, 8, -1],
/* 172 */	[9, 5, 4, 10, 1, 6, 1, 7, 6, 1, 3, 7, -1],
/* 173 */	[1, 6, 10, 1, 7, 6, 1, 0, 7, 8, 7, 0, 9, 5, 4, -1],
/* 174 */	[4, 0, 10, 4, 10, 5, 0, 3, 10, 6, 10, 7, 3, 7, 10, -1],
/* 175 */	[7, 6, 10, 7, 10, 8, 5, 4, 10, 4, 8, 10, -1],
/* 176 */	[6, 9, 5, 6, 11, 9, 11, 8, 9, -1],
/* 177 */	[3, 6, 11, 0, 6, 3, 0, 5, 6, 0, 9, 5, -1],
/* 178 */	[0, 11, 8, 0, 5, 11, 0, 1, 5, 5, 6, 11, -1],
/* 179 */	[6, 11, 3, 6, 3, 5, 5, 3, 1, -1],
/* 180 */	[1, 2, 10, 9, 5, 11, 9, 11, 8, 11, 5, 6, -1],
/* 181 */	[0, 11, 3, 0, 6, 11, 0, 9, 6, 5, 6, 9, 1, 2, 10, -1],
/* 182 */	[11, 8, 5, 11, 5, 6, 8, 0, 5, 10, 5, 2, 0, 2, 5, -1],
/* 183 */	[6, 11, 3, 6, 3, 5, 2, 10, 3, 10, 5, 3, -1],
/* 184 */	[5, 8, 9, 5, 2, 8, 5, 6, 2, 3, 8, 2, -1],
/* 185 */	[9, 5, 6, 9, 6, 0, 0, 6, 2, -1],
/* 186 */	[1, 5, 8, 1, 8, 0, 5, 6, 8, 3, 8, 2, 6, 2, 8, -1],
/* 187 */	[1, 5, 6, 2, 1, 6, -1],
/* 188 */	[1, 3, 6, 1, 6, 10, 3, 8, 6, 5, 6, 9, 8, 9, 6, -1],
/* 189 */	[10, 1, 0, 10, 0, 6, 9, 5, 0, 5, 6, 0, -1],
/* 190 */	[0, 3, 8, 5, 6, 10, -1],
/* 191 */	[10, 5, 6, -1],
/* 192 */	[11, 5, 10, 7, 5, 11, -1],
/* 193 */	[11, 5, 10, 11, 7, 5, 8, 3, 0, -1],
/* 194 */	[5, 11, 7, 5, 10, 11, 1, 9, 0, -1],
/* 195 */	[10, 7, 5, 10, 11, 7, 9, 8, 1, 8, 3, 1, -1],
/* 196 */	[11, 1, 2, 11, 7, 1, 7, 5, 1, -1],
/* 197 */	[0, 8, 3, 1, 2, 7, 1, 7, 5, 7, 2, 11, -1],
/* 198 */	[9, 7, 5, 9, 2, 7, 9, 0, 2, 2, 11, 7, -1],
/* 199 */	[7, 5, 2, 7, 2, 11, 5, 9, 2, 3, 2, 8, 9, 8, 2, -1],
/* 200 */	[2, 5, 10, 2, 3, 5, 3, 7, 5, -1],
/* 201 */	[8, 2, 0, 8, 5, 2, 8, 7, 5, 10, 2, 5, -1],
/* 202 */	[9, 0, 1, 5, 10, 3, 5, 3, 7, 3, 10, 2, -1],
/* 203 */	[9, 8, 2, 9, 2, 1, 8, 7, 2, 10, 2, 5, 7, 5, 2, -1],
/* 204 */	[1, 3, 5, 3, 7, 5, -1],
/* 205 */	[0, 8, 7, 0, 7, 1, 1, 7, 5, -1],
/* 206 */	[9, 0, 3, 9, 3, 5, 5, 3, 7, -1],
/* 207 */	[9, 8, 7, 5, 9, 7, -1],
/* 208 */	[5, 8, 4, 5, 10, 8, 10, 11, 8, -1],
/* 209 */	[5, 0, 4, 5, 11, 0, 5, 10, 11, 11, 3, 0, -1],
/* 210 */	[0, 1, 9, 8, 4, 10, 8, 10, 11, 10, 4, 5, -1],
/* 211 */	[10, 11, 4, 10, 4, 5, 11, 3, 4, 9, 4, 1, 3, 1, 4, -1],
/* 212 */	[2, 5, 1, 2, 8, 5, 2, 11, 8, 4, 5, 8, -1],
/* 213 */	[0, 4, 11, 0, 11, 3, 4, 5, 11, 2, 11, 1, 5, 1, 11, -1],
/* 214 */	[0, 2, 5, 0, 5, 9, 2, 11, 5, 4, 5, 8, 11, 8, 5, -1],
/* 215 */	[9, 4, 5, 2, 11, 3, -1],
/* 216 */	[2, 5, 10, 3, 5, 2, 3, 4, 5, 3, 8, 4, -1],
/* 217 */	[5, 10, 2, 5, 2, 4, 4, 2, 0, -1],
/* 218 */	[3, 10, 2, 3, 5, 10, 3, 8, 5, 4, 5, 8, 0, 1, 9, -1],
/* 219 */	[5, 10, 2, 5, 2, 4, 1, 9, 2, 9, 4, 2, -1],
/* 220 */	[8, 4, 5, 8, 5, 3, 3, 5, 1, -1],
/* 221 */	[0, 4, 5, 1, 0, 5, -1],
/* 222 */	[8, 4, 5, 8, 5, 3, 9, 0, 5, 0, 3, 5, -1],
/* 223 */	[9, 4, 5, -1],
/* 224 */	[4, 11, 7, 4, 9, 11, 9, 10, 11, -1],
/* 225 */	[0, 8, 3, 4, 9, 7, 9, 11, 7, 9, 10, 11, -1],
/* 226 */	[1, 10, 11, 1, 11, 4, 1, 4, 0, 7, 4, 11, -1],
/* 227 */	[3, 1, 4, 3, 4, 8, 1, 10, 4, 7, 4, 11, 10, 11, 4, -1],
/* 228 */	[4, 11, 7, 9, 11, 4, 9, 2, 11, 9, 1, 2, -1],
/* 229 */	[9, 7, 4, 9, 11, 7, 9, 1, 11, 2, 11, 1, 0, 8, 3, -1],
/* 230 */	[11, 7, 4, 11, 4, 2, 2, 4, 0, -1],
/* 231 */	[11, 7, 4, 11, 4, 2, 8, 3, 4, 3, 2, 4, -1],
/* 232 */	[2, 9, 10, 2, 7, 9, 2, 3, 7, 7, 4, 9, -1],
/* 233 */	[9, 10, 7, 9, 7, 4, 10, 2, 7, 8, 7, 0, 2, 0, 7, -1],
/* 234 */	[3, 7, 10, 3, 10, 2, 7, 4, 10, 1, 10, 0, 4, 0, 10, -1],
/* 235 */	[1, 10, 2, 8, 7, 4, -1],
/* 236 */	[4, 9, 1, 4, 1, 7, 7, 1, 3, -1],
/* 237 */	[4, 9, 1, 4, 1, 7, 0, 8, 1, 8, 7, 1, -1],
/* 238 */	[4, 0, 3, 7, 4, 3, -1],
/* 239 */	[4, 8, 7, -1],
/* 240 */	[9, 10, 8, 10, 11, 8, -1],
/* 241 */	[3, 0, 9, 3, 9, 11, 11, 9, 10, -1],
/* 242 */	[0, 1, 10, 0, 10, 8, 8, 10, 11, -1],
/* 243 */	[3, 1, 10, 11, 3, 10, -1],
/* 244 */	[1, 2, 11, 1, 11, 9, 9, 11, 8, -1],
/* 245 */	[3, 0, 9, 3, 9, 11, 1, 2, 9, 2, 11, 9, -1],
/* 246 */	[0, 2, 11, 8, 0, 11, -1],
/* 247 */	[3, 2, 11, -1],
/* 248 */	[2, 3, 8, 2, 8, 10, 10, 8, 9, -1],
/* 249 */	[9, 10, 2, 0, 9, 2, -1],
/* 250 */	[2, 3, 8, 2, 8, 10, 0, 1, 8, 1, 10, 8, -1],
/* 251 */	[1, 10, 2, -1],
/* 252 */	[1, 3, 8, 9, 1, 8, -1],
/* 253 */	[0, 9, 1, -1],
/* 254 */	[0, 3, 8, -1],
/* 255 */	[-1]
];

var edgeVertexOffsets = [
/*  0 */    [ new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 0, 0) ],
/*  1 */    [ new THREE.Vector3(1, 0, 0), new THREE.Vector3(1, 1, 0) ],
/*  2 */    [ new THREE.Vector3(0, 1, 0), new THREE.Vector3(1, 1, 0) ],
/*  3 */    [ new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0) ],
/*  4 */    [ new THREE.Vector3(0, 0, 1), new THREE.Vector3(1, 0, 1) ],
/*  5 */    [ new THREE.Vector3(1, 0, 1), new THREE.Vector3(1, 1, 1) ],
/*  6 */    [ new THREE.Vector3(0, 1, 1), new THREE.Vector3(1, 1, 1) ],
/*  7 */    [ new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 1, 1) ],
/*  8 */    [ new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 1) ],
/*  9 */    [ new THREE.Vector3(1, 0, 0), new THREE.Vector3(1, 0, 1) ],
/* 10 */    [ new THREE.Vector3(1, 1, 0), new THREE.Vector3(1, 1, 1) ],
/* 11 */    [ new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1, 1) ]
];

var cornerOffsets = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(1, 1, 0),
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(0, 0, 1),
    new THREE.Vector3(1, 0, 1),
    new THREE.Vector3(1, 1, 1),
    new THREE.Vector3(0, 1, 1)
];