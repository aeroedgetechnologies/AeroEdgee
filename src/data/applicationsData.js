import applications1 from '../components/Site Context/Applications Images/pexels-debarshi-mukherjee-803108656-28762353.jpg';
import applications2 from '../components/Site Context/Applications Images/pexels-elfust-18960738.jpg';
import applications3 from '../components/Site Context/Applications Images/pexels-mysterious-ocean-260670408-12686560.jpg';
import applications4 from '../components/Site Context/Applications Images/pexels-quang-nguyen-vinh-222549-14776899.jpg';
import applications5 from '../components/Site Context/Applications Images/pexels-sevenstormphotography-439416.jpg';
import applications6 from '../components/Site Context/Applications Images/pexels-shalenderkumar-4204698.jpg';
import applications7 from '../components/Site Context/Applications Images/pexels-urtimud-89-76108288-14263363.jpg';
import applications8 from '../components/Site Context/Applications Images/pexels-vanngo-ng-105653827-23857944.jpg';
import droneIceberg from '../Images/drone-with-camera-is-flying-iceberg.jpg';
import battlefield from '../Images/battlefields.jpg';
import medicalDrones from '../Images/medicaldroness.jpg';
import nightVision from '../Images/nightvision.jpg';

export const applicationsList = [
  {
    id: 'disaster-relief-coordination',
    title: 'Disaster Relief Coordination',
    shortDescription: 'Rapid aerial assessment and coordinated response when every minute counts.',
    heroImage: applications1,
    gallery: [applications1, battlefield, medicalDrones, droneIceberg],
    tagline: 'Deploy intelligence overhead before ground teams arrive.',
    overview:
      'When disasters strike, situational awareness is the difference between effective rescue and delayed response. AeroEdge aerial systems deliver real-time imagery, thermal overlays, and georeferenced maps so command centers can allocate resources, identify access routes, and monitor evolving hazards from a safe distance.',
    capabilities: [
      'Live aerial reconnaissance over flood, fire, and collapse zones',
      'Thermal imaging to locate survivors and hotspots',
      'Orthomosaic mapping for damage assessment reports',
      'Secure data links for multi-agency coordination',
    ],
    benefits: [
      'Faster search-and-rescue planning',
      'Reduced risk for first responders',
      'Documented evidence for relief funding',
      'Continuous monitoring as conditions change',
    ],
    industries: ['Emergency services', 'NDRF partners', 'Municipal corporations', 'NGOs'],
  },
  {
    id: 'resource-extraction-planning',
    title: 'Resource Extraction Planning',
    shortDescription: 'Precision surveys for mines, quarries, and extraction sites.',
    heroImage: applications7,
    gallery: [applications7, applications4, applications2, battlefield],
    tagline: 'Measure terrain once. Plan operations with confidence.',
    overview:
      'Extraction operations demand accurate volumetrics, slope analysis, and environmental boundaries. Our survey-grade drones capture high-resolution data that feeds directly into GIS and mine-planning workflows—reducing manual survey time while improving safety by keeping crews off unstable slopes.',
    capabilities: [
      'Stockpile and cut/fill volume calculations',
      'High-resolution DEM and contour generation',
      'Progress monitoring across shift cycles',
      'Boundary and encroachment verification',
    ],
    benefits: [
      'Lower surveying costs over large sites',
      'Improved compliance documentation',
      'Safer access to hazardous zones',
      'Data-ready exports for planning software',
    ],
    industries: ['Mining', 'Quarries', 'Oil & gas', 'Infrastructure contractors'],
  },
  {
    id: 'rail-system-evaluation',
    title: 'Rail System Evaluation',
    shortDescription: 'Track, corridor, and infrastructure inspection from above.',
    heroImage: applications3,
    gallery: [applications3, applications5, applications2, nightVision],
    tagline: 'See hundreds of kilometres of corridor in a single mission.',
    overview:
      'Rail networks span challenging terrain where manual inspection is slow and costly. AeroEdge platforms capture detailed imagery along rights-of-way, highlighting vegetation encroachment, structural defects, and drainage issues—helping maintenance teams prioritize repairs before failures occur.',
    capabilities: [
      'Corridor mapping along active and planned lines',
      'Bridge and embankment visual inspection',
      'Vegetation and obstacle detection',
      'Scheduled repeat flights for change detection',
    ],
    benefits: [
      'Fewer track possession windows required',
      'Predictive maintenance scheduling',
      'Enhanced safety for inspection crews',
      'Archival records for audit and insurance',
    ],
    industries: ['Indian Railways contractors', 'Metro projects', 'Logistics hubs', 'Port rail links'],
  },
  {
    id: 'advanced-agriculture',
    title: 'Advanced Agriculture',
    shortDescription: 'Crop health, irrigation, and yield insights from the sky.',
    heroImage: applications8,
    gallery: [applications8, applications2, droneIceberg, applications4],
    tagline: 'Turn fields into data-driven growing zones.',
    overview:
      'Modern agriculture depends on timely insight. Multispectral and RGB aerial surveys reveal crop stress, irrigation gaps, and pest patterns across hundreds of acres in a single flight—empowering agronomists and farm managers to act before yield is lost.',
    capabilities: [
      'NDVI and crop health index mapping',
      'Irrigation and drainage pattern analysis',
      'Precision spraying route planning',
      'Season-over-season comparison maps',
    ],
    benefits: [
      'Targeted input use reduces waste',
      'Higher yields through early intervention',
      'Less time walking large plots',
      'Reports for co-op and export compliance',
    ],
    industries: ['Commercial farms', 'Agri-tech', 'Irrigation boards', 'Research institutes'],
  },
  {
    id: 'urban-planning-strategy',
    title: 'Urban Planning Strategy',
    shortDescription: 'City-scale imagery for master plans and smart growth.',
    heroImage: applications6,
    gallery: [applications6, applications2, applications5, applications8],
    tagline: 'Plan cities with evidence, not assumptions.',
    overview:
      'Urban planners need current, accurate basemaps. AeroEdge delivers orthophotos, 3D context, and change-detection layers that support zoning decisions, transit planning, and green-space allocation—aligned with smart-city and AMRUT-style development goals.',
    capabilities: [
      'High-resolution city and ward mapping',
      'Informal settlement and land-use analysis',
      'Flood-plain and drainage visualization',
      'Before/after development monitoring',
    ],
    benefits: [
      'Stakeholder-ready visual presentations',
      'Faster approval cycles with clear data',
      'Transparent public consultation materials',
      'Integration with CAD and GIS platforms',
    ],
    industries: ['Urban local bodies', 'Development authorities', 'Architects', 'Consultants'],
  },
  {
    id: 'construction-project-management',
    title: 'Construction Project Management',
    shortDescription: 'Track progress, safety, and logistics on complex builds.',
    heroImage: applications5,
    gallery: [applications5, applications6, applications3, applications7],
    tagline: 'Your site superintendent—with a bird\'s-eye view.',
    overview:
      'Large construction sites change daily. Regular drone flights create visual timelines for owners and contractors, highlight safety violations, and verify earthwork quantities—keeping megaprojects on schedule and under budget.',
    capabilities: [
      'Weekly progress photo and video documentation',
      'Earthwork quantity verification',
      'Crane and equipment placement overview',
      'Site perimeter and hoarding inspection',
    ],
    benefits: [
      'Dispute resolution with dated aerial records',
      'Improved investor and client reporting',
      'Safer monitoring of high-risk zones',
      'Remote oversight for multi-site directors',
    ],
    industries: ['EPC contractors', 'Real estate developers', 'Industrial plants', 'Highways'],
  },
  {
    id: 'geographic-information-analysis',
    title: 'Geographic Information Analysis',
    shortDescription: 'Foundation data for GIS, mapping, and spatial decisions.',
    heroImage: applications2,
    gallery: [applications2, applications4, applications8, applications1],
    tagline: 'Spatial intelligence that powers every layer on the map.',
    overview:
      'GIS teams require consistent, georeferenced source data. AeroEdge capture workflows produce survey-grade outputs—orthomosaics, point clouds, and contour models—that integrate seamlessly into QGIS, ArcGIS, and custom enterprise platforms.',
    capabilities: [
      'Survey-grade orthomosaic production',
      'DTM/DSM generation for terrain analysis',
      'Asset and utility mapping support',
      'Custom projection and tiling for enterprise GIS',
    ],
    benefits: [
      'Single source of truth for spatial projects',
      'Reduced ground survey man-hours',
      'Repeatable capture standards',
      'Scalable from parcels to districts',
    ],
    industries: ['Survey firms', 'Government GIS cells', 'Telecom', 'Utilities'],
  },
  {
    id: 'mountain-topography-mapping',
    title: 'Mountain Topography Mapping',
    shortDescription: 'Accurate terrain models in the world\'s toughest landscapes.',
    heroImage: applications4,
    gallery: [applications4, applications7, droneIceberg, applications3],
    tagline: 'Where roads cannot go, drones still map.',
    overview:
      'Mountainous regions challenge traditional surveying. Our high-altitude-capable platforms map ridges, valleys, and hydrology with precision—supporting hydro projects, defence infrastructure, tourism development, and environmental studies in remote terrain.',
    capabilities: [
      'Steep-slope DEM and contour mapping',
      'Watershed and landslide hazard assessment',
      'High AMSL operational experience',
      'Integration with hydrology and structural studies',
    ],
    benefits: [
      'Access without rope teams on every slope',
      'Engineering-ready elevation data',
      'Faster feasibility studies for mountain projects',
      'Repeat surveys after seismic or weather events',
    ],
    industries: ['Hydropower', 'Defence & border infrastructure', 'Tourism boards', 'Environmental agencies'],
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
