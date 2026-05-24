import battlefield from '../Images/battlefields.jpg';
import medicalDrones from '../Images/medicaldroness.jpg';
import nightVision from '../Images/nightvision.jpg';
import applications2 from '../components/Site Context/Applications Images/pexels-elfust-18960738.jpg';
import applications3 from '../components/Site Context/Applications Images/pexels-mysterious-ocean-260670408-12686560.jpg';

/** High-res application heroes (public/images/applications/) */
const appImg = (file) => `${process.env.PUBLIC_URL || ''}/images/applications/${file}`;

/** Hero banner videos (public/videos/applications/, watermark cropped) */
const appVid = (file) => `${process.env.PUBLIC_URL || ''}/videos/applications/${file}`;

const IMG = {
  disaster: appImg('disaster-relief-coordination.jpg'),
  resource: appImg('resource-extraction-planning.jpg'),
  rail: appImg('rail-system-evaluation.jpg'),
  agriculture: appImg('advanced-agriculture.jpg'),
  urban: appImg('urban-planning-strategy.jpg'),
  construction: appImg('construction-project-management.jpg'),
  gis: appImg('geographic-information-analysis.jpg'),
  mountain: appImg('mountain-topography-mapping.jpg'),
};

const VID = {
  disaster: appVid('disaster-relief-coordination.mp4'),
  resource: appVid('resource-extraction-planning.mp4'),
  rail: appVid('rail-system-evaluation.mp4'),
  agriculture: appVid('advanced-agriculture.mp4'),
  urban: appVid('urban-planning-strategy.mp4'),
  construction: appVid('construction-project-management.mp4'),
  gis: appVid('geographic-information-analysis.mp4'),
  mountain: appVid('mountain-topography-mapping.mp4'),
};

export const applicationsList = [
  {
    id: 'disaster-relief-coordination',
    title: 'Disaster Relief Coordination',
    shortDescription:
      'Advanced drone platforms and aerial intelligence for rapid-response missions in disaster-prone environments.',
    heroImage: IMG.disaster,
    heroVideo: VID.disaster,
    gallery: [IMG.disaster, battlefield, medicalDrones, nightVision],
    tagline: 'Mission-critical UAV technology for emergency and public safety agencies.',
    sections: [
      {
        heading: 'Who we work with',
        paragraphs: [
          'Our organization develops advanced drone platforms, aerial intelligence systems, and mission-critical UAV technologies in collaboration with projects associated with DRDO and multiple government emergency and public safety agencies. We provide specialized drone parts, integrated payload systems, autonomous flight technologies, and operational support for rapid-response missions in disaster-prone environments.',
        ],
      },
      {
        heading: 'Operational capability',
        paragraphs: [
          'Natural disasters and emergency situations demand immediate situational awareness and rapid operational coordination. Our disaster relief drone systems are designed to support rescue teams during floods, earthquakes, landslides, industrial accidents, and wildfire emergencies through real-time aerial intelligence and autonomous reconnaissance capabilities.',
          'Equipped with thermal imaging, LiDAR mapping, AI-based survivor detection, and encrypted communication systems, our UAVs can identify trapped individuals, damaged infrastructure, blocked access routes, and high-risk zones within minutes.',
        ],
      },
      {
        heading: 'Advanced projects',
        paragraphs: [
          'Advanced projects under this sector include swarm-based search-and-rescue drone networks, autonomous medical supply delivery UAVs, airborne communication relay platforms, and night-operation thermal reconnaissance systems capable of functioning in low-visibility conditions. We also integrate AI-powered disaster prediction analytics and rapid terrain reconstruction systems for emergency planning operations.',
        ],
      },
      {
        heading: 'Platforms, parts & support',
        paragraphs: [
          'In addition to complete drone platforms, we supply propulsion systems, long-range telemetry modules, ruggedized power systems, precision sensors, carbon-fiber airframes, autonomous navigation units, and custom payload integration services. Our engineering teams also provide technical support, fleet maintenance, software integration, and mission-specific drone customization for emergency response organizations operating in extreme environments.',
        ],
      },
    ],
    capabilities: [
      'Thermal imaging & LiDAR mapping for disaster zones',
      'AI-based survivor detection & encrypted comms',
      'Swarm search-and-rescue & medical delivery UAVs',
      'Airborne communication relay & night thermal recon',
      'AI disaster prediction & rapid terrain reconstruction',
    ],
    benefits: [
      'DRDO & government agency collaboration experience',
      'Minutes-to-intelligence for rescue coordination',
      'Full platforms plus parts & custom payloads',
      'Fleet maintenance & mission-specific customization',
    ],
    industries: ['DRDO projects', 'NDRF & emergency services', 'Public safety agencies', 'Disaster response NGOs'],
  },
  {
    id: 'resource-extraction-planning',
    title: 'Resource Extraction Planning',
    shortDescription:
      'High-resolution aerial survey and remote sensing for mining, oil & gas, quarry, and industrial resource planning.',
    heroImage: IMG.resource,
    heroVideo: VID.resource,
    gallery: [IMG.resource, battlefield, applications2],
    tagline: 'Terrain intelligence before field deployment begins.',
    sections: [
      {
        heading: 'Survey & planning',
        paragraphs: [
          'Efficient resource extraction operations require highly accurate terrain intelligence, geological assessment, and environmental monitoring before field deployment begins. Our aerial survey platforms are engineered to support mining operations, oil and gas exploration, quarry management, and industrial resource planning through high-resolution data acquisition and advanced remote sensing technologies.',
          'Using LiDAR scanners, hyperspectral imaging systems, thermal analysis payloads, and AI-driven mapping software, our UAV systems generate precise topographic models, mineral distribution estimates, and environmental impact assessments. These aerial platforms significantly reduce the time, manpower, and operational risks involved in surveying inaccessible or hazardous regions.',
        ],
      },
      {
        heading: 'Advanced projects',
        paragraphs: [
          'Our advanced technology initiatives include autonomous geological reconnaissance drones, AI-assisted mineral classification systems, methane leak detection UAVs, robotic inspection platforms for industrial shafts, and long-endurance fixed-wing mapping systems capable of covering large operational territories in a single mission cycle. These technologies support strategic extraction planning while improving operational safety and environmental compliance.',
        ],
      },
      {
        heading: 'Platforms, parts & support',
        paragraphs: [
          'We additionally provide industrial-grade drone motors, ESCs, navigation systems, airborne sensors, communication modules, ruggedized batteries, high-efficiency propulsion systems, and payload integration services for industrial operators and infrastructure developers. Our technical teams also assist with aerial data interpretation, survey mission planning, and long-term UAV maintenance support tailored for resource management applications.',
        ],
      },
    ],
    capabilities: [
      'LiDAR, hyperspectral & thermal survey payloads',
      'Topographic models & mineral distribution estimates',
      'Methane leak detection & shaft inspection UAVs',
      'Long-endurance fixed-wing territory mapping',
      'AI-assisted mineral classification',
    ],
    benefits: [
      'Safer surveys in inaccessible terrain',
      'Reduced manpower and survey cycle time',
      'Environmental impact assessment support',
      'Industrial-grade parts & maintenance programs',
    ],
    industries: ['Mining', 'Oil & gas', 'Quarries', 'Industrial resource planners'],
  },
  {
    id: 'rail-system-evaluation',
    title: 'Rail System Evaluation',
    shortDescription:
      'Continuous aerial inspection of tracks, bridges, tunnels, and electrification with AI defect detection.',
    heroImage: IMG.rail,
    heroVideo: VID.rail,
    gallery: [IMG.rail, applications3, nightVision],
    tagline: 'Predictive maintenance for modern railway infrastructure.',
    sections: [
      {
        heading: 'Infrastructure inspection',
        paragraphs: [
          'Modern railway infrastructure requires continuous inspection and predictive maintenance to ensure operational safety and transportation reliability. Our aerial monitoring systems are specifically designed to inspect railway tracks, bridges, tunnels, electrification systems, signaling infrastructure, and remote transportation corridors with high precision and operational efficiency.',
          'Through the integration of thermal diagnostics, AI-based defect detection, LiDAR terrain mapping, and vibration analysis technologies, our drones can identify rail deformation, structural fatigue, overheating electrical components, vegetation intrusion, and erosion risks before they escalate into critical failures. These capabilities help railway authorities optimize maintenance schedules while minimizing operational downtime.',
        ],
      },
      {
        heading: 'Advanced projects',
        paragraphs: [
          'Advanced projects in this sector include autonomous rail corridor surveillance systems, AI-powered crack detection algorithms, tunnel inspection UAVs, digital railway twin modeling platforms, and overhead power-line monitoring drones capable of conducting inspections in difficult terrain and low-light conditions. Real-time aerial analytics also improve infrastructure planning and emergency response preparedness across large railway networks.',
        ],
      },
      {
        heading: 'Platforms, parts & support',
        paragraphs: [
          'We provide inspection-grade UAV components including high-end propulsion systems, telemetry units, encrypted communication modules, industrial sensors, ruggedized airframes, navigation systems, and custom inspection payload integration. Our engineering support services include deployment planning, data integration, operator training, and maintenance solutions for transportation infrastructure agencies and industrial railway operators.',
        ],
      },
    ],
    capabilities: [
      'Thermal diagnostics & AI defect detection',
      'LiDAR corridor mapping & vibration analysis',
      'Tunnel & overhead power-line inspection UAVs',
      'Digital railway twin modeling',
      'Encrypted telemetry & ruggedized airframes',
    ],
    benefits: [
      'Identify failures before critical incidents',
      'Optimized maintenance & less downtime',
      'Operator training & data integration',
      'Custom inspection payload integration',
    ],
    industries: ['Indian Railways contractors', 'Metro projects', 'Industrial rail operators', 'Transport authorities'],
  },
  {
    id: 'advanced-agriculture',
    title: 'Advanced Agriculture',
    shortDescription:
      'Precision agriculture UAVs for crop monitoring, irrigation, spraying, and AI-driven field intelligence.',
    heroImage: IMG.agriculture,
    heroVideo: VID.agriculture,
    gallery: [IMG.agriculture, applications2],
    tagline: 'Data-driven farming from the sky.',
    sections: [
      {
        heading: 'Precision agriculture',
        paragraphs: [
          'Precision agriculture is transforming modern farming through intelligent automation, aerial analytics, and data-driven resource management. Our agricultural UAV systems are designed to support crop monitoring, irrigation optimization, soil analysis, pesticide spraying, and plantation management using advanced aerial sensing technologies.',
          'By integrating multispectral imaging, thermal analysis, GPS-guided autonomous flight systems, and AI-powered crop intelligence software, our drones help identify nutrient deficiencies, irrigation imbalances, pest infestations, and crop disease patterns before they affect large cultivation zones. These technologies improve yield quality while reducing chemical waste, labor costs, and operational inefficiencies.',
        ],
      },
      {
        heading: 'Advanced projects',
        paragraphs: [
          'Our advanced agriculture projects include autonomous spraying drones, AI-assisted plant disease recognition systems, smart irrigation mapping platforms, precision seed dispersal UAVs, and swarm-based crop monitoring networks for large-scale farming operations. We also support environmental monitoring and agricultural research through airborne remote sensing and field analytics technologies.',
        ],
      },
      {
        heading: 'Platforms, parts & support',
        paragraphs: [
          'We provide agricultural drone motors, spraying systems, telemetry modules, batteries, ESCs, flight controllers, precision navigation systems, communication equipment, and lightweight carbon-fiber airframes optimized for field operations. Our teams also assist with UAV deployment planning, software integration, maintenance services, and customized aerial solutions for agricultural organizations and commercial farming enterprises.',
        ],
      },
    ],
    capabilities: [
      'Multispectral imaging & thermal crop analysis',
      'Autonomous spraying & seed dispersal UAVs',
      'AI plant disease recognition',
      'Smart irrigation mapping & swarm monitoring',
      'GPS-guided autonomous flight systems',
    ],
    benefits: [
      'Higher yields with lower chemical waste',
      'Early pest & disease detection',
      'Field-optimized lightweight airframes',
      'Deployment planning & software integration',
    ],
    industries: ['Commercial farms', 'Agri-tech', 'Plantations', 'Agricultural research'],
  },
  {
    id: 'urban-planning-strategy',
    title: 'Urban Planning Strategy',
    shortDescription:
      'Aerial mapping and geospatial intelligence for smart cities, infrastructure, and sustainable urban development.',
    heroImage: IMG.urban,
    heroVideo: VID.urban,
    gallery: [IMG.urban, applications2],
    tagline: 'Spatial intelligence for growing cities.',
    sections: [
      {
        heading: 'Smart city planning',
        paragraphs: [
          'Rapid urban expansion requires accurate spatial intelligence, infrastructure monitoring, and data-driven planning methodologies. Our aerial mapping systems support smart city development, infrastructure expansion, transportation analysis, and environmental planning through advanced drone-based surveying and geospatial intelligence solutions.',
          'Using LiDAR scanning, high-resolution photogrammetry, thermal analytics, and AI-assisted modeling systems, our UAV platforms generate highly detailed urban terrain maps, traffic density studies, utility corridor assessments, and land utilization analysis. These capabilities enable planners and infrastructure agencies to make informed decisions regarding transportation networks, drainage systems, zoning strategies, and sustainable urban development.',
        ],
      },
      {
        heading: 'Advanced projects',
        paragraphs: [
          'Advanced projects in this sector include autonomous smart-city monitoring drones, AI-driven traffic optimization systems, urban digital twin generation platforms, pollution mapping UAV networks, and infrastructure heat-mapping technologies for energy efficiency planning. Our systems also assist emergency evacuation route analysis and large-scale public infrastructure evaluation.',
        ],
      },
      {
        heading: 'Platforms, parts & support',
        paragraphs: [
          'We supply professional-grade UAV systems, navigation modules, airborne sensors, telemetry equipment, propulsion systems, communication technologies, power solutions, and payload integration services for urban development operations. Our technical support teams also assist with GIS integration, aerial survey management, software deployment, and long-term UAV operational planning.',
        ],
      },
    ],
    capabilities: [
      'LiDAR & photogrammetry for urban basemaps',
      'Traffic density & utility corridor analysis',
      'Urban digital twin & pollution mapping',
      'Evacuation route & infrastructure heat-mapping',
      'GIS integration & survey management',
    ],
    benefits: [
      'Evidence-based zoning & transport planning',
      'Stakeholder-ready visual intelligence',
      'Sustainable development analytics',
      'Long-term operational UAV planning',
    ],
    industries: ['Urban local bodies', 'Smart city projects', 'Development authorities', 'Planning consultants'],
  },
  {
    id: 'construction-project-management',
    title: 'Construction Project Management',
    shortDescription:
      'Aerial progress tracking, 3D modeling, and safety monitoring for large civil and industrial builds.',
    heroImage: IMG.construction,
    heroVideo: VID.construction,
    gallery: [IMG.construction, applications3],
    tagline: 'Your construction site, documented from above.',
    sections: [
      {
        heading: 'Site intelligence',
        paragraphs: [
          'Large infrastructure and industrial construction projects require continuous monitoring, accurate progress tracking, and real-time structural analysis to maintain efficiency and safety standards. Our aerial construction management systems provide high-resolution project intelligence for highways, bridges, industrial facilities, commercial complexes, and large-scale civil engineering projects.',
          'Through LiDAR mapping, photogrammetry, thermal diagnostics, and AI-assisted analytics, our UAV platforms generate accurate 3D construction models, volumetric calculations, structural assessments, and progress documentation. Construction managers can monitor material distribution, identify safety hazards, optimize workflows, and maintain project timelines using real-time aerial data.',
        ],
      },
      {
        heading: 'Advanced projects',
        paragraphs: [
          'Advanced projects include autonomous construction surveillance drones, robotic inspection UAVs for hazardous environments, AI-powered structural crack analysis systems, digital twin infrastructure modeling platforms, and heavy-equipment monitoring systems integrated with aerial analytics. These technologies improve project transparency, reduce operational delays, and enhance construction site safety.',
        ],
      },
      {
        heading: 'Platforms, parts & support',
        paragraphs: [
          'We provide industrial drone motors, telemetry systems, ruggedized communication modules, flight controllers, sensors, propulsion systems, custom payloads, carbon-fiber airframes, and UAV maintenance services tailored for construction and infrastructure operations. Our engineering teams also assist with aerial data integration, mission planning, and long-term deployment strategies for industrial contractors and infrastructure developers.',
        ],
      },
    ],
    capabilities: [
      '3D models, volumetrics & progress documentation',
      'Thermal diagnostics & AI structural analysis',
      'Hazardous-environment inspection UAVs',
      'Digital twin & equipment monitoring',
      'Custom payloads & carbon-fiber airframes',
    ],
    benefits: [
      'Dispute resolution with dated aerial records',
      'Improved site safety & hazard identification',
      'Remote oversight for multi-site directors',
      'Mission planning & data integration support',
    ],
    industries: ['EPC contractors', 'Real estate developers', 'Highways & bridges', 'Industrial plants'],
  },
  {
    id: 'geographic-information-analysis',
    title: 'Geographic Information Analysis',
    shortDescription:
      'UAV remote sensing and geospatial analytics for precision terrain and infrastructure intelligence.',
    heroImage: IMG.gis,
    heroVideo: VID.gis,
    gallery: [IMG.gis, IMG.mountain],
    tagline: 'High-precision terrain intelligence at scale.',
    sections: [
      {
        heading: 'Geospatial intelligence',
        paragraphs: [
          'Accurate geographic intelligence is essential for infrastructure planning, environmental assessment, defense applications, and strategic decision-making. Our Geographic Information Analysis systems combine advanced UAV technologies with remote sensing and geospatial analytics to generate high-precision terrain intelligence across large operational regions.',
          'Equipped with LiDAR sensors, multispectral imaging payloads, thermal cameras, and AI-powered mapping software, our aerial platforms create detailed elevation models, land utilization datasets, environmental impact studies, and infrastructure distribution maps. These systems enable organizations to analyze flood-prone areas, vegetation density, transportation corridors, and terrain characteristics with exceptional accuracy.',
        ],
      },
      {
        heading: 'Advanced projects',
        paragraphs: [
          'Our advanced geospatial projects include autonomous reconnaissance drones, AI-assisted terrain classification systems, large-area fixed-wing mapping UAVs, airborne multispectral survey platforms, and real-time environmental analytics systems. We also support corridor mapping for utilities, pipelines, transportation systems, and strategic infrastructure development projects.',
        ],
      },
      {
        heading: 'Platforms, parts & support',
        paragraphs: [
          'We supply geospatial UAV platforms, airborne sensors, telemetry systems, encrypted communication equipment, navigation modules, propulsion systems, carbon-fiber structures, and payload integration solutions. Our technical services include aerial survey planning, GIS software integration, maintenance operations, and mission-specific UAV customization for geospatial analysis organizations and infrastructure agencies.',
        ],
      },
    ],
    capabilities: [
      'LiDAR, multispectral & thermal mapping',
      'Elevation models & land utilization datasets',
      'Fixed-wing large-area mapping UAVs',
      'Utility & pipeline corridor mapping',
      'GIS software integration & survey planning',
    ],
    benefits: [
      'Defense & infrastructure-grade accuracy',
      'Environmental impact study support',
      'Encrypted comms & mission customization',
      'End-to-end survey operations support',
    ],
    industries: ['Survey firms', 'Government GIS', 'Defense & strategic planning', 'Utilities & telecom'],
  },
  {
    id: 'mountain-topography-mapping',
    title: 'Mountain Topography Mapping',
    shortDescription:
      'High-altitude UAV mapping for rugged terrain, slope stability, and remote reconnaissance.',
    heroImage: IMG.mountain,
    heroVideo: VID.mountain,
    gallery: [IMG.mountain, IMG.gis, nightVision],
    tagline: 'Precision mapping where conventional survey cannot reach.',
    sections: [
      {
        heading: 'High-altitude mapping',
        paragraphs: [
          'Mountainous terrain presents significant challenges for conventional surveying due to altitude variations, unpredictable weather conditions, and limited accessibility. Our high-altitude UAV systems are engineered specifically for mountain mapping, terrain intelligence collection, and remote aerial reconnaissance in difficult operational environments.',
          'Using advanced LiDAR mapping, photogrammetry, thermal imaging, and AI-assisted terrain analysis technologies, our drones generate highly accurate elevation models, geological assessments, slope stability studies, and avalanche risk evaluations. These systems support infrastructure planning, border monitoring, environmental studies, and disaster prevention operations across remote mountainous regions.',
        ],
      },
      {
        heading: 'Advanced projects',
        paragraphs: [
          'Advanced projects include autonomous high-altitude reconnaissance drones, glacier movement monitoring systems, AI-based avalanche prediction platforms, long-endurance fixed-wing mapping UAVs, and real-time 3D terrain modeling technologies optimized for high-altitude environments. Our systems are also capable of night-operation terrain mapping using thermal and low-light imaging payloads.',
        ],
      },
      {
        heading: 'Platforms, parts & support',
        paragraphs: [
          'We provide ruggedized drone motors, high-efficiency ESCs, navigation systems, telemetry modules, long-range communication equipment, carbon-fiber airframes, power systems, and specialized payload integration services designed for harsh environmental conditions. Our engineering teams also support mission optimization, aerial survey planning, maintenance operations, and specialized UAV deployment strategies for mountainous and remote-area operations.',
        ],
      },
    ],
    capabilities: [
      'LiDAR & photogrammetry in high AMSL ops',
      'Slope stability & avalanche risk evaluation',
      'Glacier monitoring & AI avalanche prediction',
      'Night thermal & low-light terrain mapping',
      'Ruggedized propulsion & long-range comms',
    ],
    benefits: [
      'Access without rope teams on every slope',
      'Border & hydropower project support',
      'Harsh-environment payload integration',
      'Mission optimization for remote deployments',
    ],
    industries: ['Hydropower', 'Border infrastructure', 'Environmental agencies', 'Disaster prevention'],
  },
];

export function getApplicationBySlug(slug) {
  return applicationsList.find((app) => app.id === slug);
}

export function getRelatedApplications(currentId, limit = 5) {
  const index = applicationsList.findIndex((app) => app.id === currentId);
  if (index === -1) return applicationsList.slice(0, limit);

  const related = [];
  for (let i = 1; i < applicationsList.length && related.length < limit; i++) {
    const app = applicationsList[(index + i) % applicationsList.length];
    if (app.id !== currentId) related.push(app);
  }
  return related;
}
